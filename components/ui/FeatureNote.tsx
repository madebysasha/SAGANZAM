import type { CSSProperties } from "react";

type FeatureNoteProps = {
  title: string;
  description: string;
  className?: string;
  style?: CSSProperties;
};

export function FeatureNote({ title, description, className, style }: FeatureNoteProps) {
  return (
    <div className={`text-espresso flex flex-col items-start gap-5 ${className ?? ""}`} style={style}>
      <p className="font-sans text-[36px] leading-[1.2] font-normal tracking-[-0.72px]">
        {title}
      </p>
      <p className="font-sans text-lg leading-normal font-normal">{description}</p>
    </div>
  );
}
