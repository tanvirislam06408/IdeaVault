import { auth } from "@/lib/auth";
import { Avatar } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import { FiMessageCircle } from "react-icons/fi";


export const metadata = {
  title: "interactions-ideas",
  description: "Idea vault",
};

const MyInteractions = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const {token}=await auth.api.getToken({
        headers: await headers()
    })
    
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/interactions/${session?.user?.id}`,{
        headers:{
            'authorization': `Bearer ${token}`
        }
    });
    const data = await res.json();



    if(data.length === 0){
        return (
            <div className="flex items-center justify-center min-h-[60vh] dark:bg-slate-950">
                <p className="text-lg font-medium text-gray-600 dark:text-gray-400">No comments yet</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#f5f5f7] dark:bg-slate-950 px-2.5 md:px-0">

            <div className="container mx-auto py-7">
                <div className="mb-12">
                    <p className="text-sm font-semibold tracking-wide uppercase gradient-text">
                        Your Activity
                    </p>

                    

                    <p className="mt-4 text-xl text-slate-500 dark:text-slate-400">
                        Ideas you've commented on and the conversations you've started.
                    </p>
                </div>

                {/* Recent Comments */}
                <div>
                    <div className="mb-6 flex items-center gap-3">
                        <FiMessageCircle className="text-3xl text-rose-500" />

                        <h2 className="text-3xl font-bold text-[#0f172a] dark:text-gray-100">
                            Recent comments
                        </h2>
                    </div>

                    {
                        data.map(comment => {
                            return <div key={comment._id} className="flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-slate-900 p-4 shadow-sm mt-3">
                                {/* Avatar */}
                                <Avatar size="sm" className="mt-1">
                                    <Avatar.Image alt="John Doe" src={session?.user.image} />
                                    <Avatar.Fallback>JD</Avatar.Fallback>
                                </Avatar>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-base font-bold text-[#0f172a] dark:text-gray-100">
                                            You commented
                                        </span>

                                        <span className="text-base text-slate-500 dark:text-slate-400">on</span>

                                        <Link
                                            href={`/ideas/${comment.post_id}`}
                                            className="text-base font-medium text-rose-500 hover:underline"
                                        >
                                            {comment.comment}
                                        </Link>

                                        <span className="rounded-full bg-rose-50 dark:bg-rose-950/30 px-3 py-1 text-xs font-medium text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/50">
                                            Idea
                                        </span>
                                    </div>

                                    <p className="mt-2 text-lg text-[#0f172a] dark:text-gray-200">{comment.comment}</p>

                                    <p className="mt-2 text-sm text-slate-400 dark:text-slate-500">
                                        {new Date(comment.createdAt || new Date()).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default MyInteractions;