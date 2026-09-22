import { forwardRef, type SelectHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error: FieldError | undefined;
  isLoaded?: boolean;
  depends?: number;
  dependsName:string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, isLoaded, depends,dependsName, children, ...props }, ref) => {
    return (
      <div>
        <label htmlFor="">{label}</label>
        <select
          ref={ref}
          {...props}
          disabled={!depends}
          className={`flex items-center justify-between w-full px-4 py-2 bg-[#FBF9F5] rounded-md border border-[#DED5C7]  focus:border-2 focus:border-[#F0C995] disabled:bg-gray-200 disabled:border-none disabled:ring-1 disabled:ring-gray-300`}
        >
          <option value={0}>
            {!depends
              ? `Selecione primeiro uma ${dependsName}`
              : `Selecionar  ${label}`}
          </option>

          {isLoaded ? (
            children
          ) : (
            <option value={0}>Carregando {label}s...</option>
          )}
        </select>
        {error && (
          <p className="text-xs text-red-400 pt-1 pb-4">{error.message}</p>
        )}
      </div>
    );
  },
);
