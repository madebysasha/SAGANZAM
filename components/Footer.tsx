import Image from "next/image";
import Link from "next/link";
import { IconLink } from "./ui/IconLink";

const NAV_COLUMNS = [
  [
    { label: "Главная", href: "/" },
    { label: "Каталог", href: "#catalog" },
    { label: "О нас", href: "#about" },
  ],
  [
    { label: "Перешив шуб", href: "#services" },
    { label: "Пошив пальто", href: "#catalog" },
    { label: "Пошив из соболя", href: "#services" },
  ],
  [
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Пользовательское соглашение", href: "#" },
    { label: "ООО “Швейная Студия САГАН ЗАМ”", href: "#" },
  ],
];

const FOOTER_TEXT_CLASS =
  "font-sans text-lg leading-normal font-normal whitespace-nowrap transition-opacity hover:opacity-70";

export function Footer() {
  return (
    // Figma spaces the footer 200px below the last block at laptop, and only
    // 12px at desktop by default — the client asked for the full 240px
    // rhythm at desktop instead, overriding that.
    <footer className="relative h-[283px] w-[1280px] mt-[200px] desktop:h-[333px] desktop:w-[1512px] desktop:mt-[240px]">
      <div className="relative h-[283px] w-[1280px] desktop:h-[333px] desktop:w-[1512px]">
        <nav
          className="text-taupe absolute top-0 left-[40px] flex items-center gap-[60px] desktop:left-[calc(50%-318px)] desktop:-translate-x-1/2"
        >
          {NAV_COLUMNS.map((col, i) => (
            <div key={i} className="flex flex-col items-start gap-3">
              {col.map((item) => (
                <Link key={item.label} href={item.href} className={FOOTER_TEXT_CLASS}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className="absolute top-0 right-[40px] flex flex-col items-start gap-1 desktop:right-[120px]">
          <IconLink
            icon="telegram"
            label="Telegram: @saganzam"
            href="https://t.me/saganzam"
            className="text-taupe"
            textClassName={FOOTER_TEXT_CLASS}
          />
          <IconLink
            icon="phone"
            label="+7 914 985 62-58"
            href="tel:+79149856258"
            className="text-taupe"
            textClassName={FOOTER_TEXT_CLASS}
          />
          <IconLink
            icon="place"
            label="Улан-Удэ, пр-т 50-летия октября, 21"
            href="https://maps.google.com/?q=Улан-Удэ, пр-т 50-летия октября, 21"
            className="text-taupe"
            textClassName={FOOTER_TEXT_CLASS}
          />
        </div>

        <div className="absolute right-[16.58px] bottom-[-5.32px] left-[16.58px] desktop:right-[21.58px] desktop:bottom-[-4.83px] desktop:left-[21.58px]">
          <Image
            src="/images/footer-logotype.svg"
            alt="Саган Зам"
            width={1247}
            height={121}
            className="h-auto w-full"
          />
        </div>
      </div>
    </footer>
  );
}
