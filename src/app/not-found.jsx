import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-6">
            <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center">

                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-sm text-orange-500 mb-6">
                        ✦ IdeaVault
                    </div>

                    <h1 className="text-7xl md:text-8xl font-black text-zinc-900 leading-none">
                        404
                    </h1>

                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-800 mt-4 leading-tight">
                        Idea Not Found
                    </h2>

                    <p className="text-zinc-500 mt-6 text-lg leading-relaxed max-w-xl">
                        Looks like this page vanished into the vault. The idea you’re
                        searching for may have been removed, renamed, or never existed.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <Link
                            href="/"
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition"
                        >
                            Back Home
                        </Link>

                        <Link
                            href="/ideas"
                            className="px-6 py-3 rounded-xl border border-zinc-300 text-zinc-700 font-semibold hover:bg-white transition"
                        >
                            Explore Ideas
                        </Link>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-3xl rounded-full"></div>

                    <div className="relative bg-white border border-zinc-200 rounded-3xl shadow-2xl p-10 overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white text-xl font-bold">
                                    !
                                </div>

                                <div>
                                    <h3 className="font-bold text-zinc-800 text-lg">
                                        Missing Page
                                    </h3>
                                    <p className="text-sm text-zinc-500">
                                        Error code: 404_NOT_FOUND
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-zinc-100 rounded-2xl p-4">
                                    <div className="h-3 w-24 bg-orange-400 rounded-full mb-3"></div>
                                    <div className="h-3 w-full bg-zinc-200 rounded-full mb-2"></div>
                                    <div className="h-3 w-4/5 bg-zinc-200 rounded-full"></div>
                                </div>

                                <div className="bg-zinc-100 rounded-2xl p-4">
                                    <div className="h-3 w-20 bg-red-400 rounded-full mb-3"></div>
                                    <div className="h-3 w-full bg-zinc-200 rounded-full mb-2"></div>
                                    <div className="h-3 w-2/3 bg-zinc-200 rounded-full"></div>
                                </div>

                                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-5 text-white">
                                    <p className="font-semibold text-lg">
                                        “Every great idea starts with finding the right path.”
                                    </p>

                                    <p className="text-sm text-white/80 mt-2">
                                        Let’s get you back on track.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NotFound;


