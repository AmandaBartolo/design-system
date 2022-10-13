export interface BoxProps {
  children: any;
}

export function Box({ children }: BoxProps) {
  return (
  <div 
    className={"w-[485px] h-[696px] bg-gray-900 rounded-xl flex flex-col items-center justify-center"}
  >
    {children}
  </div>
  );
};