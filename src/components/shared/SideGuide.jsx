const SideGuide = () => {
    return (
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


                        <div className="rounded-3xl bg-white dark:bg-slate-900 p-7 shadow-sm border border-gray-100/80 dark:border-gray-800">
                            <h2 className="mb-5 text-xl font-bold gradient-text">
                                Quick Insights
                            </h2>

                            <div className="space-y-4">

                                <div className="rounded-2xl bg-gray-50/70 dark:bg-slate-800/50 p-4 border border-gray-100/50 dark:border-gray-700/50">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Business Model
                                    </p>

                                    <h3 className="mt-1 font-semibold text-gray-800 dark:text-gray-200">
                                        SaaS Subscription
                                    </h3>
                                </div>

                                <div className="rounded-2xl bg-gray-50/70 dark:bg-slate-800/50 p-4 border border-gray-100/50 dark:border-gray-700/50">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Monetization
                                    </p>

                                    <h3 className="mt-1 font-semibold text-gray-800 dark:text-gray-200">
                                        Monthly + Enterprise Plans
                                    </h3>
                                </div>

                                <div className="rounded-2xl bg-gray-50/70 dark:bg-slate-800/50 p-4 border border-gray-100/50 dark:border-gray-700/50">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Market Trend
                                    </p>

                                    <h3 className="mt-1 font-semibold text-gray-800 dark:text-gray-200">
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

                            <button className="mt-6 rounded-2xl  bg-white px-6 py-3 font-semibold text-rose-600 transition hover:bg-orange-50 hover:scale-[1.02] active:scale-[0.98]">
                                Contact Founder
                            </button>
                        </div>
                    </div>
    );
};

export default SideGuide;