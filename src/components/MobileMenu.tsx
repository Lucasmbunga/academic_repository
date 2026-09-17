import { Menu, Save, Upload, X } from "lucide-react";
import { useEffect, useState, type FC } from "react";
import ButtonsBox from "./ButtonsBox";

const MobileMenu: FC = () => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isMenuMobileOpen) {
      window.document.documentElement.style.overflow = "hidden";
    } else {
      window.document.documentElement.style.overflow = "unset";
    }
  }, [isMenuMobileOpen]);

  return (
    <div className=" min-[867px]:hidden">
      <div className="flex items-center cursor-pointe min-[867px]:hidden">
        {!isMenuMobileOpen && (
          <Menu
            onClick={() => setIsMenuMobileOpen(true)}
            size={30}
            className="text-[#54232D] cursor-pointer"
          />
        )}
      </div>
      <div
        onClick={() => setIsMenuMobileOpen(false)}
        className={`${isMenuMobileOpen ? "animate-open-overlay fixed" : "hidden"}  top-0 left-0 min-w-screen min-h-screen bg-black/35 transition-all duration-300 ease-in-out z-0`}
      >
      </div>
      <div onClick={(event)=>event.stopPropagation()} className={`${isMenuMobileOpen? 'animate-open-menu':'-translate-x-full'} w-[90%]  fixed  left-0 top-0 rounded-bl-md rounded-br-md transition-all duration-300 ease-in-out `}>
          <div className="flex justify-between bg-[#F6F3EB] px-6 py-3">
            <div>Logo</div>
            <X
              onClick={() => setIsMenuMobileOpen(false)}
              size={33}
              className="text-[#54232D] md:hidden  cursor-pointer"
            />
          </div>
          <div className=" bg-white p-6 min-h-screen">
            <nav
              onClick={(event) => event.stopPropagation()}
              className="w-full   flex flex-col items-center gap-4 "
            >
              <ul className="w-full flex flex-col items-center gap-4 text-[#54232D] font-medium *:px-4 *:py-2 *:flex *:items-center *:justify-center *:gap-2">
                <li className="text-center max-[429px]:w-full min-[428px]:w-[90%] sm:w-[70%] hover:bg-[#54232D]/10 rounded-4xl transition-colors duration-300 ease-initial">
                <Upload/>
                <a href="#"> Carregar</a>
              </li>
              <li className="text-center max-[429px]:w-full min-[428px]:w-[90%] sm:w-[70%] hover:bg-[#54232D]/10 rounded-4xl transition-colors duration-300 ease-initial">
                <Save/>
                <a href="#"> Salvo</a>
              </li>
              </ul>
              <ButtonsBox/>
            </nav>
          </div>
        </div>
    </div>
  );
};
export default MobileMenu;
