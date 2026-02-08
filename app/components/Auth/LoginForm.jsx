'use client'

import { performLogin } from "@/app/actions";
import { useState } from "react";
import { useFormStatus } from "react-dom";


function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
            {pending ? 'Logging in...' : 'Login'}
        </button>
    )
}

function LoginForm() {

    const [error, setError] = useState('')

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            await performLogin(formData)
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <form className="login-form" onSubmit={onSubmit}>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            {
                error && <h1 className="text-red-600">{error}</h1>
            }
            <SubmitButton />
        </form>
    )
}

export default LoginForm