import mongoose from "mongoose";

export async function bdConnect() {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        return connect
    } catch (err) {
        console.log('opps')
        console.log(err)
    }
}