import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import { FeatureNote } from "./ui/FeatureNote";
import { Reveal } from "./ui/Reveal";

export function CoatAdvantagesSection() {
  return (
    <section
      id="advantages"
      className="relative h-[4076px] w-[1280px] mt-[200px] desktop:w-[1512px] desktop:mt-[240px]"
    >
      <Reveal className="relative h-[4076px] w-[1280px] desktop:w-[1512px]">
        <div className="text-espresso absolute top-0 left-1/2 flex w-[927px] -translate-x-1/2 flex-col items-center gap-6 text-center desktop:w-[1213.47px]">
          <p className="font-display text-[32px] leading-[0.9] font-medium tracking-[-0.96px] italic">
            Философия
          </p>
          <p className="font-sans text-[52px] leading-[1.1] font-normal tracking-[-1.56px] uppercase">
            Одежда веками была визитной карточкой. Но дороже впечатления —{" "}
            <span className="font-display text-[56px] italic">самоощущение</span>: прямая
            осанка и уверенность, когда вы чувствуете себя иначе
          </p>
        </div>

        <div className="absolute top-[366px] left-1/2 h-[720.43px] w-[640px] -translate-x-1/2 overflow-hidden">
          <Image src="/images/advantages-philosophy.png" alt="" fill className="object-cover" />
        </div>
        <p className="text-espresso font-sans absolute top-[475.82px] left-[794px] w-[414.48px] text-lg leading-normal font-medium desktop:left-[966.5px]">
          Мы годами разрабатывали модели премиальных пальто и осознанно держим кутюрный, штучный
          объем производства, формируя закрытый круг владелиц.
        </p>

        {/* Group 6: closed seam / double-sided fabric comparison — real photos at both breakpoints */}
        <div className="absolute top-[1546.34px] left-[calc(50%+25.31px)] h-[420px] w-[420px] -translate-x-1/2 overflow-hidden desktop:left-1/2">
          <Image src="/images/advantages-closed-seam.png" alt="Закрытый шов" fill className="object-cover" />
        </div>
        <p className="absolute top-[1743.61px] left-[calc(50%-41.49px)] w-[133.61px] -translate-x-1/2 font-sans text-lg leading-normal font-medium text-[#ede9e0] desktop:left-[calc(50%-66.8px)]">
          закрытый шов
        </p>

        <div className="absolute top-[1546.34px] left-[calc(50%-399.73px)] h-[420px] w-[398.08px] -translate-x-1/2 overflow-hidden desktop:left-[calc(50%-426px)] desktop:w-[420px]">
          <Image src="/images/advantages-double-sided.png" alt="Двусторонняя ткань" fill className="object-bottom object-cover" />
        </div>
        <p className="absolute top-[1743.84px] left-[calc(50%-373.39px)] w-[158.29px] -translate-x-1/2 font-sans text-lg leading-normal font-medium whitespace-nowrap text-[#ede9e0] desktop:left-[calc(50%-398.21px)] desktop:w-auto">
          двустороння ткань
        </p>

        <FeatureNote
          title="Метод Double-Face"
          description="Закрытые швы без подклада. Ювелирная обработка, при которой внутренняя сторона изделия столь же совершенна, как и лицевая."
          className="absolute top-[1688.44px] left-[calc(50%+434.8px)] w-[327.95px] -translate-x-1/2 desktop:left-[calc(50%+454.47px)] desktop:w-[346px]"
        />

        <SectionHeading
          eyebrow="Анатомия качества"
          title="Безупречно со всех сторон"
          description="Кутюрный, штучный объём производства. Мы осознанно формируем закрытый круг владелиц — каждая модель отшивается по фигуре."
          className="absolute top-[1246.34px] left-1/2 w-[800.83px] -translate-x-1/2"
        />

        <FeatureNote
          title="Грамотные лекала"
          description="Сложные анатомические лекала, адаптированные под европейский и азиатский типы конституции. Пальто мягко выстраивает силуэт, держит линию плеча и дарит свободу маневра."
          className="absolute top-[2341px] left-[calc(50%-418.27px)] w-[361px] -translate-x-1/2 desktop:top-[2281px] desktop:left-[calc(50%-455.03px)]"
        />
        <FeatureNote
          title="Тепло до первых морозов"
          description="Из-за короткого межсезонья наших широт, для пальто создали премиальное утепление. Защита до первых заморозков без утяжеления силуэта."
          className="absolute top-[2789.53px] left-[calc(50%-218.23px)] w-[363px] -translate-x-1/2 desktop:top-[2759.53px] desktop:left-[calc(50%-208.47px)]"
        />

        <div className="absolute top-[2156.11px] left-[756.81px] h-[554.78px] w-[481.96px] overflow-hidden desktop:top-[2096.11px] desktop:left-[847.04px]">
          <Image src="/images/advantages-image113.png" alt="" fill className="object-cover" />
        </div>
        <div className="absolute top-[2226.34px] left-1/2 h-[415.11px] w-[327.94px] -translate-x-1/2 overflow-hidden desktop:top-[2166.34px]">
          <Image src="/images/advantages-image74.png" alt="" fill className="object-cover" />
        </div>

        {/* Cashmere spread — full-bleed backdrop, grows with the viewport past the fixed canvas */}
        <div
          className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2 overflow-hidden"
          style={{ aspectRatio: "1512 / 701.1243286132812" }}
        >
          <Image src="/images/about-cashmere-goats.png" alt="Козочки, кашемир" fill className="object-cover object-bottom" />
        </div>

        <div className="absolute top-[3498.67px] left-[61.23px] h-[327.35px] w-[1177.54px] desktop:top-[3484.42px] desktop:left-[74.21px] desktop:h-[355.83px] desktop:w-[1385.25px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/advantages-cashmere-vector.svg" alt="Нежный кашемир" className="size-full" />
        </div>

        <div className="absolute top-[3227.89px] left-1/2 h-[848.11px] w-[365.11px] -translate-x-1/2 overflow-hidden desktop:top-[3155.87px] desktop:h-[920.13px] desktop:w-[396.11px]">
          <Image src="/images/about-coat-grege.png" alt="Пальто грейдж с поясом-сумкой" fill className="object-cover object-top" />
        </div>
        <p className="text-espresso font-sans absolute top-[3258.57px] left-[calc(50%-600px)] w-[388.24px] text-lg leading-normal font-normal desktop:top-[3272.62px] desktop:left-[calc(50%-636px)]">
          Сочетание 10% кашемира и 90% шерсти мериноса. Ткань обладает благородным матовым
          лоском, струится в движении и дарит комфортного тепла.
        </p>
        <p className="text-espresso font-sans absolute top-[3933.49px] left-[calc(50%+237.47px)] w-[361.3px] text-lg leading-normal font-normal desktop:top-[3939.06px] desktop:left-[calc(50%+292.26px)] desktop:w-[414.48px]">
          Кашемир ценят за редкое сочетание невесомости, тепла и мягкости, которую невозможно
          сымитировать искусственно.
        </p>
      </Reveal>
    </section>
  );
}
