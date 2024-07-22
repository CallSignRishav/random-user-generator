import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  Image,
  Skeleton,
} from "@nextui-org/react";
import { User, AtSign, Phone, CalendarDays, MapPin } from "lucide-react";

const LoadingCard = () => {
  return (
    <>
      <Card className="w-full lg:w-[450px]">
        <CardHeader className="flex justify-center mx-auto">
          <Skeleton className="rounded-full">
            <Image
              src="/favicon.ico"
              className=" border-1 border-blue-600"
              width={250}
              height={250}
            />
          </Skeleton>
        </CardHeader>

        <Divider />

        <CardBody className="grid grid-cols-5 items-center gap-2">
          <div className="flex justify-center">
            <User />
          </div>
          <div className="col-span-4 text-xl">
            <Skeleton className="rounded-lg">Poiznake Gaming</Skeleton>
          </div>

          <div className="flex justify-center">
            <AtSign />
          </div>
          <div className="col-span-4 text-xl">
            <Skeleton className="rounded-lg">poiznake@gmail.com</Skeleton>
          </div>

          <div className="flex justify-center">
            <Phone />
          </div>
          <div className="col-span-4 text-xl">
            <Skeleton className="rounded-lg">1234567890</Skeleton>
          </div>

          <div className="flex justify-center">
            <CalendarDays />
          </div>
          <div className="col-span-4 text-xl">
            <Skeleton className="rounded-lg">00-00-0000</Skeleton>
          </div>

          <div className="flex justify-center">
            <MapPin />
          </div>
          <div className="col-span-4 text-xl">
            <Skeleton className="rounded-lg">Kolkata, India</Skeleton>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default LoadingCard;
