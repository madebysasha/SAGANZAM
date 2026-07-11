import Image from "next/image";

type IconLinkProps = {
  icon: "telegram" | "phone" | "place";
  label: string;
  href?: string;
  className?: string;
  textClassName?: string;
};

const ICONS = {
  telegram: "/images/icon-telegram.svg",
  phone: "/images/icon-phone.svg",
  place: "/images/icon-place.svg",
};

export function IconLink({
  icon,
  label,
  href = "#",
  className,
  textClassName = "font-sans text-xl leading-[1.2] font-normal tracking-[-0.4px] whitespace-nowrap",
}: IconLinkProps) {
  return (
    <a
      href={href}
      className={`flex shrink-0 items-center justify-center gap-4 rounded-[60px] py-1 ${className ?? ""}`}
    >
      <Image src={ICONS[icon]} alt="" width={24} height={24} className="shrink-0" />
      <span className={textClassName}>{label}</span>
    </a>
  );
}
