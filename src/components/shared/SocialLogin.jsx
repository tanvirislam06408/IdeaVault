'use client'
import { authClient } from '@/lib/auth.client';
import { Button } from '@heroui/react';
import { Icon } from "@iconify/react";

const SocialLogin = () => {

    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);
        
    };

    return <Button onClick={signIn} className="w-full rounded-xl my-5" variant="outline">
        <Icon icon="devicon:google" />
        Sign in with Google
    </Button>
};

export default SocialLogin;