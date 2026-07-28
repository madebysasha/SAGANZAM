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
  "font-sans text-[15px] leading-normal font-normal transition-opacity hover:opacity-70 tablet:text-[17px] laptop:text-lg laptop:whitespace-nowrap";

export function Footer() {
  return (
    // Figma spaces the footer 200px below the last block at laptop, and only
    // 12px at desktop by default — the client asked for the full 240px
    // rhythm at desktop instead, overriding that.
    <footer className="relative w-full laptop:h-[283px] laptop:w-[1280px] laptop:px-0 laptop:mt-[200px] desktop:h-[333px] desktop:w-[1512px] desktop:mt-[240px]">
      {/* Mobile/tablet — continues the dark card from ConsultationSection with no gap (one
          continuous block, per Figma). Only the legal links + copyright, centered, then the
          full-width brand mark; the site nav / contact links from desktop are dropped here. */}
      <div className="bg-espresso flex w-full flex-col items-center gap-[60px] px-5 pt-9 pb-[100px] tablet:px-8 laptop:hidden">
        <div className="text-taupe flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-3 text-xs">
            <Link href="#" className="transition-opacity hover:opacity-70">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="transition-opacity hover:opacity-70">
              Пользовательское соглашение
            </Link>
            <Link href="#" className="transition-opacity hover:opacity-70">
              ООО “Швейная Студия САГАН ЗАМ”
            </Link>
          </div>
          <p className="text-sm">© 2026 САГАН ЗАМ. Все права защищены</p>
        </div>
        <Image
          src="/images/footer-logotype.svg"
          alt="Саган Зам"
          width={1247}
          height={121}
          className="h-auto w-full"
        />
      </div>

      {/* laptop/desktop: original layout, untouched */}
      <div className="hidden laptop:contents">
        <div className="relative flex flex-col gap-10 laptop:block laptop:h-[283px] laptop:w-[1280px] desktop:h-[333px] desktop:w-[1512px]">
          <div className="laptop:contents">
            <nav className="text-taupe flex flex-col gap-8 laptop:absolute laptop:top-0 laptop:left-[40px] laptop:flex-row laptop:items-center laptop:gap-[60px] desktop:left-[calc(50%-318px)] desktop:-translate-x-1/2">
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

            <div className="flex flex-col items-start gap-2 laptop:absolute laptop:top-0 laptop:right-[40px] laptop:gap-1 desktop:right-[120px]">
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
          </div>

          <div className="relative w-full laptop:absolute laptop:right-[16.58px] laptop:bottom-[-5.32px] laptop:left-[16.58px] laptop:w-auto desktop:right-[21.58px] desktop:bottom-[-4.83px] desktop:left-[21.58px]">
            <Image
              src="/images/footer-logotype.svg"
              alt="Саган Зам"
              width={1247}
              height={121}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
