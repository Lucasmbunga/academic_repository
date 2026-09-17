import { Save } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router";

interface DocumentCardProps{
    imageUrl:string;
    title:string;
    views:number;
    owner:string;
}
export const DocumentCard:FC<DocumentCardProps>=({imageUrl,owner,title,views})=>{
    return(
        <div className=" w-45 bg-[#FBF8F4] p-4 ring-1 ring-[#e7e1d9]">
            <Link to={'/'} className="flex flex-col gap-4">
            <div className="relative rounded-xs">
                <img src={imageUrl} alt="" className="rounded-xs"/>
                <span className="absolute top-0 left-0 w-13 text-sm text-white bg-green-500 px-4 py-1 rounded-tl-xs rounded-br-lg">PDF</span>
            </div>
            <h3 className="font-bold">{title}</h3>
            <p title={'Adicionado por '+owner} className="text-sm text-gray-900">Adicionado por {owner}</p>
            <span className="flex justify-between text-sm">
                <span>{views} Visualizações</span>
                <Save/>
            </span>
            </Link>
        </div>
    );
}