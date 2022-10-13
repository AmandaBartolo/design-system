import { clsx } from "clsx";

export interface TextProps {
  size?: "s" | "m" | "l";
  children: any;
  asChild?: boolean;
  className?: string;
}

export function Text({ size = "m", children, asChild, className }: TextProps) {
  return (
  <span 
    className={clsx(
      "text-gray-800 font-sans", 
      {
        'text-xs': size === "s",
        'text-s': size === "m",
        'text-m': size === "l",
      },
      className,
    )}  
  >
    {children}
  </span>
  );
};
