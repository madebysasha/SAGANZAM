import type { CSSProperties } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  style?: CSSProperties;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  style,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  const eyebrowTitle = (
    <>
      <p className="font-display text-[32px] leading-[0.9] font-medium tracking-[-0.96px] italic">
        {eyebrow}
      </p>
      <p className="font-sans text-[48px] leading-[1.1] font-normal tracking-[-1.92px]">
        {title}
      </p>
    </>
  );

  if (!description) {
    return (
      <div
        className={`text-espresso flex flex-col gap-6 ${alignClass} ${className ?? ""}`}
        style={style}
      >
        {eyebrowTitle}
      </div>
    );
  }

  return (
    <div
      className={`text-espresso flex flex-col gap-5 ${alignClass} ${className ?? ""}`}
      style={style}
    >
      <div className={`flex flex-col gap-3 ${alignClass}`}>{eyebrowTitle}</div>
      <p className="font-sans text-xl leading-normal font-medium">{description}</p>
    </div>
  );
}
