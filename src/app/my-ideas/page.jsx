
import FeaturedCard from "@/components/shared/FeaturedCard";
import UserIdea from "@/components/shared/UserIdea";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth.client"
import { getUserIdeas } from "@/lib/data";
import { Lightbulb } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";





export const metadata = {
  title: "my-ideas-Idea vault",
  description: "Idea vault",
};

const MyIdeasPage = async () => {
    // const { data: session } = authClient.useSession();
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const id = session?.user?.id
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
   console.log("token form ",token);
   
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/userIdea/${id}`, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    });
    const postsDAta = await res.json();



    return (
        <div className="mx-auto container mt-10 px-5">
            <h1 className="font-bold text-2xl mb-3 dark:text-gray-100">Ideas you have shared</h1>
            <div>
                {
                    postsDAta.length === 0 ? (
                        <div className="flex flex-col items-center justify-center border border-dashed border-gray-200 dark:border-gray-700 rounded-3xl p-16 bg-white dark:bg-slate-800 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm mt-8 shadow-sm transition-all duration-300">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg shadow-rose-200/50 mb-5">
                                <Lightbulb size={24} className="stroke-[2.5]" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">No ideas yet</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm mb-6 leading-relaxed text-center">
                                Share your first concept — the vault is waiting.
                            </p>
                            <Link
                                href="/add-ideas"
                                className="rounded-xl gradient-button px-6 py-3 text-sm font-semibold text-white shadow-md shadow-rose-200/50 transition duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Share an idea
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                            {postsDAta?.map(idea => <UserIdea key={idea._id} idea={idea} />)}
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default MyIdeasPage