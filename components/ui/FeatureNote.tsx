import type { CSSProperties } from "react";

type FeatureNoteProps = {
  title: string;
  description: string;
  className?: string;
  style?: CSSProperties;
};

export function FeatureNote({ title, description, className, style }: FeatureNoteProps) {
  return (
    <div className={`text-espresso flex flex-col items-start gap-3 tablet:gap-4 laptop:gap-5 ${className ?? ""}`} style={style}>
      <p className="font-sans text-2xl leading-[1.25] font-normal tracking-[-0.3px] tablet:text-[30px] tablet:leading-[1.2] tablet:tracking-[-0.5px] laptop:text-[36px] laptop:tracking-[-0.72px]">
        {title}
      </p>
      <p className="font-sans text-[15px] leading-[1.55] font-normal tablet:text-[17px] tablet:leading-[1.45] laptop:text-lg laptop:leading-normal">
        {description}
      </p>
    </div>
  );
}
