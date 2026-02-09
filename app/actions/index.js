'use server'

import { createUser, findUserCredentials, getEventById, updateGoing, updateInterest } from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";

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
        await sendEmail(eventId, user)
    } catch (err) {
        throw err
    }
    revalidatePath('/')
    redirect('/')
}

async function sendEmail(eventId, user) {
    try {
        const event = await getEventById(eventId);
        const resend = new Resend(process.env.RESEND_API_KEY);

        const userName = String(user?.name || 'User');
        const userEmail = String(user?.email);
        const eventName = String(event?.name || 'Event');

        const message = `Dear ${userName}, you have been successfully registered for the event, ${eventName}. Please carry this email and your official id to the venue. We are excited to have you here.`;

        const { data, error } = await resend.emails.send({
            from: 'Noir Event  <onboarding@resend.dev>',
            to: userEmail,
            subject: "Successfully Registered for the event!",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
                    <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h2 style="color: #2563eb; font-size: 24px; margin-bottom: 20px; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                            🎉 Event Registration Successful!
                        </h2>
                        <div style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                            ${message}
                        </div>
                        <div style="background-color: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin-top: 20px; border-radius: 4px;">
                            <p style="margin: 0; color: #92400e; font-size: 14px;">
                                <strong>Important:</strong> Please bring this email and your official ID to the venue.
                            </p>
                        </div>
                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
                            <p style="color: #9ca3af; font-size: 14px; margin: 0;">
                                Looking forward to seeing you at the event! 🎊
                            </p>
                        </div>
                    </div>
                </div>
            `
        });
    } catch (err) {
        console.error('Email error:', err);
        throw new Error(err.message || 'Email sending failed');
    }
}