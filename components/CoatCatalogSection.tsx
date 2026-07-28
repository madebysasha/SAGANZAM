"use client";

import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import { ProductCard } from "./ui/ProductCard";
import { Reveal } from "./ui/Reveal";
import { usePopup } from "./PopupProvider";
import { mockProducts } from "@/lib/mock-products";

// Complete literal strings (not template-interpolated) so Tailwind's static
// scanner can pick up every arbitrary-value class — see MIGRATION pattern.
// Pre-laptop: horizontal scroll (all items reachable by swipe), edge-bled via -mx/px.
// laptop/desktop: original absolute canvas, untouched.
const GRID_CLASSES = [
  "-mx-5 flex w-[calc(100%+40px)] gap-5 overflow-x-auto px-5 pb-1 tablet:-mx-8 tablet:w-[calc(100%+64px)] tablet:px-8 laptop:absolute laptop:top-[1529px] laptop:left-[40px] laptop:mx-0 laptop:w-[1200px] laptop:items-center laptop:overflow-visible laptop:px-0 laptop:pb-0 desktop:top-[1587.33px] desktop:left-[16px] desktop:w-[1481px]",
  "-mx-5 flex w-[calc(100%+40px)] gap-5 overflow-x-auto px-5 pb-1 tablet:-mx-8 tablet:w-[calc(100%+64px)] tablet:px-8 laptop:absolute laptop:top-[2954px] laptop:left-[40px] laptop:mx-0 laptop:w-[1200px] laptop:items-center laptop:overflow-visible laptop:px-0 laptop:pb-0 desktop:top-[3144px] desktop:left-[16px] desktop:w-[1481px]",
  "-mx-5 flex w-[calc(100%+40px)] gap-5 overflow-x-auto px-5 pb-1 tablet:-mx-8 tablet:w-[calc(100%+64px)] tablet:px-8 laptop:absolute laptop:top-[4323px] laptop:left-[40px] laptop:mx-0 laptop:w-[1200px] laptop:items-center laptop:overflow-visible laptop:px-0 laptop:pb-0 desktop:top-[4644.33px] desktop:left-[16px] desktop:w-[1481px]",
];

function productAt(index: number) {
  return mockProducts[index % mockProducts.length];
}

export function CoatCatalogSection() {
  const { open } = usePopup();

  return (
    <section
      id="catalog"
      className="relative w-full px-5 mt-24 tablet:px-8 tablet:mt-[140px] laptop:h-[4736px] laptop:w-[1280px] laptop:px-0 laptop:mt-[200px] desktop:h-[5155px] desktop:w-[1512px] desktop:mt-[240px]"
    >
      <Reveal className="relative flex flex-col items-center gap-20 tablet:gap-24 laptop:block laptop:h-[4736px] laptop:w-[1280px] desktop:h-[5155px] desktop:w-[1512px]">
        {/* Copy itself differs by breakpoint in Figma, not just layout — two instances, toggled */}
        <div className="w-full laptop:contents">
          <SectionHeading
            eyebrow="Каталог"
            title="Премиальные пальто"
            description="Технология пошива из двусторонней ткани с закрытыми швами обязывает к абсолютному совершенству. Отсутствие подклада делает силуэт летящим, а кашемир в составе дарит благородное сияние, мягкость и легкость."
            className="w-full laptop:absolute laptop:top-0 laptop:left-1/2 laptop:w-[800.83px] laptop:-translate-x-1/2 desktop:hidden"
          />
          <SectionHeading
            eyebrow="Жемчужина"
            title="Премиальное пальто Double-face"
            description="Технология пошива из двусторонней ткани с закрытыми швами обязывает к абсолютному совершенству. Отсутствие подклада делает силуэт летящим, а кашемир в составе дарит благородное сияние, мягкость и легкость."
            className="hidden laptop:absolute laptop:top-0 laptop:left-1/2 laptop:w-[800.83px] laptop:-translate-x-1/2 desktop:flex"
          />
        </div>

        {/* Hero showcase: large placeholder + featured product card + bestseller badge */}
        <div className="relative flex w-full flex-col items-center gap-6 tablet:gap-8 laptop:absolute laptop:top-[288px] laptop:left-0 laptop:block laptop:h-[982px] laptop:w-[1280px] desktop:top-[368px] desktop:w-[1512px]">
          <div className="relative aspect-[640/987] w-full max-w-[480px] bg-[#d9d9d9] laptop:absolute laptop:top-1/2 laptop:left-0 laptop:aspect-auto laptop:h-[986.667px] laptop:w-[640px] laptop:max-w-none laptop:-translate-y-1/2 desktop:left-[16px] desktop:w-[740px]" />
          <div className="absolute top-3 right-3 h-[46px] w-[165px] tablet:h-[60px] tablet:w-[215px] laptop:top-[151.9px] laptop:left-[748.44px] laptop:right-auto laptop:h-[113.2px] laptop:w-[423.13px] desktop:top-[217.32px] desktop:left-[910px]">
            <Image src="/images/bestseller-badge.svg" alt="Бестселлер" fill className="object-contain" />
          </div>
          <ProductCard
            product={productAt(0)}
            className="relative w-full max-w-[480px] laptop:absolute laptop:top-[233.67px] laptop:left-[780.88px] laptop:w-[358.25px] desktop:top-[231.17px] desktop:left-[948px]"
          />
        </div>

        <p className="text-espresso font-sans w-full max-w-[420px] text-center text-base leading-[1.5] font-medium tablet:text-lg laptop:absolute laptop:top-[1392.33px] laptop:left-[910.84px] laptop:w-[353.2px] laptop:max-w-none laptop:text-left laptop:leading-normal desktop:top-[1472.33px] desktop:left-[1142.84px]">
          Краткое описание коллекции, ее преимущества и особенности, чем вдохновлена, кому подойдет
        </p>

        <div className={GRID_CLASSES[0]}>
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCard
              key={i}
              product={productAt(i + 1)}
              className="w-[290px] shrink-0 laptop:w-auto laptop:shrink laptop:flex-1"
            />
          ))}
        </div>

        {/* Single featured product — real photo at laptop, placeholder at desktop (established separately) */}
        <div className="relative flex w-full flex-col items-center gap-6 tablet:gap-8 laptop:absolute laptop:top-[2032px] laptop:left-0 laptop:block laptop:h-[832px] laptop:w-[1280px] laptop:overflow-hidden desktop:top-[2130px] desktop:h-[982px] desktop:w-[1512px]">
          <div className="relative aspect-[640/640.36] w-full max-w-[480px] overflow-hidden laptop:absolute laptop:top-1/2 laptop:left-0 laptop:aspect-auto laptop:h-[640.36px] laptop:w-[640px] laptop:max-w-none laptop:-translate-y-1/2 desktop:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/laptop-catalog-single-feature.png"
              alt="Пальто из коллекции"
              className="absolute top-0 left-0 w-full object-cover"
              style={{ height: "146.5%" }}
            />
          </div>
          <div className="absolute top-[121px] left-[16px] hidden h-[740px] w-[740px] bg-[#d9d9d9] desktop:block" />
          <ProductCard
            product={productAt(13)}
            className="relative w-full max-w-[480px] laptop:absolute laptop:top-1/2 laptop:left-[780.87px] laptop:w-[358.25px] laptop:-translate-y-1/2 desktop:top-[233.67px] desktop:left-[948px] desktop:translate-y-0"
          />
        </div>

        <div className={GRID_CLASSES[1]}>
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCard
              key={i}
              product={productAt(i + 5)}
              className="w-[290px] shrink-0 laptop:w-auto laptop:shrink laptop:flex-1"
            />
          ))}
        </div>

        {/* Banner — pre-laptop: one rounded card (hills backdrop + heading + single centered item); laptop/desktop resume the original mosaic canvas untouched */}
        <div className="relative w-full overflow-hidden rounded-[12px] laptop:contents">
          <div className="absolute inset-0 overflow-hidden laptop:top-[3542.56px] laptop:right-auto laptop:bottom-auto laptop:left-1/2 laptop:h-[626.46px] laptop:w-screen laptop:-translate-x-1/2 desktop:hidden">
            <Image src="/images/laptop-mosaic-hills.png" alt="" fill className="object-cover" />
            <Image src="/images/laptop-mosaic-horses.png" alt="" fill className="object-bottom object-cover" />
            <Image
              src="/images/laptop-mosaic-overlay.png"
              alt=""
              fill
              className="object-cover opacity-30 mix-blend-lighten"
            />
          </div>
          <div className="relative z-10 flex w-full flex-col items-center gap-8 px-5 py-10 tablet:gap-10 tablet:py-14 laptop:hidden">
            <p className="font-display w-full text-center text-[clamp(2.5rem,18vw,4.5rem)] leading-none font-light tracking-[-1px] text-espresso uppercase italic tablet:text-[clamp(3.5rem,12vw,6rem)] tablet:tracking-[-2px]">
              пальто с мехом
            </p>
            <div className="aspect-[358/478] w-full max-w-[380px] bg-[#d9d9d9]" />
          </div>
          {/* laptop/desktop: original three-tile mosaic + watermark caption, exact prior canvas */}
          <div className="hidden laptop:contents">
            <div className="aspect-[302/403] w-full bg-[#d9d9d9] laptop:absolute laptop:top-[3582.08px] laptop:left-[113.97px] laptop:aspect-auto laptop:h-[403.41px] laptop:w-[302.55px] desktop:top-[3843.83px] desktop:left-[142px] desktop:h-[477.67px] desktop:w-[358.25px]" />
            <div className="aspect-[302/403] w-full bg-[#d9d9d9] laptop:absolute laptop:top-[3582.08px] laptop:left-[488.73px] laptop:aspect-auto laptop:h-[403.41px] laptop:w-[302.55px] desktop:top-[3843.83px] desktop:left-[585px] desktop:h-[477.67px] desktop:w-[358.25px]" />
            <div className="aspect-[302/403] w-full bg-[#d9d9d9] laptop:absolute laptop:top-[3582.08px] laptop:left-[863.49px] laptop:aspect-auto laptop:h-[403.41px] laptop:w-[302.55px] desktop:top-[3843.83px] desktop:left-[1029px] desktop:h-[477.67px] desktop:w-[358.25px]" />
            <p
              className="font-display w-full text-center text-[159.81px] leading-[0.9] font-light tracking-[-4.79px] whitespace-nowrap uppercase italic laptop:absolute laptop:inset-x-0 laptop:top-[3985.49px] desktop:top-[4321.5px] desktop:text-[199.81px] desktop:tracking-[-5.99px]"
              style={{ color: "#ede9e0" }}
            >
              пальто с мехом
            </p>
          </div>
        </div>

        <div className={GRID_CLASSES[2]}>
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCard
              key={i}
              product={productAt(i + 9)}
              className="w-[290px] shrink-0 laptop:w-auto laptop:shrink laptop:flex-1"
            />
          ))}
        </div>

        {/* Consultation CTA — mobile/tablet only, per Figma */}
        <div className="flex w-full flex-col items-center gap-3 laptop:hidden">
          <button
            type="button"
            onClick={open}
            className="bg-espresso font-sans flex h-[55px] w-full cursor-pointer items-center justify-center rounded-[60px] text-base font-normal text-cream transition-opacity hover:opacity-90"
          >
            Получить консультацию
          </button>
          <p className="font-sans text-taupe w-full text-center text-xs font-normal">
            * Бесплатная консультация с дизайнером по телефону
          </p>
        </div>
      </Reveal>
    </section>
  );
}
