import type { FC } from "react";

interface IButtonProps{
    isLoading:boolean;
    isSucess:boolean;
    loadingText:string;
    defaultText:string;
}

export const Button:FC<IButtonProps>=({isLoading,loadingText,defaultText,isSucess})=>{
    return(
        <button
        disabled={isLoading || isSucess}
            onClick={(event) => event.stopPropagation()}
            type="submit"
            className={`w-full text-white px-6 py-2.5 rounded-md bg-[#75333c] hover:bg-[#75333c]/85 mt-4 cursor-pointer transition-colors duration-300 ease-linear  disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-4">
                <span className="block w-5 h-5   border-2 border-r-0 border-b-0 rounded-full animate-spin"></span>
            {loadingText}
              </span>
            ) : (
              defaultText
            )}
          </button>
    );
}

