import { Button, Drawer } from "@heroui/react";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import NavLinks from "./NavLinks";

const SideNav = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <Drawer>
                <Button variant="ghost " className="text-rose-800 font-bold">
                    <CiMenuBurger className="text-3xl" />
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement={'left'}>
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Body>
                                <Link href="/" className="lg:flex flex items-center gap-3 md:hidden">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md">
                                        <Sparkles size={18} />
                                    </div>

                                    <h1 className="gradient-text font-bold text-xl md:text-3xl ">
                                        IdeaVault
                                    </h1>
                                </Link>
                                <div className="flex flex-col gap-5 mt-5">
                                    <NavLinks side={"true"} href="/">Home</NavLinks>
                                    <NavLinks side={"true"} href="/ideas">Ideas</NavLinks>
                                    <NavLinks side={"true"} href="/add-ideas">Add Idea</NavLinks>
                                    <NavLinks side={"true"} href="/my-ideas">My Ideas</NavLinks>
                                    <NavLinks side={"true"} href="/interactions">My Interaction</NavLinks>
                                </div>
                            </Drawer.Body>
                            <Drawer.Footer>
                            </Drawer.Footer>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </div>
    )
}

export default SideNav