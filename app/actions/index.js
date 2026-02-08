'use server'

import { createUser, findUserCredentials } from "@/db/queries";
import { redirect } from "next/navigation";

export const registerUser = async (formData) => {
    const user = Object.fromEntries(formData);
    const created = await createUser(user)
    redirect('/login')
}

export const performLogin = async (formData) =>{
    const credential = {};
    credential.email = formData.get('email');
    credential.password = formData.get('password');
    const found = await findUserCredentials(credential);

    if(found){
        redirect('/')
    }else{
        throw new Error(`User with email ${formData.get('email')} not found`)
    }
}