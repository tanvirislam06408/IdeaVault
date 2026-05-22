'use client'
import { authClient } from '@/lib/auth.client';
import { Button } from '@heroui/react';
import { Icon } from "@iconify/react";
import { useRouter, useSearchParams } from 'next/navigation';

const SocialLogin = () => {

  const searchParams= useSearchParams();
  const target=searchParams.get("callbackUrl") || '/'
  const router=useRouter();
    const signIn = async () => {
        const {data,error} = await authClient.signIn.social({
            provider: "google",
        });

        console.log(data);
        
        
        
    };

    return <Button onClick={signIn} className="w-full  rounded-xl my-5 dark:bg-slate-800 dark:border-gray-200 dark:text-gray-200 dark:hover:bg-slate-700" variant="outline">
        <Icon icon="devicon:google" />
        Sign in with Google
    </Button>
};

export default SocialLogin;