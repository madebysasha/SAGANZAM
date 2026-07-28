"use client";

import Image from "next/image";
import { Header } from "./Header";
import { usePopup } from "./PopupProvider";

export function Hero() {
  const { open } = usePopup();

  return (
    <section className="relative h-[640px] w-screen ml-[calc(50%-50vw)] overflow-hidden tablet:h-[780px] laptop:h-[927px] desktop:h-[1095px]">
      {/* Portrait crop pre-laptop (different photo, proportions change); original campaign photo from laptop: up */}
      <Image
        src="/images/hero-mobile.png"
        alt="Пальто из меха, ручная работа"
        fill
        priority
        className="object-cover object-[50%_20%] laptop:hidden"
      />
      <Image
        src="/images/hero-background.png"
        alt="Пальто Nour Hammour, коллекция Fall Winter 25"
        fill
        priority
        className="hidden object-cover laptop:block"
      />

      <div className="relative mx-auto h-full w-full laptop:w-[1280px] desktop:w-[1512px]">
        <Header />

        {/* Headline: real text pre-laptop per Figma; centered above the campaign lettering from laptop: up */}
        <p className="font-display absolute bottom-[414px] left-1/2 w-[338px] -translate-x-1/2 translate-y-full text-center text-[48px] leading-[0.9] font-normal tracking-[-1.44px] text-white uppercase italic tablet:bottom-[440px] tablet:w-[460px] tablet:text-[64px] tablet:tracking-[-1.92px] laptop:top-[130px] laptop:bottom-auto laptop:w-[720px] laptop:translate-y-0 laptop:text-[70px] laptop:tracking-[-2.1px] desktop:top-[160px] desktop:w-[840px] desktop:text-[80px] desktop:tracking-[-2.4px]">
          Пошив премиальной верхней одежды
        </p>

        {/* Trust badges + CTA: stacked near the bottom pre-laptop, original scattered placement from laptop: up */}
        <div className="absolute inset-x-5 bottom-8 flex flex-col gap-6 tablet:inset-x-8 tablet:bottom-12 tablet:gap-8 laptop:hidden">
          <div className="font-sans text-white flex flex-col gap-3 text-base leading-snug font-normal tablet:flex-row tablet:items-end tablet:justify-between tablet:text-lg">
            <p>
              30 лет опыта
              <br />
              Ручная работа
              <br />
              Онлайн-примерка
            </p>
            <p>Доставка по всей России</p>
          </div>
          <button
            type="button"
            onClick={open}
            className="bg-espresso font-sans flex h-14 w-full cursor-pointer items-center justify-center rounded-[28px] text-base font-normal text-white transition-opacity hover:opacity-90 tablet:h-16 tablet:text-lg"
          >
            Получить консультацию
          </button>
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
