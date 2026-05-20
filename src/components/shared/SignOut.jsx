'use client'
import { authClient } from "@/lib/auth.client";
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
        route.refresh();
      }
    }
    return <Button variant="outline" onClick={handleLogout}>Logout</Button>
};

export default SignOut;