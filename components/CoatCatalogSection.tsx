import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import { ProductCard } from "./ui/ProductCard";
import { Reveal } from "./ui/Reveal";
import { mockProducts } from "@/lib/mock-products";

// Complete literal strings (not template-interpolated) so Tailwind's static
// scanner can pick up every arbitrary-value class — see MIGRATION pattern.
const GRID_CLASSES = [
  "absolute top-[1529px] left-[40px] flex w-[1200px] items-center gap-5 desktop:top-[1587.33px] desktop:left-[16px] desktop:w-[1481px]",
  "absolute top-[2954px] left-[40px] flex w-[1200px] items-center gap-5 desktop:top-[3144px] desktop:left-[16px] desktop:w-[1481px]",
  "absolute top-[4323px] left-[40px] flex w-[1200px] items-center gap-5 desktop:top-[4644.33px] desktop:left-[16px] desktop:w-[1481px]",
];

function productAt(index: number) {
  return mockProducts[index % mockProducts.length];
}

export function CoatCatalogSection() {
  return (
    <section
      id="catalog"
      className="relative h-[4736px] w-[1280px] mt-[200px] desktop:h-[5155px] desktop:w-[1512px] desktop:mt-[240px]"
    >
      <Reveal className="relative h-[4736px] w-[1280px] desktop:h-[5155px] desktop:w-[1512px]">
        {/* Copy itself differs by breakpoint in Figma, not just layout — two instances, toggled */}
        <SectionHeading
          eyebrow="Каталог"
          title="Премиальные пальто"
          description="Технология пошива из двусторонней ткани с закрытыми швами обязывает к абсолютному совершенству. Отсутствие подклада делает силуэт летящим, а кашемир в составе дарит благородное сияние, мягкость и легкость."
          className="absolute top-0 left-1/2 w-[800.83px] -translate-x-1/2 desktop:hidden"
        />
        <SectionHeading
          eyebrow="Жемчужина"
          title="Премиальное пальто Double-face"
          description="Технология пошива из двусторонней ткани с закрытыми швами обязывает к абсолютному совершенству. Отсутствие подклада делает силуэт летящим, а кашемир в составе дарит благородное сияние, мягкость и легкость."
          className="absolute top-0 left-1/2 hidden w-[800.83px] -translate-x-1/2 desktop:flex"
        />

        {/* Hero showcase: large placeholder + featured product card */}
        <div className="absolute top-[288px] left-0 h-[982px] w-[1280px] desktop:top-[368px] desktop:w-[1512px]">
          <div className="absolute top-1/2 left-0 h-[986.667px] w-[640px] -translate-y-1/2 bg-[#d9d9d9] desktop:left-[16px] desktop:w-[740px]" />
          <ProductCard
            product={productAt(0)}
            className="absolute top-[233.67px] left-[780.88px] w-[358.25px] desktop:top-[231.17px] desktop:left-[948px]"
          />
        </div>

        <div className="absolute top-[439.9px] left-[748.44px] h-[113.2px] w-[423.13px] desktop:top-[585.32px] desktop:left-[910px]">
          <Image src="/images/bestseller-badge.svg" alt="Бестселлер" fill className="object-contain" />
        </div>

        <p className="text-espresso font-sans absolute top-[1392.33px] left-[910.84px] w-[353.2px] text-lg leading-normal font-medium desktop:top-[1472.33px] desktop:left-[1142.84px]">
          Краткое описание коллекции, ее преимущества и особенности, чем вдохновлена, кому подойдет
        </p>

        {GRID_CLASSES.map((cls, gridIndex) => (
          <div key={gridIndex} className={cls}>
            {Array.from({ length: 4 }).map((_, i) => (
              <ProductCard key={i} product={productAt(gridIndex * 4 + i + 1)} className="flex-1" />
            ))}
          </div>
        ))}

        {/* Single featured product — real photo at laptop, placeholder at desktop (established separately) */}
        <div className="absolute top-[2032px] left-0 h-[832px] w-[1280px] overflow-hidden desktop:top-[2130px] desktop:h-[982px] desktop:w-[1512px]">
          <div className="absolute top-1/2 left-0 h-[640.36px] w-[640px] -translate-y-1/2 overflow-hidden desktop:hidden">
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
            className="absolute top-1/2 left-[780.87px] w-[358.25px] -translate-y-1/2 desktop:top-[233.67px] desktop:left-[948px] desktop:translate-y-0"
          />
        </div>

        {/* Bottom mosaic: steppe backdrop (laptop-only, full-bleed) + three tiles + watermark caption */}
        <div className="absolute top-[3542.56px] left-1/2 h-[626.46px] w-screen -translate-x-1/2 overflow-hidden desktop:hidden">
          <Image src="/images/laptop-mosaic-hills.png" alt="" fill className="object-cover" />
          <Image src="/images/laptop-mosaic-horses.png" alt="" fill className="object-bottom object-cover" />
          <Image
            src="/images/laptop-mosaic-overlay.png"
            alt=""
            fill
            className="object-cover opacity-30 mix-blend-lighten"
          />
        </div>
        <div className="absolute top-[3582.08px] left-[113.97px] h-[403.41px] w-[302.55px] bg-[#d9d9d9] desktop:top-[3843.83px] desktop:left-[142px] desktop:h-[477.67px] desktop:w-[358.25px]" />
        <div className="absolute top-[3582.08px] left-[488.73px] h-[403.41px] w-[302.55px] bg-[#d9d9d9] desktop:top-[3843.83px] desktop:left-[585px] desktop:h-[477.67px] desktop:w-[358.25px]" />
        <div className="absolute top-[3582.08px] left-[863.49px] h-[403.41px] w-[302.55px] bg-[#d9d9d9] desktop:top-[3843.83px] desktop:left-[1029px] desktop:h-[477.67px] desktop:w-[358.25px]" />
        <p
          className="font-display absolute inset-x-0 top-[3985.49px] text-center text-[159.81px] leading-[0.9] font-light tracking-[-4.79px] whitespace-nowrap uppercase italic desktop:top-[4321.5px] desktop:text-[199.81px] desktop:tracking-[-5.99px]"
          style={{ color: "#ede9e0" }}
        >
          пальто с мехом
        </p>
      </Reveal>
    </section>
  );
}
