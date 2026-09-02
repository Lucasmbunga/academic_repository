import { SearchIcon } from "lucide-react";
import { type FC } from "react";
import ButtonsBox from "./ButtonsBox";

const NavMenu: FC = () => {
  return (
    <>
      <div className="flex justify-between  grow">
        <div className="grow basis-1/3 flex items-center justify-between px-2 py-1.5 rounded-md border has-focus:border-2 border-rose-950 has-focus:border-pink-950 transition-all duration-300 ease-linear">
          <input
            type="search"
            placeholder="Pesquisar"
            className="grow w-full outline-0"
          />
          <label htmlFor="">
            <SearchIcon className="w-5 cursor-pointer"></SearchIcon>
          </label>
        </div>
        <div className="grow hidden min-[772px]:flex md:justify-between">
          <nav>
            <ul className="flex text-[#54232D] font-medium *:px-3 *:py-2">
              <li>
                <a href="#">Instituições</a>
              </li>
              <li>
                <a href="#"> Sobre</a>
              </li>
              
            </ul>
          </nav>
          <ButtonsBox/>
        </div>
      </div>
    </>
  );
};
export default NavMenu;
