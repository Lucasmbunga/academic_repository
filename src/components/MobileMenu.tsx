import { UserIcon } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router";

interface IMobileMenuProps {
  isOpen: boolean;
  onClose(): void;
}

const MobileMenu: FC<IMobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className="bg-white md:hidden w-100">
      <div
        onClick={onClose}
        className={`${isOpen ? "fixed" : "hidden"}  top-14 left-0 min-w-screen min-h-screen bg-black/35 z-0`}
      >
        <nav onClick={event=>event.stopPropagation()} className="w-full  bg-white flex flex-col items-center gap-4 fixed top-14 right-0 p-6 rounded-bl-md rounded-br-md animate-open-menu">
          <ul className="w-full flex flex-col items-center gap-4 text-[#54232D] font-medium *:px-4 *:py-2">
            <li className="text-center max-[429px]:w-full min-[428px]:w-[90%] sm:w-[70%] hover:bg-[#54232D]/10 rounded-4xl transition-colors duration-300 ease-initial">
              <a href="#">Instituições</a>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-2 max-[429px]:w-full min-[428px]:w-[90%] sm:w-[70%] hover:bg-[#54232D]/10 rounded-4xl cursor-pointer ring-1 ring-[#54232D] transition-colors duration-300 ease-initial">
            <UserIcon className="text-[#54232D]" />
            <Link
              to={"/"}
              className="text-[#54232D] font-semibold  pr-4 py-2 rounded-4xl"
            >
              Entrar
            </Link>
          </div>
          <Link
            to={"/"}
            className="max-[429px]:w-full min-[428px]:w-[90%] sm:w-[70%] text-[#FFF7EF]  grow font-semibold flex items-center justify-center px-4 bg-[#54232D] hover:bg-[#54232D]/85  py-2 rounded-4xl transition-colors duration-300 ease-initial"
          >
            Criar conta
          </Link>
        </nav>
      </div>
    </div>
  );
};
export default MobileMenu;
