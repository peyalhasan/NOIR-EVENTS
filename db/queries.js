import { dbConnect } from "@/app/services/mongo";
import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/user-models";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";
import mongoose from "mongoose";


async function getAllEvents({ query }) {
    await dbConnect()
    let allEvents = [];

    if (query) {
        const regex = new RegExp(query, "i");
        allEvents = await eventModel.find({
            $or: [
                { name: { $regex: regex } },
                { details: { $regex: regex } },
                { location: { $regex: regex } }
            ]
        }).lean()

    } else {
        allEvents = await eventModel.find().lean();
    }
    return replaceMongoIdInArray(allEvents);
}


async function getEventById(id) {
    await dbConnect()
    const event = await eventModel.findById(id).lean();
    return replaceMongoIdInObject(event)
}

async function createUser(user) {
    await dbConnect()
    return await userModel.create(user)
}

async function findUserCredentials(credentials) {
    await dbConnect()
    const user = await userModel.findOne(credentials).lean();
    if (user) {

        return replaceMongoIdInObject(user)
    }
    return null;
}

async function updateInterest(eventId, authId) {
    await dbConnect();

    const event = await eventModel.findById(eventId);

    if (event) {
        const founUsers = event.interested_ids.find(id => id.toString() === authId);

        if (founUsers) {
            event.interested_ids.pull(new mongoose.Types.ObjectId(authId))
        } else {
            event.interested_ids.push(new mongoose.Types.ObjectId(authId))
        }
        event.save()
    }


}


async function updateGoing(eventId, authId) {

    await dbConnect()

    const event = await eventModel.findById(eventId);
    event.going_ids.push(new mongoose.Types.ObjectId(authId))
    event.save()
}

export { getAllEvents, getEventById, createUser, findUserCredentials, updateInterest, updateGoing };