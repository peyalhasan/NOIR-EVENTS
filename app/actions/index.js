'use server'

import { createUser, findUserCredentials, updateGoing, updateInterest } from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const registerUser = async (formData) => {
    const user = Object.fromEntries(formData);
    const created = await createUser(user)
    redirect('/login')
}

export const performLogin = async (formData) => {
    try {
        const credential = {};
        credential.email = formData.get('email');
        credential.password = formData.get('password');
        const found = await findUserCredentials(credential);
        return found
    } catch (err) {
        throw new Error(`User with email ${formData.get('email')} not found`)
    }
}

export async function addInterestedEvent(eventId, authId) {
    try {
        await updateInterest(eventId, authId)
    } catch (error) {
        throw error;
    }
    revalidatePath('/')
}

export async function addGoingEvent(eventId, user) {
    try {
        await updateGoing(eventId, user?.id)
    } catch (err) {
        throw err
    }
    revalidatePath('/')
    redirect('/')
}