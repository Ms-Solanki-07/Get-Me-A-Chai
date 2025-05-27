"use client"

import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { initiate, fetchUser, fetchPayments } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
    const { data: session } = useSession()
    const [currentUser, setCurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast('Payment has been Done', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        router.push(`/${username}`)
        if (!session) {
            router.push('/login')
        }
    }, [])


    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchUser(username)
        setCurrentUser(u)
        let dbPayments = await fetchPayments(username)
        setPayments(dbPayments)
    }


    const pay = async (amount) => {

        try {
            //get the order id
            let response = await initiate(amount, username, paymentform)
            let orderId = response.id

            var options = {
                "key": currentUser.razorPayId, // Enter the Key ID generated from the Dashboard
                "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Get me a chai", //your business name
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
                "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                    "name": paymentform.name, //your customer's name
                    "email": "gaurav.kumar@example.com",
                    "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            }
            var rzp1 = new Razorpay(options);
            rzp1.open();
        } catch (err) {
            console.error("Razorpay payment failed:", err);
            alert("Payment initiation failed. Please try again.");
        }
    };


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full bg-gray-200 relative'>
                <img className='object-cover w-full h-35 md:h-62' src={currentUser.coverPicture} alt="cover" />

                <div className='absolute -bottom-14 border-2 border-amber-500 left-[38%] md:left-[46%]  rounded-2xl bg-white overflow-hidden size-28'>
                    <img width={150} height={150} className='object-cover size-28' src={currentUser.profilePicture} alt="Profile" />
                </div>
            </div>

            <div className='flex flex-col items-center justify-center mt-18'>
                <h1 className='text-lg md:text-3xl md:font-bold mb-2'>{`@${username}`}</h1>
                <p className='text-gray-400'>Lets help {username} get a chai.</p>
                <p className='text-gray-500'>
                    {payments.length} Payments . ₹{payments.reduce((a, b) => a + b.amount, 0)} Raised
                </p>
            </div>

            <div className='payment flex flex-col md:flex-row w-[80%] mx-auto mt-10 mb-12 gap-4'>
                <div className='supportes w-full md:w-1/2 bg-gray-800 p-5 rounded-lg'>
                    {/* show the list of supporters */}
                    <h2 className='text-lg font-bold mb-2'>Top 5 Supporters..</h2>
                    <ul className='mx-2'>
                        {payments.length == 0 && <li>No Payments yet..</li>}
                        {payments.slice(0, 5).map((p, i) => {
                            return <li key={p.order_id} className='my-2 flex items-center gap-1'>
                                <img width={33} src="avatar.gif" alt="" />
                                <span>
                                    {p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message &quot;{p.message}&quot;
                                </span>
                            </li>
                        })}

                    </ul>
                </div>

                <div className="makePayment w-full md:w-1/2 bg-gray-800 p-5 rounded-lg">
                    <h2 className='text-lg font-bold'>Make a Payment</h2>
                    <div className='flex flex-col gap-3 mt-2'>
                        <input onChange={handleChange} name="name" value={paymentform.name} type="text" placeholder='Enter Name' className='p-2 rounded-lg bg-gray-700' required />
                        <input onChange={handleChange} name="message" value={paymentform.message} type="text" placeholder='Enter Message' className='p-2 rounded-lg bg-gray-700' required />
                        <input onChange={handleChange} name="amount" value={paymentform.amount} type="number" placeholder='Enter Amount' className='p-2 rounded-lg bg-gray-700' required />
                        <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} className='bg-[#FF007A] hover:bg-[#ff007bd0] p-2 rounded-lg text-white disabled:bg-[#3d3b3c]' disabled={paymentform.name?.length < 3 || paymentform.message?.length < 3 || paymentform.amount < 1}>Make Payment</button>
                    </div>
                    {/* or chsose form these Amount  */}
                    <div>
                        <div className='flex md:justify-start justify-between gap-2 mt-2'>
                            <button onClick={() => pay(1000)} className='bg-gray-700 p-2 hover:bg-gray-600 rounded-lg text-white'>Pay ₹10</button>
                            <button onClick={() => pay(2000)} className='bg-gray-700 p-2 hover:bg-gray-600 rounded-lg text-white'>Pay ₹20</button>
                            <button onClick={() => pay(3000)} className='bg-gray-700 p-2 hover:bg-gray-600 rounded-lg text-white'>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
