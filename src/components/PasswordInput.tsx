import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useState, type InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: FieldError | undefined;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const tooglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="w-full flex flex-col gap-1.5">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#3E3841]">{label}</label>
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              {...props}
              ref={ref}
              className={`w-full rounded-lg border bg-[#FBF9F5] px-3.5 py-2.5 pr-11  text-gray-900  outline-none transition-colors duration-200
              focus:ring-2 focus:ring-[#F0C995]/20 focus:border-[#F0C995] ${
                error
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                  : 'border-[#DED5C7]'
              }`}
            />
            <button type="button" onClick={tooglePasswordVisibility} aria-label={showPassword? 'Ocultar palavra-passe':'Mostrar palavra-passe'} aria-pressed={showPassword} tabIndex={0} className="absolute right-3.5 flex items-center justify-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors *:cursor-pointer">{showPassword ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}</button>
          </div>
        </div>
        {error && (
          <p className="text-xs text-red-500 pt-1 pb-4">{error.message}</p>
        )}
      </div>
    );
  },
);
