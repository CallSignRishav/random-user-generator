import FetchData from "@/components/Application/FetchData";
import RefetchButton from "@/components/Application/RefetchButton";

const index = () => {
  return (
    <>
      <div className="grid place-items-center py-10 px-8 space-y-4">
        <RefetchButton />

        <FetchData />
      </div>
    </>
  );
};

export default index;
