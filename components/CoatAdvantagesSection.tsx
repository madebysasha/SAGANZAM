import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import { FeatureNote } from "./ui/FeatureNote";
import { Reveal } from "./ui/Reveal";

export function CoatAdvantagesSection() {
  return (
    <section
      id="advantages"
      className="relative w-full px-5 mt-24 tablet:px-8 tablet:mt-[140px] laptop:h-[4076px] laptop:w-[1280px] laptop:px-0 laptop:mt-[200px] desktop:w-[1512px] desktop:mt-[240px]"
    >
      <Reveal className="relative flex flex-col items-center gap-20 tablet:gap-24 laptop:block laptop:h-[4076px] laptop:w-[1280px] desktop:w-[1512px]">
        {/* Philosophy */}
        <div className="text-espresso flex w-full max-w-[600px] flex-col items-center gap-4 text-center tablet:max-w-[680px] tablet:gap-5 laptop:absolute laptop:top-0 laptop:left-1/2 laptop:w-[927px] laptop:max-w-none laptop:-translate-x-1/2 laptop:gap-6 desktop:w-[1213.47px]">
          <p className="font-display text-[20px] leading-[0.95] font-medium tracking-[-0.4px] italic tablet:text-[26px] tablet:tracking-[-0.7px] laptop:text-[32px] laptop:leading-[0.9] laptop:tracking-[-0.96px]">
            Философия
          </p>
          <p className="font-sans text-[26px] leading-[1.2] font-normal tracking-[-0.5px] uppercase tablet:text-[36px] tablet:tracking-[-0.9px] laptop:text-[52px] laptop:leading-[1.1] laptop:tracking-[-1.56px]">
            Одежда веками была визитной карточкой. Но дороже впечатления —{" "}
            <span className="font-display text-[28px] italic tablet:text-[38px] laptop:text-[56px]">
              самоощущение
            </span>
            : прямая осанка и уверенность, когда вы чувствуете себя иначе
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-6 tablet:gap-8 laptop:contents">
          <div className="relative aspect-[640/720] w-full max-w-[420px] overflow-hidden laptop:absolute laptop:top-[366px] laptop:left-1/2 laptop:aspect-auto laptop:h-[720.43px] laptop:w-[640px] laptop:max-w-none laptop:-translate-x-1/2">
            <Image src="/images/advantages-philosophy.png" alt="" fill className="object-cover" />
          </div>
          <p className="text-espresso font-sans w-full max-w-[420px] text-center text-base leading-[1.5] font-medium tablet:text-lg laptop:absolute laptop:top-[475.82px] laptop:left-[794px] laptop:w-[414.48px] laptop:max-w-none laptop:text-left laptop:leading-normal desktop:left-[966.5px]">
            Мы годами разрабатывали модели премиальных пальто и осознанно держим кутюрный, штучный
            объем производства, формируя закрытый круг владелиц.
          </p>
        </div>

        {/* Anatomy of quality */}
        <SectionHeading
          eyebrow="Анатомия качества"
          title="Безупречно со всех сторон"
          description="Кутюрный, штучный объём производства. Мы осознанно формируем закрытый круг владелиц — каждая модель отшивается по фигуре."
          className="w-full laptop:absolute laptop:top-[1246.34px] laptop:left-1/2 laptop:w-[800.83px] laptop:-translate-x-1/2"
        />

        {/* Fabric swatch pair — caption centered within its own photo so it works at every width */}
        <div className="grid w-full grid-cols-2 gap-3 tablet:gap-5 laptop:contents">
          <div className="relative aspect-square w-full overflow-hidden laptop:absolute laptop:top-[1546.34px] laptop:left-[calc(50%-399.73px)] laptop:aspect-auto laptop:h-[420px] laptop:w-[398.08px] laptop:-translate-x-1/2 desktop:left-[calc(50%-426px)] desktop:w-[420px]">
            <Image
              src="/images/advantages-double-sided.png"
              alt="Двусторонняя ткань"
              fill
              className="object-bottom object-cover"
            />
            <p className="absolute top-[47%] left-1/2 w-full -translate-x-1/2 text-center font-sans text-sm leading-normal font-medium whitespace-nowrap text-[#ede9e0] tablet:text-base laptop:text-lg">
              двустороння ткань
            </p>
          </div>
          <div className="relative aspect-square w-full overflow-hidden laptop:absolute laptop:top-[1546.34px] laptop:left-[calc(50%+25.31px)] laptop:aspect-auto laptop:h-[420px] laptop:w-[420px] laptop:-translate-x-1/2 desktop:left-1/2">
            <Image src="/images/advantages-closed-seam.png" alt="Закрытый шов" fill className="object-cover" />
            <p className="absolute top-[47%] left-1/2 w-full -translate-x-1/2 text-center font-sans text-sm leading-normal font-medium whitespace-nowrap text-[#ede9e0] tablet:text-base laptop:text-lg">
              закрытый шов
            </p>
          </div>
        </div>

        <FeatureNote
          title="Метод Double-Face"
          description="Закрытые швы без подклада. Ювелирная обработка, при которой внутренняя сторона изделия столь же совершенна, как и лицевая."
          className="w-full max-w-[420px] laptop:absolute laptop:top-[1688.44px] laptop:left-[calc(50%+434.8px)] laptop:w-[327.95px] laptop:max-w-none laptop:-translate-x-1/2 desktop:left-[calc(50%+454.47px)] desktop:w-[346px]"
        />

        <div className="grid w-full grid-cols-2 gap-3 tablet:gap-5 laptop:contents">
          <div className="relative aspect-[482/555] w-full overflow-hidden laptop:absolute laptop:top-[2156.11px] laptop:left-[756.81px] laptop:aspect-auto laptop:h-[554.78px] laptop:w-[481.96px] desktop:top-[2096.11px] desktop:left-[847.04px]">
            <Image src="/images/advantages-image113.png" alt="" fill className="object-cover" />
          </div>
          <div className="relative aspect-[328/415] w-full overflow-hidden laptop:absolute laptop:top-[2226.34px] laptop:left-1/2 laptop:aspect-auto laptop:h-[415.11px] laptop:w-[327.94px] laptop:-translate-x-1/2 desktop:top-[2166.34px]">
            <Image src="/images/advantages-image74.png" alt="" fill className="object-cover" />
          </div>
        </div>

        <FeatureNote
          title="Грамотные лекала"
          description="Сложные анатомические лекала, адаптированные под европейский и азиатский типы конституции. Пальто мягко выстраивает силуэт, держит линию плеча и дарит свободу маневра."
          className="w-full max-w-[420px] laptop:absolute laptop:top-[2341px] laptop:left-[calc(50%-418.27px)] laptop:w-[361px] laptop:max-w-none laptop:-translate-x-1/2 desktop:top-[2281px] desktop:left-[calc(50%-455.03px)]"
        />
        <FeatureNote
          title="Тепло до первых морозов"
          description="Из-за короткого межсезонья наших широт, для пальто создали премиальное утепление. Защита до первых заморозков без утяжеления силуэта."
          className="w-full max-w-[420px] laptop:absolute laptop:top-[2789.53px] laptop:left-[calc(50%-218.23px)] laptop:w-[363px] laptop:max-w-none laptop:-translate-x-1/2 desktop:top-[2759.53px] desktop:left-[calc(50%-208.47px)]"
        />

        {/* Cashmere spread — full-bleed backdrop, grows with the viewport past the fixed canvas */}
        <div className="absolute bottom-0 left-1/2 h-[220px] w-screen -translate-x-1/2 overflow-hidden tablet:h-[320px] laptop:aspect-[1512/701.1243286132812] laptop:h-auto">
          <Image
            src="/images/about-cashmere-goats.png"
            alt="Козочки, кашемир"
            fill
            className="object-cover object-bottom"
          />
        </div>

        <div className="flex w-full flex-col items-center gap-6 pb-14 tablet:gap-8 tablet:pb-20 laptop:contents">
          <p className="text-espresso font-sans w-full max-w-[380px] text-center text-base leading-[1.5] font-normal tablet:text-lg laptop:absolute laptop:top-[3258.57px] laptop:left-[calc(50%-600px)] laptop:w-[388.24px] laptop:max-w-none laptop:text-left laptop:leading-normal desktop:top-[3272.62px] desktop:left-[calc(50%-636px)]">
            Сочетание 10% кашемира и 90% шерсти мериноса. Ткань обладает благородным матовым
            лоском, струится в движении и дарит комфортного тепла.
          </p>

          {/* The vector graphic has a deliberate gap at its center — the coat photo overlaps into it, same as the laptop/desktop canvas */}
          <div className="relative flex w-full flex-col items-center laptop:contents">
            <div className="w-full max-w-[460px] laptop:contents">
              <div className="relative aspect-[1177.54/327.35] w-full laptop:absolute laptop:top-[3498.67px] laptop:left-[61.23px] laptop:aspect-auto laptop:h-[327.35px] laptop:w-[1177.54px] desktop:top-[3484.42px] desktop:left-[74.21px] desktop:h-[355.83px] desktop:w-[1385.25px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/advantages-cashmere-vector.svg" alt="Нежный кашемир" className="size-full" />
              </div>
            </div>
            <div className="relative z-10 -mt-[68px] aspect-[365/848] w-full max-w-[210px] overflow-hidden tablet:-mt-[95px] tablet:max-w-[250px] laptop:absolute laptop:top-[3227.89px] laptop:left-1/2 laptop:z-auto laptop:mt-0 laptop:aspect-auto laptop:h-[848.11px] laptop:w-[365.11px] laptop:max-w-none laptop:-translate-x-1/2 desktop:top-[3155.87px] desktop:h-[920.13px] desktop:w-[396.11px]">
              <Image
                src="/images/about-coat-grege.png"
                alt="Пальто грейдж с поясом-сумкой"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <p className="text-espresso font-sans w-full max-w-[380px] text-center text-base leading-[1.5] font-normal tablet:text-lg laptop:absolute laptop:top-[3933.49px] laptop:left-[calc(50%+237.47px)] laptop:w-[361.3px] laptop:max-w-none laptop:text-left laptop:leading-normal desktop:top-[3939.06px] desktop:left-[calc(50%+292.26px)] desktop:w-[414.48px]">
            Кашемир ценят за редкое сочетание невесомости, тепла и мягкости, которую невозможно
            сымитировать искусственно.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
