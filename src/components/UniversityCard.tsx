import {GraduationCapIcon, MoveRight } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router";

interface IUniversityCardProps {
  universityName: string;
}

const UniversityCard: FC<IUniversityCardProps> = ({ universityName }) => {
  return (
    <div className="flex flex-col gap-6 bg-[#FBF8F4] p-4 rounded-lg ring-1 ring-[#EEE7DB] hover:ring-[#E4CAA2] transition-all duration-300 ease-linear">
        <GraduationCapIcon className="text-[#54232D]"/>
      <div>
        <h3 className=" text-gray-800">{universityName}</h3>
      <Link to={"/"} className="flex items-center gap-2 text-xs text-gray-400 w-20 ">
        {"Explorar "}
        <MoveRight />
      </Link>
      </div>
    </div>
  );
};
export default UniversityCard;
