import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import { ProductCard } from "./ui/ProductCard";
import { Reveal } from "./ui/Reveal";
import { mockProducts } from "@/lib/mock-products";

// Complete literal strings (not template-interpolated) so Tailwind's static
// scanner can pick up every arbitrary-value class — see MIGRATION pattern.
const GRID_CLASSES = [
  "grid w-full grid-cols-1 gap-x-6 gap-y-10 tablet:grid-cols-2 laptop:absolute laptop:top-[1529px] laptop:left-[40px] laptop:flex laptop:w-[1200px] laptop:items-center laptop:gap-5 desktop:top-[1587.33px] desktop:left-[16px] desktop:w-[1481px]",
  "grid w-full grid-cols-1 gap-x-6 gap-y-10 tablet:grid-cols-2 laptop:absolute laptop:top-[2954px] laptop:left-[40px] laptop:flex laptop:w-[1200px] laptop:items-center laptop:gap-5 desktop:top-[3144px] desktop:left-[16px] desktop:w-[1481px]",
  "grid w-full grid-cols-1 gap-x-6 gap-y-10 tablet:grid-cols-2 laptop:absolute laptop:top-[4323px] laptop:left-[40px] laptop:flex laptop:w-[1200px] laptop:items-center laptop:gap-5 desktop:top-[4644.33px] desktop:left-[16px] desktop:w-[1481px]",
];

function productAt(index: number) {
  return mockProducts[index % mockProducts.length];
}

export function CoatCatalogSection() {
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
            className="relative w-[220px] tablet:w-[260px] laptop:absolute laptop:top-[233.67px] laptop:left-[780.88px] laptop:w-[358.25px] desktop:top-[231.17px] desktop:left-[948px]"
          />
        </div>

        <p className="text-espresso font-sans w-full max-w-[420px] text-center text-base leading-[1.5] font-medium tablet:text-lg laptop:absolute laptop:top-[1392.33px] laptop:left-[910.84px] laptop:w-[353.2px] laptop:max-w-none laptop:text-left laptop:leading-normal desktop:top-[1472.33px] desktop:left-[1142.84px]">
          Краткое описание коллекции, ее преимущества и особенности, чем вдохновлена, кому подойдет
        </p>

        {GRID_CLASSES.map((cls, gridIndex) => (
          <div key={gridIndex} className={cls}>
            {Array.from({ length: 4 }).map((_, i) => (
              <ProductCard
                key={i}
                product={productAt(gridIndex * 4 + i + 1)}
                className="w-full laptop:flex-1"
              />
            ))}
          </div>
        ))}

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
            className="relative w-[220px] tablet:w-[260px] laptop:absolute laptop:top-1/2 laptop:left-[780.87px] laptop:w-[358.25px] laptop:-translate-y-1/2 desktop:top-[233.67px] desktop:left-[948px] desktop:translate-y-0"
          />
        </div>

        {/* Bottom mosaic: steppe backdrop (laptop-only, full-bleed) + three tiles + watermark caption, layered to preserve the overlapping mosaic feel pre-laptop */}
        <div className="relative left-1/2 h-[320px] w-screen -translate-x-1/2 overflow-hidden tablet:h-[420px] laptop:absolute laptop:top-[3542.56px] laptop:h-[626.46px] laptop:w-screen desktop:hidden">
          <Image src="/images/laptop-mosaic-hills.png" alt="" fill className="object-cover" />
          <Image src="/images/laptop-mosaic-horses.png" alt="" fill className="object-bottom object-cover" />
          <Image
            src="/images/laptop-mosaic-overlay.png"
            alt=""
            fill
            className="object-cover opacity-30 mix-blend-lighten"
          />
        </div>
        <div className="relative z-10 -mt-24 grid w-full grid-cols-3 gap-3 tablet:-mt-32 tablet:gap-5 laptop:contents">
          <div className="aspect-[302/403] w-full bg-[#d9d9d9] laptop:absolute laptop:top-[3582.08px] laptop:left-[113.97px] laptop:aspect-auto laptop:h-[403.41px] laptop:w-[302.55px] desktop:top-[3843.83px] desktop:left-[142px] desktop:h-[477.67px] desktop:w-[358.25px]" />
          <div className="aspect-[302/403] w-full bg-[#d9d9d9] laptop:absolute laptop:top-[3582.08px] laptop:left-[488.73px] laptop:aspect-auto laptop:h-[403.41px] laptop:w-[302.55px] desktop:top-[3843.83px] desktop:left-[585px] desktop:h-[477.67px] desktop:w-[358.25px]" />
          <div className="aspect-[302/403] w-full bg-[#d9d9d9] laptop:absolute laptop:top-[3582.08px] laptop:left-[863.49px] laptop:aspect-auto laptop:h-[403.41px] laptop:w-[302.55px] desktop:top-[3843.83px] desktop:left-[1029px] desktop:h-[477.67px] desktop:w-[358.25px]" />
        </div>
        <p
          className="font-display relative z-10 -mt-6 w-full text-center text-[clamp(2.5rem,16vw,4rem)] leading-[0.9] font-light tracking-[-1px] uppercase italic tablet:-mt-10 tablet:text-[clamp(3.5rem,12vw,6rem)] tablet:tracking-[-2px] laptop:absolute laptop:inset-x-0 laptop:top-[3985.49px] laptop:mt-0 laptop:text-[159.81px] laptop:tracking-[-4.79px] laptop:whitespace-nowrap desktop:top-[4321.5px] desktop:text-[199.81px] desktop:tracking-[-5.99px]"
          style={{ color: "#ede9e0" }}
        >
          пальто с мехом
        </p>
      </Reveal>
    </section>
  );
}
