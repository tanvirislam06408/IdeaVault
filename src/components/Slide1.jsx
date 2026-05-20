import { Button } from "@heroui/react";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Slide1 = () => {
    return (
        <div className="container mx-auto mt-10 h-[65vh] rounded-2xl overflow-hidden shadow-2xl relative">

            <div className="absolute inset-0">
                <Image
                    loading="eager"
                    src="https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={500}
                    height={500}
                    alt="Idea Collaboration"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute inset-0 bg-black/55"></div>

            <div className="relative z-10 flex items-center h-full">
                <div className="max-w-7xl mx-auto px-6 text-white">

                    <p className="bg-white/10  flex items-center max-w-[200px] backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-sm font-medium">
                        <Sparkles /> Welcome to IdeaVault
                    </p>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-5 mb-5 max-w-3xl">
                        Turn Your Brilliant <br />
                        Ideas <span className="gradient-text">Into Reality</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
                        Share innovative concepts, connect with creative people,
                        and collaborate to build the next big thing together.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/ideas">
                            <Button className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-6 font-semibold shadow-lg">
                                Explore Ideas
                            </Button>
                        </Link>

                        <Link href="/addIdea">
                            <Button
                                variant="ghost"
                                className="border-white text-white hover:bg-white hover:text-black transition"
                            >
                                Add Your Idea
                            </Button>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Slide1;