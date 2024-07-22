import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>

      <main>{children}</main>
    </>
  );
};

export default Layout;
