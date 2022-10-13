import { clsx } from "clsx";

export interface TextProps {
  size?: "s" | "m" | "l";
  children: string;
}

export function Text({ size = "m", children }: TextProps) {
  return (
  <span 
    className={clsx(
      "text-gray-800 font-sans", 
      {
        'text-xs': size === "s",
        'text-s': size === "m",
        'text-m': size === "l",
      })}
  >
    {children}
  </span>
  );
};
