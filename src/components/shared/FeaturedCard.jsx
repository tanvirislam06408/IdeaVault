import { CircleDollar } from "@gravity-ui/icons";
import { Avatar, Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
const FeaturedCard = ({ idea }) => {
  return (
    <div className="">
      <Card className="border h-full flex flex-col justify-between ">
        <div>
          <div>
            <Image src={idea?.image} width={500} height={300} alt={idea.project_title} className="rounded-2xl mb-3 transition-all duration-500 hover:scale-103" />
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
                <Avatar.Image alt="John Doe" src={idea?.author?.photo} />
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>
              <p>{idea?.author?.name}</p>
            </div>
            <div className="flex items-center gap-2.5">
              <AiOutlineLike />
              <FaRegComment />
            </div>
          </div>
          <Link href={`/ideas/${idea._id}`}  className={'w-full mt-auto'}>
            <Button variant="outline" className={'w-full'}>View Details</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default FeaturedCard;