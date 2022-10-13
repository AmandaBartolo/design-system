import { clsx } from "clsx";

export interface ButtonProps {
  children: string;
}

export function Button({ children }: ButtonProps) {
  return (
  <button 
    className={clsx(
      "text-blue-900 text-s font-semibold font-sans bg-blue-700 py-3 w-full rounded-lg transition-colors hover:bg-blue-600 hover:shadow", 
      )}
  >
    {children}
  </button>
  );
};
