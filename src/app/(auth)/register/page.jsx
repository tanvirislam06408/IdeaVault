'use client';
import animationData from '../../../../public/lotties/register.json';
import {
    Button,
    Description,
    FieldError,
    Input,
    Label,
    Separator,
    TextField,
} from '@heroui/react';
import React, { useState } from 'react';
import SocialLogin from '@/components/shared/SocialLogin';
import Lottie from 'lottie-react';
import Link from 'next/link';
import { authClient } from '@/lib/auth.client';
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const [err, setErr] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();
        setErr('')
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            ...userData,
            callbackURL: "/",
        });
        if(data?.user){
            toast.success("Register successful !")
        }
        if (error) {
            setErr(error.message)
        }

    };

    return (
        <div className="flex flex-col md:flex-row gap-1.5 items-center justify-center min-h-[70vh] px-4 mt-16 dark:bg-slate-950">
            <div className='flex-1 md:max-w-[40%] max-w-[70%]'>
                <Lottie animationData={animationData} />
            </div>
            <div className="w-full flex-1 max-w-md bg-white dark:bg-slate-800 border dark:border-gray-700 rounded-2xl shadow-lg shadow-rose-100 dark:shadow-none p-8">

                {/* Header */}
                <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
                    Join IdeaVault
                </h1>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2 mb-6">
                    Share, refine, and discover startup ideas worth building.
                </p>

                {/* Form */}
                <form onSubmit={onSubmit} className="flex flex-col gap-5">

                    {/* name */}
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Your Name
                        </Label>

                        <Input
                            placeholder="jon doe"
                            className="w-full dark:bg-slate-700 dark:text-gray-100 dark:border-gray-600"
                        />

                        <FieldError className="text-red-500 text-xs mt-1" />
                    </TextField>
                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return 'Please enter a valid email address';
                            }
                            return null;
                        }}
                    >
                        <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </Label>

                        <Input
                            placeholder="john@example.com"
                            className="w-full dark:bg-slate-700 dark:text-gray-100 dark:border-gray-600"
                        />

                        <FieldError className="text-red-500 text-xs mt-1" />
                    </TextField>
                    {/* Email */}
                    <TextField
                        isRequired
                        name="image"
                        type="url"
                    >
                        <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Photo Url
                        </Label>

                        <Input
                            placeholder="https://..."
                            className="w-full dark:bg-slate-700 dark:text-gray-100 dark:border-gray-600"
                        />

                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        minLength={8}
                        validate={(value) => {
                            if (value.length < 8) {
                                return 'Password must be at least 8 characters';
                            }
                            if (!/[A-Z]/.test(value)) {
                                return 'Must include at least one uppercase letter';
                            }
                            if (!/[a-z]/.test(value)) {
                                return 'Must include at least one lowercase letter';
                            }
                            return null;
                        }}
                    >
                        <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                        </Label>

                        <Input
                            placeholder="Enter your password"
                            className="w-full dark:bg-slate-700 dark:text-gray-100 dark:border-gray-600"
                        />
                        <FieldError className="text-red-500 text-xs mt-1" />
                    </TextField>
                    <p className='text-red-500 text-sm'>{err}</p>
                    {/* Button */}
                    <Button
                        type="submit"
                        className="w-full py-3 mt-2 rounded-lg font-medium gradient-button transition"
                    >
                        SignUp
                    </Button>
                </form>
                <div className=' mt-4 text-center flex items-center gap-1.5 dark:text-gray-300'><div className='border border-r-gray-400 dark:border-gray-600 w-full'></div> <p>OR</p>
                    <div className='border border-r-gray-400 dark:border-gray-600 w-full '></div>
                </div>
                <SocialLogin />
                <p className='text-center mt-3 text-muted dark:text-gray-400'>Already a member ? <Link className='text-rose-500' href={'/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;