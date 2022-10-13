import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className={
      "flex items-center gap-3 h-12 bg-blue-800 rounded-lg py-4 px-3 w-full focus-within:ring-2 ring-blue-700" 
    }>
      {props.children}
    </div>
  )
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-800">
      {props.children}
    </Slot>
  )
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputProps) {
  return (
    <input 
      className={"bg-transparent flex-1 text-gray-800 text-xs placeholder:text-gray-800 outline-none"}
      {...props}
    />
  );
};

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}