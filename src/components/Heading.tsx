import { clsx } from "clsx";

export interface HeadingProps {
  size?: "s" | "m" | "l";
  children: string;
}

export function Heading({ size = "m", children }: HeadingProps) {
  return (
  <h2 
    className={clsx(
      "text-gray-700 font-sans font-bold", 
      {
        'text-l': size === "s",
        'text-xl': size === "m",
        'text-2xl': size === "l",
      })}
  >
    {children}
  </h2>
  );
};
