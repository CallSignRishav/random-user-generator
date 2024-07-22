import { Button } from "@nextui-org/react";
import ToggleDark from "./ToggleDark";

const Navbar = () => {
  return (
    <>
      <div className="w-full py-3 border-b-2">
        <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2">
          <div className="text-3xl font-bold bg-gradient-to-tr from-fuchsia-500 to-cyan-300 bg-clip-text text-transparent">
            RandomUserGenerator
          </div>

          <div className="">
            <ToggleDark />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
