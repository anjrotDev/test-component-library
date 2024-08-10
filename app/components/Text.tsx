import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Text: FC<HTMLAttributes<HTMLParagraphElement>> = ({ children, className, ...props }) => {
  return (
    <p className={twMerge("py-6 px-6 bg-slate-500 text-white font-bold", className)} {...props}>
      {children}
    </p>
  );
};
