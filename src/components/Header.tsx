import type { FC } from "react";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";

export const Header: FC = () => {

  return (
    <header className="fixed bg-[#F6F3EB] top-0 left-0 w-full">
      <div className=" flex items-center gap-2 min-[321px]:gap-4 md:gap-8 px-4 min-[321px]:px-6  md:px-8   lg:px-12 min-[1024px]:px-18 py-4 relative transition-all duration-300 ease-linear ">
      <MobileMenu/>
        <div className="grow-0">Logo</div>
        <NavMenu/>
      </div>
    </header>
  );
};
