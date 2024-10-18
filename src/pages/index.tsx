import FetchData from "@/components/Application/FetchData";
import RefetchButton from "@/components/Application/RefetchButton";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Random User Generator</title>
        <meta name="description" content="Random User Generator" />
      </Head>

      <div className="grid place-items-center py-10 px-8 space-y-4">
        <RefetchButton />

        <FetchData />
      </div>
    </>
  );
};

export default index;
