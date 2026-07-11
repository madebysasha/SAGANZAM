"use client";

import Image from "next/image";
import Link from "next/link";
import { usePopup } from "./PopupProvider";

const leftLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Пальто", href: "#catalog" },
  { label: "Перешив", href: "#services" },
];
const rightLinks = [
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#consultation" },
];

const navLinkClass =
  "font-sans text-xl leading-[1.2] font-medium tracking-[-0.4px] text-white whitespace-nowrap transition-opacity hover:opacity-70";

export function Header() {
  const { open } = usePopup();

  return (
    <div className="contents">
      <nav className="absolute top-[28px] left-[40px] flex items-center gap-12 desktop:top-[60px] desktop:left-[80px]">
        {leftLinks.map((link) => (
          <Link key={link.label} href={link.href} className={navLinkClass}>
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/"
        className="absolute top-[28px] left-1/2 flex w-[244.25px] -translate-x-1/2 flex-col items-center desktop:top-[60px] desktop:w-[227.95px]"
      >
        <Image
          src="/images/logotype.svg"
          alt="Саган Зам"
          width={234}
          height={23}
          priority
          className="h-auto w-full"
        />
        <span className="mt-[3px] font-sans text-[15px] leading-normal font-medium tracking-[2.55px] whitespace-nowrap text-white opacity-50">
          меховое онлайн-ателье
        </span>
      </Link>

      <nav className="absolute top-[24px] right-[40px] flex items-center gap-12 desktop:top-[56px] desktop:right-[80px]">
        {rightLinks.map((link) => (
          <Link key={link.label} href={link.href} className={navLinkClass}>
            {link.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={open}
          className="cursor-pointer rounded-[30px] bg-white/20 px-3 py-1 font-sans text-xl leading-[1.2] font-medium tracking-[-0.4px] text-white whitespace-nowrap transition-colors hover:bg-white/30"
        >
          Консультация
        </button>
      </nav>
    </div>
  );
}
