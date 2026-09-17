import { forwardRef, type InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: FieldError | undefined;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error,children, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm mb-2 text-[#3E3841]">{label}</label>
        <input ref={ref} {...props}
          className={`w-full rounded-lg border bg-[#FBF9F5] px-3.5 py-2.5 pr-11  text-gray-900  outline-none transition-colors duration-200 focus:ring-2 focus:ring-[#F0C995]/20 focus:border-[#F0C995] ${
                error
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-[#DED5C7]"
              }`}
        />
        {children}
        {error && (<p className="text-xs text-red-400 pt-1 pb-4">{error.message}</p>)}
      </div>
    );
  },
);
