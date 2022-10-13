import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: string;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
  <button 
    className={clsx(
      "text-blue-900 text-s font-semibold font-sans bg-blue-700 py-3 w-full rounded-lg transition-colors hover:bg-blue-600 hover:shadow", className,
      )}
      {...props}
  >
    {children}
  </button>
  );
};
