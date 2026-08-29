import { Menu, SearchIcon, UserIcon, X } from "lucide-react";
import { useEffect, useState, type FC } from "react";
import { Link } from "react-router";
import MobileMenu from "./MobileMenu";

const NavMenu: FC = () => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isMenuMobileOpen) {
      window.document.documentElement.style.overflow = "hidden";
    } else {
      window.document.documentElement.style.overflow = "unset";
    }
  }, [isMenuMobileOpen]);

  return (
    <>
      <div className="flex items-center fixed top-3 right-4 cursor-pointe md:hiddenr">
        {!isMenuMobileOpen ? (
          <Menu
            onClick={() => setIsMenuMobileOpen(true)}
            size={30}
            className="text-[#54232D] md:hidden cursor-pointer"
          />
        ) : (
          <X
            onClick={() => setIsMenuMobileOpen(false)}
            size={33}
            className="text-[#54232D] md:hidden  cursor-pointer"
          />
        )}
      </div>
      <div className="hidden md:flex justify-between grow">
        <div className="px-2 py-1.5 rounded-md flex items-center border has-focus:border-2 border-rose-950 has-focus:border-pink-950">
          <input
            type="search"
            placeholder="Pesquisar"
            className="w-65 md:w-58 min-[857px]:w-80 outline-0 transition-all ease-linear duration-300"
          />
          <label htmlFor="">
            <SearchIcon className="w-5 cursor-pointer"></SearchIcon>
          </label>
        </div>
        <nav>
          <ul className="text-[#54232D] font-medium *:px-4 *:py-2">
            <li>
              <a href="#">Instituições</a>
            </li>
          </ul>
        </nav>
        <div className="text-[#FFF7EF] flex items-center gap-4">
          <div className="flex items-center gap-2 px-5 py-2 cursor-pointer hover:bg-[#54232D]/10 ring-1 ring-[#54232D] transition-colors duration-300 ease-initial rounded-4xl">
            <UserIcon className="text-[#54232D]" />
            <Link
              to={"/"}
              className="text-[#54232D] font-semibold"
            >
              Entrar
            </Link>
          </div>
          <Link
            to={"/"}
            className="grow font-semibold flex items-center px-4 bg-[#54232D] hover:bg-[#54232D]/80  py-2 rounded-4xl transition-colors duration-300 ease-initial"
          >
            Criar conta
          </Link>
        </div>
      </div>

      <MobileMenu
        isOpen={isMenuMobileOpen}
        onClose={() => setIsMenuMobileOpen(false)}
      />
    </>
  );
};
export default NavMenu;
