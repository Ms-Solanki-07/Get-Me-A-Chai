import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Define the User schema
const userSchema = new Schema({
    name: {
        type: String, 
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
    },
    coverPic: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    razorPayId:{
        type: String,
    },
    razorPaySecret:{
        type: String,
    },
    profilePicture:{
        type: String,
    },
    coverPicture:{
        type: String,
    }
}); 
export default mongoose.models.User || model("User", userSchema);