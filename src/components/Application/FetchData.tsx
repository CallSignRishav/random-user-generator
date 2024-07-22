import { useQuery } from "@tanstack/react-query";
import MainCard from "./MainCard";
import axios from "axios";
import { UserType } from "@/utils/usertype";
import LoadingCard from "./LoadingCard";

const FetchData = () => {
  const { data, isLoading, isFetching, isSuccess, isFetched, isError } =
    useQuery({
      queryKey: ["userData"],
      queryFn: async () => {
        const request = await axios.get("https://randomuser.me/api/");

        const data = (await request.data.results) as UserType[];

        return data;
      },

      refetchOnWindowFocus: false,
    });

  if (isFetching || isLoading) {
    return (
      <>
        <LoadingCard />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <div className="">Something went wrong 😱</div>
      </>
    );
  }

  if (isFetched && isSuccess) {
    return (
      <>
        {data.map((item) => {
          return <MainCard key={item.login.uuid} details={item} />;
        })}
      </>
    );
  }
};

export default FetchData;
