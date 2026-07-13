"use client";

import { useState } from "react";
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
  "font-sans text-base tablet:text-sm laptop:text-xl leading-[1.2] font-medium tracking-[-0.2px] tablet:tracking-[-0.1px] laptop:tracking-[-0.4px] text-white whitespace-nowrap transition-opacity hover:opacity-70";

export function Header() {
  const { open } = usePopup();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="contents">
      {/* Mobile-only bar: hamburger + centered logo + CTA. Hidden from tablet: up. */}
      <div className="absolute top-0 left-0 z-20 flex w-full items-center justify-between px-5 pt-6 tablet:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Открыть меню"
          className="flex size-9 shrink-0 flex-col items-center justify-center gap-[5px] cursor-pointer"
        >
          <span className="h-px w-6 bg-white" />
          <span className="h-px w-6 bg-white" />
          <span className="h-px w-6 bg-white" />
        </button>

        <Link href="/" className="flex flex-col items-center">
          <Image
            src="/images/logotype.svg"
            alt="Саган Зам"
            width={234}
            height={23}
            priority
            className="h-auto w-[150px]"
          />
        </Link>

        <button
          type="button"
          onClick={open}
          className="cursor-pointer rounded-[30px] bg-white/20 px-3 py-1.5 font-sans text-xs leading-[1.2] font-medium tracking-[-0.2px] text-white whitespace-nowrap transition-colors hover:bg-white/30"
        >
          Связь
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-espresso px-6 pt-6 pb-10 transition-opacity duration-300 tablet:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between">
          <Image
            src="/images/logotype.svg"
            alt="Саган Зам"
            width={234}
            height={23}
            className="h-auto w-[130px]"
          />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Закрыть меню"
            className="flex size-8 cursor-pointer items-center justify-center text-cream transition-opacity hover:opacity-60"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="mt-14 flex flex-col gap-7">
          {[...leftLinks, ...rightLinks].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-[32px] leading-[1.1] font-medium text-cream italic"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => {
            setMenuOpen(false);
            open();
          }}
          className="bg-cream text-espresso font-sans mt-auto cursor-pointer rounded-[30px] px-6 py-4 text-lg leading-[1.2] font-medium tracking-[-0.3px] transition-opacity hover:opacity-90"
        >
          Консультация
        </button>
      </div>

      {/* Shared nav: normal flow at tablet, existing absolute canvas from laptop: up */}
      <nav className="hidden items-center gap-3 tablet:absolute tablet:top-6 tablet:left-6 tablet:flex laptop:top-[28px] laptop:left-[40px] laptop:gap-12 desktop:top-[60px] desktop:left-[80px]">
        {leftLinks.map((link) => (
          <Link key={link.label} href={link.href} className={navLinkClass}>
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/"
        className="hidden w-[128px] flex-col items-center tablet:absolute tablet:top-6 tablet:left-1/2 tablet:flex tablet:-translate-x-1/2 laptop:top-[28px] laptop:w-[244.25px] desktop:top-[60px] desktop:w-[227.95px]"
      >
        <Image
          src="/images/logotype.svg"
          alt="Саган Зам"
          width={234}
          height={23}
          priority
          className="h-auto w-full"
        />
        <span className="mt-[3px] font-sans text-[11px] leading-normal font-medium tracking-[1.7px] whitespace-nowrap text-white opacity-50 tablet:hidden laptop:block laptop:text-[15px] laptop:tracking-[2.55px]">
          меховое онлайн-ателье
        </span>
      </Link>

      <nav className="hidden items-center gap-3 tablet:absolute tablet:top-7 tablet:right-6 tablet:flex laptop:top-[24px] laptop:right-[40px] laptop:gap-12 desktop:top-[56px] desktop:right-[80px]">
        {rightLinks.map((link) => (
          <Link key={link.label} href={link.href} className={navLinkClass}>
            {link.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={open}
          className="cursor-pointer rounded-[30px] bg-white/20 px-3 py-1 font-sans text-base tablet:text-sm laptop:text-xl leading-[1.2] font-medium tracking-[-0.2px] tablet:tracking-[-0.1px] laptop:tracking-[-0.4px] text-white whitespace-nowrap transition-colors hover:bg-white/30"
        >
          Консультация
        </button>
      </nav>
    </div>
  );
}
