import {  MessageSquareWarning, Verified } from "lucide-react";
import type { FC } from "react";
interface ISucessModalProps {
  message: string;
  status: "success" | "error";
  isOpen:boolean;
}
export const SuccessModal: FC<ISucessModalProps> = ({ message, status,isOpen }) => {

  if(!isOpen)  return;
  return (
    <div className={`flex items-center gap-4 bg-white p-6 max-[321px]:px-4 absolute top-4 right-4 max-[321px]:right-1 rounded-lg shadow-md overflow-hidden before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:border-b-4 ${status==='success' ? 'before:border-green-600':'before:border-red-500'} before:animate-border-move`}>
      {status === "success" ?  <Verified size={30} className="text-green-600"/>:<MessageSquareWarning className="text-accent-600"/> }
      <p className={`${status==='success' ? 'text-green-600':'text-gray-600'}`}>{message}</p>
    </div>
  );
};
