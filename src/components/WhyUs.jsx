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
        <section className="container mx-auto py-20 px-4">
            
            {/* Header */}
            <div className="max-w-4xl mb-16">
                <p className="text-blue-500 uppercase tracking-[0.2em] font-semibold text-sm mb-4">
                    Why IdeaVault
                </p>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                    Built for the lonely middle of the night
                </h1>

                <p className="text-lg md:text-2xl text-slate-500 leading-relaxed">
                    When you can't sleep because of an idea, we're the place to drop it.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="border border-slate-200 rounded-3xl p-10 bg-white hover:shadow-xl transition-all duration-300"
                    >
                        
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-8">
                            {feature.icon}
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-slate-900 mb-5">
                            {feature.title}
                        </h2>

                        {/* Description */}
                        <p className="text-slate-500 text-lg leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyUs;