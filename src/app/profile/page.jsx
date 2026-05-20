"use client";
import UpdateProfile from "@/components/shared/UpdateProfile";
import { authClient } from "@/lib/auth.client";
import { Button, Card } from "@heroui/react";
import {
  Mail,
  User2,
  Pencil,
  ShieldCheck,
  SquarePen,
} from "lucide-react";
import Image from "next/image";

const ProfilePage = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  return (
    <div className="min-h-[85vh] bg-gradient-to-br from-red-50 via-white to-rose-100 flex items-center justify-center px-4 py-10">
      
      <Card className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        
        <div className="relative h-36 bg-gradient-to-r from-red-500 via-rose-500 to-pink-500">
          
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
            <div className="relative">
              
              <Image
                src={
                  user?.image ||
                  "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                width={120}
                height={120}
                alt="profile"
                className="h-[120px] w-[120px] rounded-full object-cover border-4 border-white shadow-xl"
              />

              <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full bg-green-500 border-2 border-white" />
            </div>
          </div>
        </div>

        <div className="pt-20 pb-8 px-6 text-center">
          
          <h2 className="text-2xl font-bold text-gray-800">
            {user?.name || "Anonymous User"}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Welcome back to your dashboard
          </p>

          <div className="mt-8 space-y-4">
            
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
              
              <div className="bg-red-100 p-3 rounded-xl">
                <User2 size={20} className="text-red-500" />
              </div>

              <div className="text-left">
                <p className="text-xs text-gray-500">
                  Full Name
                </p>

                <h4 className="font-semibold text-gray-800">
                  {user?.name}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
              
              <div className="bg-blue-100 p-3 rounded-xl">
                <Mail size={20} className="text-blue-500" />
              </div>

              <div className="text-left overflow-hidden">
                <p className="text-xs text-gray-500">
                  Email Address
                </p>

                <h4 className="font-semibold text-gray-800 truncate">
                  {user?.email}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
              
              <div className="bg-green-100 p-3 rounded-xl">
                <ShieldCheck
                  size={20}
                  className="text-green-500"
                />
              </div>

              <div className="text-left">
                <p className="text-xs text-gray-500">
                  Account Status
                </p>

                <h4 className="font-semibold text-green-600">
                  Verified Account
                </h4>
              </div>
            </div>
          </div>

          <UpdateProfile/>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;