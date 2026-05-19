'use client'

import Image from 'next/image'
import {
    ArrowUpRight,
    BadgeDollarSign,
    CalendarDays,
    Lightbulb,
    MessageSquare,
    ShieldCheck,
    Sparkles,
    Target,
    ThumbsUp,
    Users
} from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState, useCallback } from 'react'
import { getIdeaById } from '@/lib/data'
import { Button, Description, Form, Label, TextArea, TextField } from '@heroui/react'
import { authClient } from '@/lib/auth.client'
import toast from 'react-hot-toast'
import CommentSection from '@/components/shared/CommentSection'
import SideGuide from '@/components/shared/SideGuide'

const IdeaDetailsPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const [idea, setIdea] = useState([]);
    const [commentData, setCommentData] = useState([]);
    const { data: session } = authClient.useSession();
    console.log(idea);
    
        
        useEffect(()=>{
            const getIdea=async(id)=>{
                const res = await getIdeaById(id);
                setIdea(res)
                console.log(res);
            }
            getIdea(id)
        },[id])
        
   

    // get comments

        const getComments=useCallback(async()=>{
            const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/comments/${id}`);
            const data=await res.json();
             setCommentData(data)
        },[id])

        useEffect(()=>{
            getComments();
        },[getComments])
        

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const comment = formData.get("comment");

        if (!comment || comment.trim().length === 0) {
            toast.error("Comment cannot be empty");
            return;
        }

        const commentDetails = {
            email: session?.user?.email,
            post_id: id,
            comment,
            comment_date: new Date().toISOString(),
            name: session?.user?.name,
            image: session?.user?.image,
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentDetails),
        })
        const data = await res.json();

        if (data.acknowledged) {
            toast.success("Comment added successfully");
            getComments();
            e.target.reset();
        }
    }


    // like count
    const handleLikeCount = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/ideas/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await res.json();

        if (data.acknowledged) {
            toast.success('Idea liked successfully');
            router.refresh();
        }
    }

    return (
        <section className="min-h-screen bg-[#fafbfc] py-10">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr]">
                    <div className="space-y-6">
                        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
                            <div className="relative h-[320px] w-full">
                                <Image
                                    src={idea?.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"}
                                    alt={idea?.project_title || "Project"}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {idea?.tags?.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-md"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h1 className="max-w-2xl text-4xl font-bold leading-tight">
                                        {idea?.project_title}
                                    </h1>
                                    <p className="mt-3 max-w-2xl text-sm text-gray-200">
                                        {idea?.tagline}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 p-6">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={idea?.author?.photo || "https://i.pravatar.cc/150?img=12"}
                                        alt={idea?.author?.name || "Author"}
                                        width={50}
                                        height={50}
                                        sizes=''
                                        className="rounded-full object-cover ring-2 ring-orange-100"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{idea?.author?.name}</h3>
                                        <p className="flex items-center gap-1 text-sm text-gray-500">
                                            <CalendarDays size={14} />
                                            {idea?.author?.posted_date}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button onClick={handleLikeCount} className="flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] gradient-button">
                                        <ThumbsUp size={16} />
                                        {idea?.engagement?.likes || 0}
                                    </button>
                                    <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-orange-50/50 hover:text-rose-500 hover:border-rose-200">
                                        <MessageSquare size={16} />
                                        {commentData?.length || 0}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-3xl bg-white p-5 shadow-sm border border-gray-100/80">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                                    <Sparkles size={20} />
                                </div>
                                <p className="text-sm text-gray-500">Category</p>
                                <h3 className="mt-1 font-semibold text-gray-900">
                                    {idea?.category}
                                </h3>
                            </div>

                            <div className="rounded-3xl bg-white p-5 shadow-sm border border-gray-100/80">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
                                    <Users size={20} />
                                </div>
                                <p className="text-sm text-gray-500">Target Users</p>
                                <h3 className="mt-1 font-semibold text-gray-900">
                                    {idea?.targetAudience}
                                </h3>
                            </div>

                            <div className="rounded-3xl bg-white p-5 shadow-sm border border-gray-100/80">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
                                    <BadgeDollarSign size={20} />
                                </div>
                                <p className="text-sm text-gray-500">Estimated Budget</p>
                                <h3 className="mt-1 font-semibold text-gray-900">
                                    {idea?.budget}
                                </h3>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="rounded-3xl bg-white p-7 shadow-sm border border-gray-100/80">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="rounded-2xl bg-orange-50 p-3 text-orange-500">
                                        <Lightbulb />
                                    </div>
                                    <h2 className="text-2xl font-bold gradient-text">
                                        Full Pitch
                                    </h2>
                                </div>
                                <p className="leading-8 text-gray-600">
                                    {idea?.pitch_details?.the_full_pitch}
                                </p>
                            </div>

                            <div className="rounded-3xl bg-white p-7 shadow-sm border border-gray-100/80">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="rounded-2xl bg-rose-50 p-3 text-rose-500">
                                        <ShieldCheck />
                                    </div>
                                    <h2 className="text-2xl font-bold gradient-text">
                                        The Problem
                                    </h2>
                                </div>
                                <p className="leading-8 text-gray-600">
                                    {idea?.pitch_details?.the_problem}
                                </p>
                            </div>

                            <div className="rounded-3xl bg-white p-7 shadow-sm border border-gray-100/80">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-500">
                                        <Target />
                                    </div>
                                    <h2 className="text-2xl font-bold gradient-text">
                                        Proposed Solution
                                    </h2>
                                </div>
                                <p className="leading-8 text-gray-600">
                                    {idea?.pitch_details?.the_proposed_solution}
                                </p>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-white p-7 shadow-sm border border-gray-100/80">
                            <div className="mb-6 flex items-center justify-between">
                                <h2 className="text-2xl font-bold gradient-text">
                                    Discussion
                                </h2>
                                <span className="rounded-full bg-orange-50 border border-orange-100/80 px-4 py-1 text-sm font-medium text-orange-600">
                                    {idea?.comments} comments
                                </span>
                            </div>

                            <Form onSubmit={handleSubmit} className="mb-6 flex gap-4 flex-col">
                                <Image
                                    src={session?.user?.image || "https://i.pravatar.cc/150?img=12"}
                                    alt="user"
                                    width={45}
                                    height={45}
                                    className="h-11 w-11 rounded-full object-cover ring-2 ring-orange-100"
                                />
                                <TextField variant="secondary">
                                    <Label>Comments</Label>
                                    <TextArea aria-label='comment' name="comment" className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-4 outline-none transition focus:border-rose-400 focus:bg-white focus:ring-0" placeholder="Tell us about idea..." rows={4} />
                                    <Description>Share your thoughts about this idea...</Description>
                                </TextField>

                                <Button type='submit' className="flex items-center gap-2 rounded-2xl px-6 py-3 font-medium text-white transition hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] gradient-button">
                                    Post Comment
                                    <ArrowUpRight size={18} />
                                </Button>
                            </Form>
                        </div>
                    </div>

                    <SideGuide />
                </div>

                <CommentSection commentData={commentData} refetchComments={getComments} />
            </div>
        </section>
    )
}

export default IdeaDetailsPage