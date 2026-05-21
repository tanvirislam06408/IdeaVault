import { Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 bg-[#f8f8fb] dark:bg-slate-900">
            <div className="mx-auto grid container gap-12 px-6 py-14 md:grid-cols-4">
                <div>
                    <Link href="/" className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-sm">
                            <Sparkles size={18} />
                        </div>

                        <h2 className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-2xl font-bold text-transparent">
                            IdeaVault
                        </h2>
                    </Link>

                    <p className="max-w-xs text-sm leading-7 text-gray-500 dark:text-gray-400">
                        Where bold startup ideas meet the community that helps shape them.
                    </p>
                </div>

                <div>
                    <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-black dark:text-gray-100">
                        Platform
                    </h3>

                    <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                        <li>
                            <Link
                                href="/ideas"
                                className="transition hover:text-rose-500"
                            >
                                Browse Ideas
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/ideas?category=Tech"
                                className="transition hover:text-rose-500"
                            >
                                Tech
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/ideas?category=AI"
                                className="transition hover:text-rose-500"
                            >
                                AI
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/ideas?category=Health"
                                className="transition hover:text-rose-500"
                            >
                                Health
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-black dark:text-gray-100">
                        Contact
                    </h3>

                    <div className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                        <p className="flex items-center gap-2">
                            <Mail size={16} />
                            mstanvirislam05@gmail.com
                        </p>

                        <p>Dhaka · Remote-first</p>
                    </div>
                </div>

                <div>
                    <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-black dark:text-gray-100">
                        Follow
                    </h3>

                    <div className="flex items-center gap-3">
                        <Link
                            href="https://twitter.com"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 transition hover:border-rose-500 hover:text-rose-500 dark:hover:border-rose-500 dark:hover:text-rose-400"
                        >
                            <BsTwitter size={16} />
                        </Link>

                        <Link
                            href="https://github.com"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 transition hover:border-rose-500 hover:text-rose-500 dark:hover:border-rose-500 dark:hover:text-rose-400"
                        >
                            <FaGithub size={16} />
                        </Link>

                        <Link
                            href="https://linkedin.com"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 transition hover:border-rose-500 hover:text-rose-500 dark:hover:border-rose-500 dark:hover:text-rose-400"
                        >

                            <FaLinkedin size={16} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-gray-500 dark:text-gray-400 md:flex-row md:items-center md:justify-between">
                    <p>
                        © 2026 IdeaVault. All rights reserved.
                    </p>

                    <p>
                        Crafted with care for builders, dreamers and contrarians.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;