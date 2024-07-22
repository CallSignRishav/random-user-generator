import { UserType } from "@/utils/usertype";
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import { AtSign, CalendarDays, MapPin, Phone, User } from "lucide-react";

const MainCard = ({ details }: { details: UserType }) => {
  return (
    <>
      <Card className="w-full lg:w-[450px]">
        <CardHeader className="flex justify-center mx-auto">
          <Image
            src={details.picture.large}
            className="rounded-full border-1 border-blue-600"
            width={250}
            height={250}
          />
        </CardHeader>

        <Divider />

        <CardBody className="grid grid-cols-5 items-center gap-2">
          <div className="flex justify-center">
            <User />
          </div>
          <div className="col-span-4 text-xl">
            {details.name.first} {details.name.last}
          </div>

          <div className="flex justify-center">
            <AtSign />
          </div>
          <div className="col-span-4 text-xl">{details.email}</div>

          <div className="flex justify-center">
            <Phone />
          </div>
          <div className="col-span-4 text-xl">{details.cell}</div>

          <div className="flex justify-center">
            <CalendarDays />
          </div>
          <div className="col-span-4 text-xl">{details.dob.age} Years</div>

          <div className="flex justify-center">
            <MapPin />
          </div>
          <div className="col-span-4 text-xl">
            {details.location.city}, {details.location.state},{" "}
            {details.location.country}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default MainCard;
