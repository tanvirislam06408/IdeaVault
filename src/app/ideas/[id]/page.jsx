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
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getIdeaById } from '@/lib/data'

const IdeaDetailsPage = () => {


    const [idea, setIdea] = useState([])
    const { id } = useParams();
    useEffect(() => {
        const getidea = async () => {
            const res = await getIdeaById(id)
            setIdea(res)
        }
        getidea()
    }, [id])







    return (
        <section className="min-h-screen bg-[#fafbfc] py-10">
            <div className="mx-auto max-w-6xl px-4">

                <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr]">

                    <div className="space-y-6">

                        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">

                            <div className="relative h-[320px] w-full">
                                <Image
                                    src={idea?.image}
                                    alt={idea?.project_title}
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
                                        src={idea?.author?.photo}
                                        alt={idea?.author?.name}
                                        width={50}
                                        height={50}
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

                                    <button className="flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] gradient-button">
                                        <ThumbsUp size={16} />
                                        {idea?.engagement?.likes}
                                    </button>

                                    <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-orange-50/50 hover:text-rose-500 hover:border-rose-200">
                                        <MessageSquare size={16} />
                                        {idea?.engagement?.comments}
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
                                    {idea?.fullPitch}
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
                                    {idea?.problem}
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
                                    {idea?.solution}
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


                            <div className="mb-6 flex gap-4">
                                <Image
                                    src={idea?.author?.photo}
                                    alt="user"
                                    width={45}
                                    height={45}
                                    className="h-11 w-11 rounded-full object-cover ring-2 ring-orange-100"
                                />

                                <textarea
                                    rows={4}
                                    placeholder="Share your thoughts about this idea..."
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-4 outline-none transition focus:border-rose-400 focus:bg-white"
                                />
                            </div>

                            <button className="flex items-center gap-2 rounded-2xl px-6 py-3 font-medium text-white transition hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] gradient-button">
                                Post Comment
                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </div>


                    <div className="space-y-6">

                        <div className="md:sticky top-6 rounded-3xl bg-[#0f172a] p-7 text-white shadow-xl border border-white/5">

                            <p className="mb-2 text-sm text-rose-300 font-medium tracking-wide">
                                Startup Potential
                            </p>

                            <h2 className="text-4xl font-extrabold gradient-text">
                                92%
                            </h2>

                            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-orange-500 to-rose-500" />
                            </div>

                            <p className="mt-5 text-sm leading-7 text-gray-300">
                                This concept shows strong market fit, scalable potential,
                                and recurring revenue opportunity in the remote productivity sector.
                            </p>
                        </div>


                        <div className="rounded-3xl bg-white p-7 shadow-sm border border-gray-100/80">
                            <h2 className="mb-5 text-xl font-bold gradient-text">
                                Quick Insights
                            </h2>

                            <div className="space-y-4">

                                <div className="rounded-2xl bg-gray-50/70 p-4 border border-gray-100/50">
                                    <p className="text-sm text-gray-500">
                                        Business Model
                                    </p>

                                    <h3 className="mt-1 font-semibold text-gray-800">
                                        SaaS Subscription
                                    </h3>
                                </div>

                                <div className="rounded-2xl bg-gray-50/70 p-4 border border-gray-100/50">
                                    <p className="text-sm text-gray-500">
                                        Monetization
                                    </p>

                                    <h3 className="mt-1 font-semibold text-gray-800">
                                        Monthly + Enterprise Plans
                                    </h3>
                                </div>

                                <div className="rounded-2xl bg-gray-50/70 p-4 border border-gray-100/50">
                                    <p className="text-sm text-gray-500">
                                        Market Trend
                                    </p>

                                    <h3 className="mt-1 font-semibold text-gray-800">
                                        Growing Rapidly
                                    </h3>
                                </div>
                            </div>
                        </div>


                        <div className="rounded-3xl bg-gradient-to-br from-orange-500 via-rose-500 to-red-600 p-7 text-white shadow-xl">

                            <p className="text-sm text-orange-100 font-medium">
                                Interested in collaborating?
                            </p>

                            <h2 className="mt-2 text-2xl font-bold leading-snug">
                                Connect with the creator and turn this idea into reality.
                            </h2>

                            <button className="mt-6 rounded-2xl bg-white px-6 py-3 font-semibold text-rose-600 transition hover:bg-orange-50 hover:scale-[1.02] active:scale-[0.98]">
                                Contact Founder
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IdeaDetailsPage