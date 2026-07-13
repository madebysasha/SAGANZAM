import type { ReactNode } from "react";
import { Button } from "./ui/Button";

type ServiceRowProps = {
  index: string;
  title: ReactNode;
  description: string;
  className: string;
};

export function ServiceRow({ index, title, description, className }: ServiceRowProps) {
  return (
    <div className={`static flex w-full flex-col items-start gap-6 laptop:absolute ${className}`}>
      <div className="text-espresso flex flex-col items-start gap-3 tablet:gap-4">
        <p className="font-sans text-base leading-normal font-medium tablet:text-[19px] laptop:text-[22px]">
          ({index})
        </p>
        <p className="font-display text-[34px] leading-[0.95] font-normal tracking-[-0.6px] italic tablet:text-[44px] tablet:leading-[0.9] tablet:tracking-[-1.2px] laptop:text-[60px] laptop:tracking-[-1.8px]">
          {title}
        </p>
        <p className="font-sans text-[15px] leading-[1.55] font-medium tablet:text-[17px] tablet:leading-[1.45] laptop:text-lg laptop:leading-normal">
          {description}
        </p>
      </div>
      <Button label="Узнать подробнее" />
    </div>
  );
}
