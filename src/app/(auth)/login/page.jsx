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

const LoginPage = () => {
    const [err,setErr]=useState()
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());


    const { data, error } = await authClient.signIn.email({
        ...userData
})

    if(error){
        setErr(error.message)
    }


  };
  

  return (
    <div className="flex flex-col md:flex-row gap-1.5 items-center justify-center min-h-[70vh] px-4 mt-16">
        <div className='flex-1 md:max-w-[40%] max-w-[70%]'>
             <Lottie animationData={animationData}/>
        </div>
      <div className="w-full flex-1 max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">

        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Welcome back
        </h1>

        <p className="text-center text-sm text-gray-500 mt-2 mb-6">
          Log in to continue building and sharing ideas.
        </p>

        {/* Form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-5">

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
            <Label className="text-sm font-medium text-gray-700">
              Email
            </Label>

            <Input
              placeholder="john@example.com"
              className="w-full"
            />

            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type="password"
            minLength={6}
            validate={(value) => {
              if (value.length < 6) {
                return 'Password must be at least 6 characters';
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
            <Label className="text-sm font-medium text-gray-700">
              Password
            </Label>

            <Input
              placeholder="Enter your password"
              className="w-full"
            />

            <Description className="text-xs text-blue-500 cursor-pointer mt-1 hover:underline">
              Forgot password?
            </Description>

            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>
            <p className='text-red-500 text-sm'>{err}</p>
          {/* Button */}
          <Button
            type="submit"
            className="w-full py-3 mt-2 rounded-lg font-medium gradient-button transition"
          >
            Login
          </Button>
        </form>
        <div className=' mt-4 text-center flex items-center gap-1.5 '><div className='border border-r-gray-400 w-full'></div> <p>OR</p> 
        <div className='border border-r-gray-400 w-full '></div>
        </div>
        <SocialLogin/>
        <p className='text-center mt-3 text-muted'>New here ? <Link className='text-blue-500' href={'/register'}>Create a account</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;