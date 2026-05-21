import { auth } from "@/lib/auth";
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { headers } from "next/headers";
import SignOut from "./SignOut";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

export async function ProfileDropdown() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    return (
        <Dropdown>
            <Dropdown.Trigger className="rounded-full">
                <Avatar>
                    <Avatar.Image
                        alt="Junior Garcia"
                        src={session?.user?.image}
                    />
                    <Avatar.Fallback delayMs={600}>{session?.user.name.slice(0, 2).toUpperCase()}</Avatar.Fallback>
                </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover>
                <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                        <Avatar size="sm">
                            <Avatar.Image
                                alt="Jane"
                                src={session?.user?.image}
                            />
                            <Avatar.Fallback delayMs={600}>{session?.user.name.slice(0, 2).toUpperCase()}</Avatar.Fallback>
                        </Avatar>
                        <div className="flex flex-col gap-0">
                            <p className="text-sm leading-5 font-medium">{session?.user.name}</p>
                            <p className="text-xs leading-none text-muted">{session?.user.email}</p>
                        </div>
                    </div>
                </div>
                <Dropdown.Menu>
                    <Dropdown.Item id="profile" textValue="Profile">
                        <Link
                         href={'/profile'} className="flex w-full items-center justify-between gap-2">
                            <Button variant="ghost">Profile</Button>
                        </Link>
                        <CiUser color="red"/>
                    </Dropdown.Item>
                    <Dropdown.Item id="logout" textValue="Logout" variant="danger">
                        <div className="flex w-full items-center justify-between gap-2">
                            <SignOut />
                            <ArrowRightFromSquare className="size-3.5 text-danger" />
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}