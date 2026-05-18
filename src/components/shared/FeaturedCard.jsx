import { CircleDollar } from "@gravity-ui/icons";
import { Button, Card, Link } from "@heroui/react";
import Image from "next/image";
const FeaturedCard = ({ idea }) => {
  return (
    <div className="">
      <Card className="border h-full flex flex-col justify-between">
        <div>
          <div>
            <Image src={idea?.image} width={500} height={300} alt={idea.project_title} className="rounded-2xl mb-3" />
          </div>
          <Card.Header>
            <Card.Title className="text-lg font-semibold">{idea.project_title}</Card.Title>
            <Card.Description className="mt-3">
              {idea?.tagline}
            </Card.Description>
          </Card.Header>
        </div>
        <Card.Footer>
          <Button variant="outline" className={'w-full mt-auto'}>View Details</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default FeaturedCard;