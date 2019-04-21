import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    userId: { type: String, required: true, unique: true, },
    password: { type: String, required: true, },
    userName: { type: String, required: true, },
    email: { type: String, },
}, {
    timestamps: true
})

const userModel = mongoose.model("user", userSchema)

export default userModel