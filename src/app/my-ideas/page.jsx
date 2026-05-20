
import FeaturedCard from "@/components/shared/FeaturedCard";
import UserIdea from "@/components/shared/UserIdea";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth.client"
import { getUserIdeas } from "@/lib/data";
import { Lightbulb } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

const MyIdeasPage = async() => {
    // const { data: session } = authClient.useSession();
    const session=await auth.api.getSession({
        headers: await headers()
    })
    const id=session?.user?.id
    
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/userIdea/${id}`);
    const postsDAta=await res.json();
    
    // const [postsDAta, setPostData] = useState([]);

    // const fetPostData=useCallback(async(id)=>{
    //      const posts = await getUserIdeas(id);
    //         setPostData(posts || [])
    // },[])

    // useEffect(() => {
    //     if (!session) return
    //     if (!session?.user) return
    //     const postedIdea = async () => {
    //         const posts = await getUserIdeas(session?.user?.id);
    //         setPostData(posts || [])
    //     }
    //     postedIdea()
    // }, [session])\


    // useEffect(()=>{
    //     fetPostData();
    // },[fetPostData])
    // console.log(postsDAta);


    return (
        <div className="mx-auto container mt-10">
            <h1 className="font-bold text-2xl mb-3">Ideas you have shared</h1>
            <div>
                {
                    postsDAta.length === 0 ? (
                        <div className="flex flex-col items-center justify-center border border-dashed border-gray-200 rounded-3xl p-16 bg-white/50 backdrop-blur-sm mt-8 shadow-sm transition-all duration-300">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg shadow-rose-200/50 mb-5">
                                <Lightbulb size={24} className="stroke-[2.5]" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">No ideas yet</h2>
                            <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed text-center">
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