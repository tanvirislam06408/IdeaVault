"use client";

import {
    HiOutlineLightningBolt,
    HiOutlineUsers,
    HiOutlineShieldCheck,
    HiOutlineTrendingUp,
} from "react-icons/hi";

const features = [
    {
        icon: <HiOutlineLightningBolt size={28} />,
        title: "Fast feedback loop",
        description:
            "Most ideas get their first reaction in under 4 hours.",
    },
    {
        icon: <HiOutlineUsers size={28} />,
        title: "Operators, not lurkers",
        description:
            "Reviewers are founders, PMs, and engineers who've shipped.",
    },
    {
        icon: <HiOutlineShieldCheck size={28} />,
        title: "Safe to be raw",
        description:
            "Edit, delete, or refine your idea any time — you stay in control.",
    },
    {
        icon: <HiOutlineTrendingUp size={28} />,
        title: "Trending signal",
        description:
            "Likes, comments, and recency surface what the market actually wants.",
    },
];

const WhyUs = () => {
    return (
        <section className="container mx-auto py-20 px-4 dark:text-gray-100">

            <div className="max-w-4xl mb-16">
                <p className="text-rose-500 uppercase tracking-[0.2em] font-semibold text-sm mb-4">
                    Why IdeaVault
                </p>

                <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-gray-100 leading-tight mb-6">
                    Built for the lonely middle of the night
                </h1>

                <p className="text-lg md:text-2xl text-slate-500 dark:text-gray-400 leading-relaxed">
                    When you can't sleep because of an idea, we're the place to drop it.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="border border-slate-200 dark:border-gray-700 rounded-3xl p-10 bg-white dark:bg-slate-800 hover:shadow-xl dark:hover:shadow-slate-900 transition-all duration-300"
                    >

                        <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 flex items-center justify-center mb-8">
                            {feature.icon}
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-gray-100 mb-5">
                            {feature.title}
                        </h2>

                        <p className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyUs;