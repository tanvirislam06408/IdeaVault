'use client'
import { authClient } from "@/lib/auth.client";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignOut = () => {
    const route=useRouter();
    const handleLogout = async() => {
      const res = await authClient.signOut();
      if(res.error){
        toast.error(res.error);
      }else{
        toast.success("Logout successfully");
        route.push('/')
        route.refresh();
      }
    }
    return <Button className={'flex gap-5'} variant="ghost" onClick={handleLogout}>Logout <ArrowRightFromSquare className="size-3.5 text-danger" /></Button>
};

export default SignOut;