import mongoose from "mongoose";
const schema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: String,
    role: {
        type: String,
        enum: ["ADMIN", "USER", "FACULTY", "STUDENT"],
        default: "USER",
    },
    dob: Date,
    firstName: String,
    lastName: String,

}, { collection: "users" });
export default schema;