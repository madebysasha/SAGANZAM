"use client";

import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { usePopup } from "./PopupProvider";

export function RemoteOrderSection() {
  const { open } = usePopup();

  return (
    <section
      id="delivery"
      className="relative w-full px-5 mt-24 tablet:px-8 tablet:mt-[140px] laptop:h-[640px] laptop:w-[1280px] laptop:px-0 laptop:mt-[200px] desktop:h-[740px] desktop:w-[1512px] desktop:mt-[240px]"
    >
      <Reveal className="relative flex flex-col items-center gap-10 tablet:gap-12 laptop:block laptop:h-[640px] laptop:w-[1280px] desktop:h-[740px] desktop:w-[1512px]">
        <div className="text-espresso flex w-full max-w-[480px] flex-col items-center gap-6 text-center laptop:items-start laptop:absolute laptop:top-1/2 laptop:left-[40px] laptop:w-[516px] laptop:max-w-none laptop:-translate-y-1/2 laptop:text-left desktop:left-[calc(50%-376.03px)] desktop:-translate-x-1/2">
          <div className="flex w-full flex-col items-center gap-3 text-center tablet:gap-4 laptop:items-start laptop:text-left">
            <p className="font-display text-[20px] leading-[0.95] font-medium tracking-[-0.4px] italic tablet:text-[26px] tablet:tracking-[-0.7px] laptop:text-[32px] laptop:leading-[0.9] laptop:tracking-[-0.96px]">
              Онлайн-ателье
            </p>
            <p className="font-sans w-full text-2xl leading-[1.25] font-normal tracking-[-0.3px] tablet:text-[30px] tablet:leading-[1.2] tablet:tracking-[-0.5px] laptop:w-[425.86px] laptop:text-[36px] laptop:tracking-[-0.72px]">
              Доставляем по всей России
            </p>
          </div>
          <p className="font-sans text-[15px] leading-[1.55] font-normal tablet:text-[17px] tablet:leading-[1.45] laptop:text-lg laptop:leading-normal">
            Мы годами работаем дистанционно. Снятие мерок по простой инструкции, фото,
            индивидуальный подбор ткани и меха. готовое изделие приезжает к вам бережной
            доставкой.
          </p>
          {/* Filled CTA pre-laptop per Figma; laptop/desktop keep the original outlined Button */}
          <button
            type="button"
            onClick={open}
            className="bg-espresso font-sans flex h-[55px] w-full cursor-pointer items-center justify-center rounded-[60px] text-base font-normal text-cream transition-opacity hover:opacity-90 laptop:hidden"
          >
            Заказать дистанционно
          </button>
          <div className="hidden laptop:contents">
            <Button label="Получить консультацию" arrow={false} />
          </div>
        </div>

        {/* Figma's photo slot here is still empty at both breakpoints — pending a real photo */}
        <div className="aspect-square w-full max-w-[480px] bg-[#d9d9d9] laptop:absolute laptop:top-1/2 laptop:left-[640px] laptop:aspect-auto laptop:h-[640px] laptop:w-[640px] laptop:max-w-none laptop:-translate-y-1/2 desktop:left-[calc(50%+370.5px)] desktop:h-[740px] desktop:w-[740px] desktop:-translate-x-1/2" />
      </Reveal>
    </section>
  );
}
