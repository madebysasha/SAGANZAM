import Image from "next/image";
import { Header } from "./Header";

export function Hero() {
  return (
    <section className="relative h-[640px] w-screen ml-[calc(50%-50vw)] overflow-hidden tablet:h-[780px] laptop:h-[927px] desktop:h-[1095px]">
      <Image
        src="/images/hero-background.png"
        alt="Пальто Nour Hammour, коллекция Fall Winter 25"
        fill
        priority
        className="object-cover"
      />

      <div className="relative mx-auto h-full w-full laptop:w-[1280px] desktop:w-[1512px]">
        <Header />

        {/* Trust badges: stacked near the bottom pre-laptop, original scattered placement from laptop: up */}
        <div className="font-sans text-white absolute inset-x-5 bottom-8 flex flex-col gap-3 text-base leading-snug font-normal tablet:inset-x-8 tablet:bottom-12 tablet:flex-row tablet:items-end tablet:justify-between tablet:text-lg laptop:hidden">
          <p>
            30 лет опыта
            <br />
            Ручная работа
            <br />
            Онлайн-примерка
          </p>
          <p>Доставка по всей России</p>
        </div>

        <p className="font-sans text-xl leading-normal font-normal text-white absolute hidden laptop:block laptop:top-[272.67px] laptop:left-[875.24px] laptop:w-[174px] desktop:left-[991.24px]">
          30 лет опыта
          <br />
          Ручная работа
          <br />
          Онлайн-примерка
        </p>

        <p className="font-sans text-xl leading-normal font-normal text-white absolute hidden laptop:block laptop:top-[498.87px] laptop:left-[1131.24px] laptop:w-[156.78px] desktop:left-[1247.24px]">
          Доставка по всей России
        </p>
      </div>
    </section>
  );
}
