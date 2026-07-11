import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import { ServiceRow } from "./ServiceRow";
import { Reveal } from "./ui/Reveal";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative h-[2187px] w-[1280px] mt-[200px] desktop:h-[2479px] desktop:w-[1512px] desktop:mt-[141px]"
    >
      <Reveal className="relative h-[2187px] w-[1280px] desktop:h-[2479px] desktop:w-[1512px]">
        <SectionHeading
          eyebrow="Услуги"
          title="Три направления ремесла"
          className="absolute top-0 left-1/2 w-[1213.47px] -translate-x-1/2 desktop:left-[150.27px] desktop:translate-x-0"
        />

        <ServiceRow
          index="01"
          title="Дизайнерский перешив шубы"
          description="Новая жизнь для дорого сердцу изделия. Трансформируем устаревшие фасоны в актуальные, легкие и современные изделия, сохраняя всю ценность вашего меха."
          className="top-[309px] left-[calc(50%-322px)] w-[516px] -translate-x-1/2 desktop:top-[349px] desktop:left-[122.47px] desktop:translate-x-0"
        />
        <div className="absolute overflow-hidden top-[209.33px] left-[calc(50%+318px)] w-[291.36px] h-[589.33px] -translate-x-1/2 desktop:top-[204.72px] desktop:left-[972.57px] desktop:w-[325.86px] desktop:h-[659.12px] desktop:translate-x-0">
          <Image
            src="/images/service-restyle.png"
            alt="Дизайнерский перешив шубы"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute overflow-hidden top-[915.87px] left-[calc(50%-318px)] w-[636px] h-[636px] -translate-x-1/2 desktop:top-[998.87px] desktop:left-[16px] desktop:w-[740px] desktop:h-[740px] desktop:translate-x-0">
          <Image
            src="/images/service-double-face.png"
            alt="Пошив премиального пальто double-face"
            fill
            className="-scale-y-100 rotate-180 object-cover"
          />
        </div>
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
          className="top-[1079.37px] left-[calc(50%+317.5px)] w-[515px] -translate-x-1/2 desktop:top-[1212.87px] desktop:left-[878px] desktop:translate-x-0"
        />

        <ServiceRow
          index="03"
          title="Пошив из меха соболя – мягкого золота"
          description="Соболь ценился во все времена — настоящий люкс. От закупа сырья на аукционе и выделки до искусного пошива изделия на несколько миллионов."
          className="top-[1715.37px] left-[calc(50%-322.5px)] w-[515px] -translate-x-1/2 desktop:top-[1952.87px] desktop:left-[122px] desktop:translate-x-0"
        />
        <div className="absolute overflow-hidden top-[1551.87px] left-[calc(50%+318px)] w-[636px] h-[636px] -translate-x-1/2 desktop:top-[1738.87px] desktop:left-[757px] desktop:w-[740px] desktop:h-[740px] desktop:translate-x-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/service-sable.png"
            alt="Пошив из меха соболя"
            className="absolute object-cover"
            style={{ top: "-20.71%", left: 0, width: "104.03%", height: "138.71%" }}
          />
        </div>
      </Reveal>
    </section>
  );
}
