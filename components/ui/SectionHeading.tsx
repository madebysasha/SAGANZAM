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
      <p className="font-display text-[20px] leading-[0.95] font-medium tracking-[-0.4px] italic tablet:text-[26px] tablet:leading-[0.9] tablet:tracking-[-0.7px] laptop:text-[32px] laptop:tracking-[-0.96px]">
        {eyebrow}
      </p>
      <p className="font-sans text-[30px] leading-[1.15] font-normal tracking-[-0.6px] tablet:text-[38px] tablet:leading-[1.1] tablet:tracking-[-1.2px] laptop:text-[48px] laptop:tracking-[-1.92px]">
        {title}
      </p>
    </>
  );

  if (!description) {
    return (
      <div
        className={`text-espresso flex flex-col gap-4 tablet:gap-5 laptop:gap-6 ${alignClass} ${className ?? ""}`}
        style={style}
      >
        {eyebrowTitle}
      </div>
    );
  }

  return (
    <div
      className={`text-espresso flex flex-col gap-4 tablet:gap-5 ${alignClass} ${className ?? ""}`}
      style={style}
    >
      <div className={`flex flex-col gap-2 tablet:gap-3 ${alignClass}`}>{eyebrowTitle}</div>
      <p className="font-sans text-base leading-normal font-medium tablet:text-lg laptop:text-xl">
        {description}
      </p>
    </div>
  );
}
