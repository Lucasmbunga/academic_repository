import {  FileQuestionMark } from "lucide-react";
import { useState, type FC } from "react";

interface IFAQProps {
  question: string;
  answer: string;
}

const FAQ: FC<IFAQProps> = ({ answer, question }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="border border-gray-500 border-x-0 border-t-0 pb-6 transition-all duration-300 ease-linear">
      <div className="flex items-center gap-6 py-2">
        <FileQuestionMark onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer"/>
        <span className="text-xl text-gray-950 font-bold">{question}</span>
      </div>
      {isOpen && <p className="text-gray-600 pt-4 animate-open-faq">{answer}</p>}
    </div>
  );
};
export default FAQ;
