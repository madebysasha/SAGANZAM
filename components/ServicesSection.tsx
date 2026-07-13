import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import { ServiceRow } from "./ServiceRow";
import { Reveal } from "./ui/Reveal";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full px-5 mt-16 tablet:px-8 tablet:mt-[88px] laptop:h-[2187px] laptop:w-[1280px] laptop:px-0 laptop:mt-[200px] desktop:h-[2479px] desktop:w-[1512px] desktop:mt-[141px]"
    >
      <Reveal className="relative flex flex-col items-center gap-16 tablet:gap-20 laptop:block laptop:h-[2187px] laptop:w-[1280px] desktop:h-[2479px] desktop:w-[1512px]">
        <SectionHeading
          eyebrow="Услуги"
          title="Три направления ремесла"
          className="w-full laptop:absolute laptop:top-0 laptop:left-1/2 laptop:w-[1213.47px] laptop:-translate-x-1/2 desktop:left-[150.27px] desktop:translate-x-0"
        />

        {/* Service 01 — text then image, reflow-in-place; laptop/desktop resume the original absolute canvas */}
        <div className="flex w-full flex-col items-center gap-8 tablet:gap-10 laptop:contents">
          <ServiceRow
            index="01"
            title="Дизайнерский перешив шубы"
            description="Новая жизнь для дорого сердцу изделия. Трансформируем устаревшие фасоны в актуальные, легкие и современные изделия, сохраняя всю ценность вашего меха."
            className="laptop:top-[309px] laptop:left-[calc(50%-322px)] laptop:w-[516px] laptop:-translate-x-1/2 desktop:top-[349px] desktop:left-[122.47px] desktop:translate-x-0"
          />
          <div className="relative w-full max-w-[420px] aspect-[291/589] overflow-hidden laptop:absolute laptop:top-[209.33px] laptop:left-[calc(50%+318px)] laptop:w-[291.36px] laptop:h-[589.33px] laptop:max-w-none laptop:-translate-x-1/2 desktop:top-[204.72px] desktop:left-[972.57px] desktop:w-[325.86px] desktop:h-[659.12px] desktop:translate-x-0">
            <Image
              src="/images/service-restyle.png"
              alt="Дизайнерский перешив шубы"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Service 02 */}
        <div className="flex w-full flex-col items-center gap-8 tablet:gap-10 laptop:contents">
          <ServiceRow
            index="02"
            title={
              <>
                Пошив премиального
                <br />
                пальто double-face
              </>
            }
            description="Жемчужина ателье. Роскошное пальто с кашемиром, безупречное с обеих сторон, щедро облагороженное натуральным мехом соболя, норки или каракуля."
            className="laptop:top-[1079.37px] laptop:left-[calc(50%+317.5px)] laptop:w-[515px] laptop:-translate-x-1/2 desktop:top-[1212.87px] desktop:left-[878px] desktop:translate-x-0"
          />
          <div className="relative w-full max-w-[480px] aspect-square overflow-hidden laptop:absolute laptop:top-[915.87px] laptop:left-[calc(50%-318px)] laptop:w-[636px] laptop:h-[636px] laptop:max-w-none laptop:-translate-x-1/2 desktop:top-[998.87px] desktop:left-[16px] desktop:w-[740px] desktop:h-[740px] desktop:translate-x-0">
            <Image
              src="/images/service-double-face.png"
              alt="Пошив премиального пальто double-face"
              fill
              className="-scale-y-100 rotate-180 object-cover"
            />
          </div>
        </div>

        {/* Service 03 */}
        <div className="flex w-full flex-col items-center gap-8 tablet:gap-10 laptop:contents">
          <ServiceRow
            index="03"
            title="Пошив из меха соболя – мягкого золота"
            description="Соболь ценился во все времена — настоящий люкс. От закупа сырья на аукционе и выделки до искусного пошива изделия на несколько миллионов."
            className="laptop:top-[1715.37px] laptop:left-[calc(50%-322.5px)] laptop:w-[515px] laptop:-translate-x-1/2 desktop:top-[1952.87px] desktop:left-[122px] desktop:translate-x-0"
          />
          <div className="relative w-full max-w-[480px] aspect-square overflow-hidden laptop:absolute laptop:top-[1551.87px] laptop:left-[calc(50%+318px)] laptop:w-[636px] laptop:h-[636px] laptop:max-w-none laptop:-translate-x-1/2 desktop:top-[1738.87px] desktop:left-[757px] desktop:w-[740px] desktop:h-[740px] desktop:translate-x-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/service-sable.png"
              alt="Пошив из меха соболя"
              className="absolute object-cover"
              style={{ top: "-20.71%", left: 0, width: "104.03%", height: "138.71%" }}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
