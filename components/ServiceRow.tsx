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
    <div className={`absolute flex flex-col items-start gap-6 ${className}`}>
      <div className="text-espresso flex flex-col items-start gap-4">
        <p className="font-sans text-[22px] leading-normal font-medium">({index})</p>
        <p className="font-display text-[60px] leading-[0.9] font-normal tracking-[-1.8px] italic">
          {title}
        </p>
        <p className="font-sans text-lg leading-normal font-medium">{description}</p>
      </div>
      <Button label="Узнать подробнее" />
    </div>
  );
}
