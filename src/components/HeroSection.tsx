import { SearchIcon, UniversityIcon, VerifiedIcon } from "lucide-react";
import type { FC } from "react";

export const HeroSection: FC = () => {
  return (
    <section className="grid grid-cols-1 min-[541px]:grid-cols-2 min-h-screen bg-[url(src/assets/images/hero1.jpg)] bg-position-[70%] min-[854px]:bg-position-[0%_70%] bg-no-repeat bg-cover  mt-18 px-6 sm:px-16 md:px-18 pb-8 relative z-1 transition-all duration-300 ease-linear before:absolute before:content[''] before:top-0 before:left-0 before:w-full before:h-full  before:bg-linear-to-r/srgb before:from-[#54232D] before:from-20%  before:via-[#54232D]/70 before:via-55% before:to-[#54232D]/70 sm:before:to-transparent lg:before:to-95% before:-z-3">
      <div className=" text-[#F6F3EB] pt-12">
        <h1 className="text-4xl min-[321px]:text-5xl min-[428px]:text-6xl min-[967px]:text-7xl text-white text-wrap font-bold tracking-tight mb-4 transition-all duration-300 ease-linear">
          A proxima <span className="text-yellow-300">prova</span> comeca aqui
        </h1>
        <p className="text-xl ">
          Pesquise por universidade, curso, disciplina ou ano. O conhecimento de
          uma turma pode desbloquear a preparacao de outra.
        </p>
        <div className=" min-[896px]:w-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 max-[639px]:mx-auto  min-[896px]:mx-0 mt-12 transition-all duration-300 ease-linear">
          <span className="w-full flex items-center justify-between px-2 md:px-0 md:inline bg-white md:bg-transparent rounded-md md:rounded-none transition-all duration-300 ease-linear">
            <input
              type="search"
              placeholder="Pesquisar por universidade,faculdade,curso,..."
              className="grow md:w-full text-gray-500 bg-white placeholder:text-gray-500 px-2 py-2.5 rounded-md md:border md:focus:border-2 border-rose-950 md:focus:border-pink-950 transition-all duration-300 ease-linear outline-0"
            />
            <SearchIcon className="md:hidden inline text-[#54232D] grow-0 cursor-pointer" />
          </span>
          <button className="hidden md:block w-full sm:w-auto text-[#54232D] px-6 py-2.5 rounded-md bg-[#F6F3EB] cursor-pointer">
            Pesquisar
          </button>
        </div>
      </div>
      <div className="col-span-2  flex gap-7 md:gap-12 pt-4 mt-4  *:text-sm md:*:text-base *:flex *:gap-2 *:text-[#9e9a82]">
        <p>
          <VerifiedIcon />
          Documentos catalogados
        </p>
        <p>
          <UniversityIcon />
          18 Universidades
        </p>
      </div>
      <div className=" -z-2"></div>
    </section>
  );
};
