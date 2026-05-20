import { CircleDollar } from "@gravity-ui/icons";
import { Avatar, Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import UpdateComment from "./UpdateComment";
const UserIdea = ({ idea }) => {
    return (
        <div className="">
            <Card className="border h-full flex flex-col justify-between ">
                <div>
                    <div>
                        <Image src={idea?.image} width={500} height={300} alt={idea.project_title} className="rounded-2xl mb-3 transition-all duration-500 hover:scale-103 w-full h-[250px]" />
                    </div>
                    <Card.Header>
                        <Card.Title className="text-lg font-semibold hover:gradient-text">{idea.project_title}</Card.Title>
                        <Card.Description className="mt-3">
                            {idea?.tagline}
                        </Card.Description>
                    </Card.Header>
                </div>
                <Card.Footer className="flex flex-col space-y-4">
                    <div className="flex w-full px-3 justify-between ">
                        <div className="flex items-center gap-2.5">
                            <Avatar size="sm">
                                <Avatar.Image alt={idea?.author?.name} src={idea?.author?.photo || 'https://imgs.search.brave.com/EWo_Dvd8o-GiTJ1r0q1weRL427wwuA49apSyjz4jPYI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/MjA5LzU2NS9zbWFs/bC91c2VyLXByb2Zp/bGUtYXZhdGFyLWZy/ZWUtdmVjdG9yLmpw/Zw'} />
                                <Avatar.Fallback>{idea?.author?.name?.slice(0, 2).toUpperCase()}</Avatar.Fallback>
                            </Avatar>
                            <p>{idea?.author?.name}</p>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <AiOutlineLike />
                            <FaRegComment />
                        </div>
                    </div>
                    <div className="flex justify-between w-full gap-4">
                        <Link href={`/ideas/${idea._id}`} className={'w-full  mt-auto'}>
                          
                            <Button variant="outline" className={'w-full flex items-center gap-3'}>  Update<FaRegEdit /> </Button>
                            <UpdateComment/>
                        </Link>
                        <Button variant="danger-soft" className={'w-full'}>Delete <MdDeleteOutline /></Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default UserIdea;