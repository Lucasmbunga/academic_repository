import {  MoreVertical } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router";

interface SavedDocumentCardProps {
  imageUrl: string;
  title: string;
  owner: string;
}

const SavedDocumentCard: FC<SavedDocumentCardProps> = ({
  imageUrl,
  title,
  owner,
}) => {
  return (
    <div className="w-full md:w-[65%] p-4 md:mx-auto mt-6 border-b-2 border-b-[#e7e1d9] relative">
      <Link to={"/"} className="flex gap-4">
        <div className="h-45 relative rounded-xs">
          <img src={imageUrl} alt="" className="h-full rounded-xs" />
          <span className="absolute top-0 left-0 w-13 text-sm text-white bg-green-500 px-4 py-1 rounded-tl-xs rounded-br-lg">
            PDF
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold">{title}</h3>
          <p
            title={"Adicionado por " + owner}
            className="text-sm text-gray-900"
          >
            Adicionado por {owner}
          </p>
        </div>
        <span className="absolute right-6">
            <MoreVertical size={18}/>
        </span>
      </Link>
    </div>
  );
};
export default SavedDocumentCard;
