"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDB"
import User from "@/models/User"

export const initiate = async (amount, to_user, paymentform) => {
    try {
        await connectDB()
        //fetch the secret of the user who is getting the payment
        let user = await User.findOne({ username: to_user })
        console.log("ID:", user.razorPayId, "Secret:", user.razorPaySecret)

        if (!user || !user.razorPayId || !user.razorPaySecret) {
            throw new Error("Missing Razorpay credentials for user");
        }

        const instance = new Razorpay({
            key_id: user.razorPayId,
            key_secret: user.razorPaySecret
        })
        console.log("Razorpay instance created with key_id:", user.razorPayId)


        let options = {
            amount: Number.parseInt(amount),
            currency: "INR",
        }

        let order = await instance.orders.create(options)
        console.log(order)

        if (!order || !order.id) {
            throw new Error("Failed to create Razorpay order");
        }

        //create a payment object which shows a pending payment in the database
        await Payment.create({
            order_id: order.id,
            amount: amount / 100,
            to_user: to_user,
            name: paymentform.name,
            message: paymentform.message
        })
        return order

    } catch (error) {
        console.error("Payment initiation failed:", error)
        throw new Error("Payment initiation failed: " + error.message)
    }
}

export const fetchUser = async (username) => {
    await connectDB()
    let u = await User.findOne({ username: username })
    if (!u) {
        return null; // or throw new Error("User not found");
    }
    const user = u.toObject({ flattenObjectIds: true });
    return user;
}

export const fetchPayments = async (username) => {
    await connectDB()

    //find all payments sorted by decreasing order of amount and flatten object id
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).lean()
    return p
}


export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)

    //if the username is begin updated, check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "username already exists" }
        }
    }

    await User.updateOne({ email: ndata.email }, ndata)
}
