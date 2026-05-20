import { Button } from "@heroui/react";
import Link from "next/link";

const Slide2 = () => {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop')] container mx-auto mt-10 h-[65vh] w-full bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl">

            {/* Dark Overlay */}
            <div className="w-full h-full bg-black/55 flex items-center">

                <div className="max-w-7xl mx-auto px-6 text-white">
                    <span className="bg-rose-500/20 border border-rose-400 text-rose-100 px-4 py-1 rounded-full text-sm font-medium">
                        Community Driven Ideas
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold mt-5 mb-5 max-w-3xl leading-tight">
                        Share Your Startup Ideas <br />
                        With <span className="gradient-text"> Creative Minds</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
                        Discover innovative projects, collaborate with creators,
                        and turn your concepts into impactful products on IdeaVault.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/ideas">
                            <Button className="gradient-button">
                                Explore Ideas
                            </Button>
                        </Link>

                        <Link href="/add-ideas">
                            <Button
                                variant="bordered"
                                className="border-white text-white hover:bg-white hover:text-black"
                            >
                                Share Your Idea
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide2;