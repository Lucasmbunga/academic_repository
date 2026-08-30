import { UserIcon } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router";

const ButtonsBox:FC=()=>{
    return(
        <div className="w-full md:w-auto text-[#FFF7EF] flex flex-col md:flex-row md:items-center gap-4">
            <div className=" flex items-center justify-center gap-2 px-5 py-2 cursor-pointer hover:bg-[#54232D]/10 ring-1 ring-[#54232D] transition-colors duration-300 ease-initial rounded-4xl">
              <UserIcon className="text-[#54232D]" />
              <Link to={"/"} className="text-[#54232D] font-semibold">
                Entrar
              </Link>
            </div>
            <Link
              to={"/"}
              className="grow font-semibold flex items-center justify-center px-4 bg-[#54232D] hover:bg-[#54232D]/80  py-2 rounded-4xl transition-colors duration-300 ease-initial"
            >
              Criar conta
            </Link>
          </div>
    );
}
export default ButtonsBox;