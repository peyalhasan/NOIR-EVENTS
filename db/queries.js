import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/user-models";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";
import mongoose from "mongoose";


async function getAllEvents() {
    const allEvents = await eventModel.find().lean();
    return replaceMongoIdInArray(allEvents);
}


async function getEventById(id) {
    const event = await eventModel.findById(id).lean();
    return replaceMongoIdInObject(event)
}

async function createUser(user) {
    return await userModel.create(user)
}

async function findUserCredentials(credentials) {
    const user = await userModel.findOne(credentials).lean();
    return user;
}

export { getAllEvents, getEventById, createUser, findUserCredentials };