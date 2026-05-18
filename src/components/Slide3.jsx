import { Button } from "@heroui/react";
import Link from "next/link";

const Slide3 = () => {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop')] container mx-auto mt-10 h-[65vh] w-full bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl">

            <div className="w-full h-full bg-black/55 flex items-center">

                <div className="max-w-7xl mx-auto px-6 text-white">
                    <span className="bg-cyan-500/20 border border-cyan-400 px-4 py-1 rounded-full text-sm font-medium">
                        Build Together
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold mt-5 mb-5 max-w-3xl leading-tight">
                        Build, Collaborate & <br />
                        <span className="gradient-text">Grow Your Vision</span>

                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
                        Connect with developers, designers, and entrepreneurs
                        who can help transform your ideas into real-world success.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/signup">
                            <Button className="gradient-button">
                                Join Community
                            </Button>
                        </Link>

                        <Link href="/myIdeas">
                            <Button
                                variant="bordered"
                                className="border-white text-white hover:bg-white hover:text-black"
                            >
                                My Ideas
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide3;