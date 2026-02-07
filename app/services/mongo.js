import mongoose from "mongoose";

export async function bdConnect() {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected')
        return connect
    } catch (err) {
        console.log(err)
    }
}