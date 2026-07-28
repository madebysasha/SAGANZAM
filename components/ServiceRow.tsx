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
    <div
      className={`static flex w-full flex-col items-center gap-6 text-center laptop:items-start laptop:text-left laptop:absolute ${className}`}
    >
      <div className="text-espresso flex flex-col items-center gap-3 text-center tablet:gap-4 laptop:items-start laptop:text-left">
        {/* Number sits above the image pre-laptop (rendered by ServicesSection); shown here again from laptop: up */}
        <p className="hidden font-sans text-[22px] leading-normal font-medium laptop:block">({index})</p>
        <p className="font-display text-[42px] leading-none font-normal italic tablet:text-[50px] tablet:tracking-[-1.5px] laptop:text-[60px] laptop:tracking-[-1.8px]">
          {title}
        </p>
        <p className="font-sans text-base leading-normal font-normal tablet:text-lg laptop:text-lg laptop:leading-normal laptop:font-medium">
          {description}
        </p>
      </div>
      <Button label="Узнать подробнее" />
    </div>
  );
}
