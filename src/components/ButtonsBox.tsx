import { LogOut, UserIcon } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router";

const ButtonsBox: FC = () => {
  const isLogged = false;
  return (
    <div className="w-full sm:w-[70%] min-[867px]:w-auto text-[#FFF7EF] flex flex-col justify-end min-[867px]:flex-row min-[867px]:items-center gap-4">
      {isLogged ? (
        <div className="flex items-center justify-center w-9 h-9 font-medium bg-[#54232D]/90 rounded-full cursor-pointer relative hover:*:block">
          <span>L</span>
          <div className="hidden absolute top-10 bg-white rounded-lg *:text-[#54232D] cursor-default">
            <h3 className="text-md font-bold p-6 pb-4 border-b-2 border-b-[#F6F3EB]">
              Hi bernivaldolucaspascoal
            </h3>
            <ul className="flex flex-col gap-4 p-6  *:flex *:items-center *:gap-2 *:py-2">
              <li>
                <UserIcon /> <a href="">Teu Perfil</a>
              </li>
              <li>
                <LogOut /> <a href="">Sair</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className=" flex items-center justify-center gap-2 px-5 py-2 cursor-pointer hover:bg-[#54232D]/10 ring-1 ring-[#54232D] transition-colors duration-300 ease-initial rounded-4xl">
          <UserIcon className="text-[#54232D]" />
          <Link to={"/login"} className="text-[#54232D] font-semibold">
            Entrar
          </Link>
        </div>
      )}
      <Link
        to={"/sign-up"}
        className=" font-semibold flex items-center justify-center px-4 bg-[#54232D] hover:bg-[#54232D]/80  py-2 rounded-4xl transition-colors duration-300 ease-initial"
      >
        Criar conta
      </Link>
    </div>
  );
};
export default ButtonsBox;
