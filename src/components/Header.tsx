import type { FC } from "react";
import NavMenu from "./NavMenu";

export const Header: FC = () => {

  return (
    <header className="fixed bg-[#F6F3EB] top-0 left-0 min-w-screen">
      <div className=" flex items-center justify-between gap-8 px-6  md:px-8  lg:px-24 py-4 relative transition-all duration-300 ease-linear ">
        <div className="grow-0">Logo</div>
        <NavMenu/>
      </div>
    </header>
  );
};
