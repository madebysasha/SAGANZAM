import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative h-[1345px] w-[1280px] mt-[200px] desktop:h-[1465px] desktop:w-[1512px] desktop:mt-[240px]"
    >
      <Reveal className="relative h-[1345px] w-[1280px] desktop:h-[1465px] desktop:w-[1512px]">
        {/* Rotated paper backdrop */}
        <div className="absolute top-[201.12px] left-[calc(50%-11.58px)] flex h-[1122.85px] w-[1389.98px] -translate-x-1/2 items-center justify-center desktop:top-[193.98px] desktop:h-[1264.91px] desktop:w-[1565.84px]">
          <div className="relative h-[1061.75px] w-[1342.19px] rotate-[2.66deg] mix-blend-multiply desktop:h-[1196.08px] desktop:w-[1512px]">
            <Image src="/images/about-paper-texture.png" alt="" fill className="object-cover" />
          </div>
        </div>

        <div className="absolute top-[731.39px] left-[541.31px] h-[107.24px] w-[474.4px] desktop:top-[792.89px] desktop:left-[616.6px] desktop:h-[145.83px] desktop:w-[645.08px]">
          <Image src="/images/about-delo-dushi.svg" alt="Дело души" fill />
        </div>

        <p className="text-espresso font-sans absolute top-[442.42px] left-[calc(50%+226.92px)] w-[369.13px] text-lg leading-normal font-normal whitespace-pre-wrap desktop:top-[527.61px] desktop:left-[calc(50%+238.37px)]">
          Сегодня я отшиваю премиальные меховые изделия для замечатльных успешных женщин. Лично
          отбираю соболя на мировых аукционах как сертифицированный брокер.
          {"\n\n"}
          Я постоянно учусь, объезжаю международные выставки, чтобы привозить вам лучшие
          технологии пошива и ценные ткани.
        </p>
        <p className="text-espresso font-sans absolute top-[272.2px] left-[calc(50%-600px)] w-[414.48px] text-lg leading-normal font-normal whitespace-pre-wrap desktop:top-[336.1px]">
          Роман с этим ремеслом начался еще в раннем детстве, когда я шила платья куклам, а потом
          братишке. После поступления в медицинский колледж, мне встретились яркие нарядные
          девчонки из швейного техникума. Поэтому в тайне от родителей, я пошла учиться на
          дизайнера-конструктора.
          {"\n\n"}
          Учеба, работа и открытие первого ателье в 2004 году. Со временем эта страсть выросла в
          профессиональную студию.
        </p>
        <p className="text-espresso font-sans absolute top-[958.61px] left-[calc(50%-11.58px)] w-[387.29px] text-lg leading-normal font-normal whitespace-pre-wrap desktop:top-[1060.73px] desktop:left-[calc(50%-47.97px)] desktop:w-[355.53px]">
          С клиентками выбираю силуэты, которые безупречно раскроют природную стать.
          {"\n\n"}
          Я верю, что изделие, созданное руками наполненными безусловной любовью к делу – имеет
          особую энергетику. Это не просто статусная вещь в гардеробе. Это личный талисман,
          который будет вдохновлять, греть не только тело, но и душу.
        </p>
        <p className="text-espresso font-sans absolute top-[1233.95px] left-[1005.37px] w-[183.42px] text-lg leading-normal font-medium whitespace-nowrap desktop:top-[1334.73px] desktop:left-[1107.35px] desktop:w-auto">
          Аюна, основатель Саган Зам
        </p>

        {/* Аюна, основатель */}
        <div className="absolute top-[668.31px] left-[calc(50%-363.06px)] flex h-[620.9px] w-[553.87px] -translate-x-1/2 items-center justify-center desktop:top-[721.59px] desktop:left-[calc(50%-437.08px)] desktop:h-[716.26px] desktop:w-[638.94px]">
          <div className="relative h-[550.14px] w-[468.21px] rotate-[-9.66deg] desktop:h-[634.64px] desktop:w-[540.12px]">
            <Image src="/images/about-founder.png" alt="Аюна, основатель Саган Зам" fill className="object-cover" />
          </div>
        </div>

        {/* Аюна, архив */}
        <div className="absolute top-[304.53px] left-[calc(50%+20.7px)] flex h-[306.89px] w-[276.63px] -translate-x-1/2 items-center justify-center desktop:top-[345.1px] desktop:left-[calc(50%-11.58px)] desktop:h-[401.51px] desktop:w-[361.93px]">
          <div className="relative h-[265.17px] w-[225.68px] rotate-[-12.2deg] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.2)] desktop:h-[346.94px] desktop:w-[295.27px]">
            <Image src="/images/about-archive.png" alt="Из архива Саган Зам" fill className="object-cover" />
          </div>
        </div>

        {/* Pin, reused twice */}
        <div className="absolute top-[272.2px] left-[calc(50%+64.85px)] flex h-[90.68px] w-[88.29px] -translate-x-1/2 items-center justify-center desktop:top-[302.8px] desktop:left-[calc(50%+46.18px)] desktop:h-[118.64px] desktop:w-[115.52px]">
          <div className="relative h-[48.56px] w-[78.2px] rotate-[48.26deg] desktop:h-[63.54px] desktop:w-[102.31px]">
            <Image src="/images/about-pin.png" alt="" fill className="object-cover" />
          </div>
        </div>
        <div className="absolute top-[689.01px] left-[calc(50%-542.48px)] flex h-[81.1px] w-[101.84px] -translate-x-1/2 items-center justify-center desktop:top-[745.48px] desktop:left-[calc(50%-644.05px)] desktop:h-[93.56px] desktop:w-[117.48px]">
          <div className="relative h-[55.08px] w-[88.68px] rotate-[160.87deg] scale-y-[-1] desktop:h-[63.54px] desktop:w-[102.31px]">
            <Image src="/images/about-pin.png" alt="" fill className="object-cover" />
          </div>
        </div>

        <SectionHeading
          eyebrow="О нас"
          title="История одного призвания"
          className="absolute top-0 left-1/2 w-[577.8px] -translate-x-1/2"
        />

        <div className="absolute top-[141.03px] left-[821.85px] h-[250.18px] w-[315.42px] overflow-hidden desktop:top-[117.8px] desktop:left-[961px] desktop:h-[370px] desktop:w-[466.5px]">
          <Image src="/images/about-ribbon-pin.png" alt="Лента с иглой" fill className="object-cover" />
        </div>
        <div className="absolute top-[682.71px] left-[920.21px] h-[362px] w-[434.14px] overflow-hidden desktop:top-[732.5px] desktop:left-[1090.66px] desktop:h-[434px] desktop:w-[520.5px]">
          <Image src="/images/about-illustration-sewing.png" alt="" fill className="object-cover" />
        </div>
      </Reveal>
    </section>
  );
}
