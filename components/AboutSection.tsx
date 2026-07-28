import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full px-5 mt-24 tablet:px-8 tablet:mt-[140px] laptop:h-[1345px] laptop:w-[1280px] laptop:px-0 laptop:mt-[200px] desktop:h-[1465px] desktop:w-[1512px] desktop:mt-[240px]"
    >
      <Reveal className="relative flex flex-col items-center gap-14 tablet:gap-16 laptop:block laptop:h-[1345px] laptop:w-[1280px] desktop:h-[1465px] desktop:w-[1512px]">
        {/* Laptop/desktop only: original full-canvas rotated paper backdrop */}
        <div className="hidden laptop:absolute laptop:top-[201.12px] laptop:left-[calc(50%-11.58px)] laptop:flex laptop:h-[1122.85px] laptop:w-[1389.98px] laptop:-translate-x-1/2 laptop:items-center laptop:justify-center desktop:top-[193.98px] desktop:h-[1264.91px] desktop:w-[1565.84px]">
          <div className="relative h-[1061.75px] w-[1342.19px] rotate-[2.66deg] mix-blend-multiply desktop:h-[1196.08px] desktop:w-[1512px]">
            <Image src="/images/about-paper-texture.png" alt="" fill className="object-cover" />
          </div>
        </div>

        <SectionHeading
          eyebrow="О нас"
          title="История одного призвания"
          className="w-full laptop:absolute laptop:top-0 laptop:left-1/2 laptop:w-[577.8px] laptop:-translate-x-1/2"
        />

        {/* Hidden on mobile — the same ribbon is already baked into the founder collage PNG below */}
        <div className="relative hidden aspect-[315/250] w-full max-w-[280px] overflow-hidden tablet:block laptop:absolute laptop:top-[141.03px] laptop:left-[821.85px] laptop:aspect-auto laptop:h-[250.18px] laptop:w-[315.42px] laptop:max-w-none desktop:top-[117.8px] desktop:left-[961px] desktop:h-[370px] desktop:w-[466.5px]">
          <Image src="/images/about-ribbon-pin.png" alt="" fill className="object-cover" />
        </div>

        {/* Mobile: a single flattened collage exported straight from the Figma block (same photos as
            desktop, just recomposed) — CSS could not keep three independently-rotated, absolutely
            positioned photos locked together across arbitrary viewport widths, which was the cause
            of the "jumping" layout. Tablet keeps its own scrapbook overlap; laptop/desktop untouched. */}
        <div className="relative left-1/2 aspect-[413/638] w-screen -translate-x-1/2 tablet:hidden">
          <Image
            src="/images/about-founder-collage-mobile.png"
            alt="Аюна, основатель Саган Зам — архивные фото ателье"
            fill
            className="object-contain"
          />
        </div>

        {/* Photo pair — scaled-down scrapbook overlap at tablet, original rotated collage at laptop/desktop */}
        <div className="relative hidden w-full flex-col items-center gap-8 tablet:block tablet:h-[420px] laptop:contents">
          <div className="hidden tablet:absolute tablet:top-0 tablet:left-1/2 tablet:block tablet:h-[380px] tablet:w-[440px] tablet:-translate-x-1/2 tablet:overflow-hidden tablet:rounded-sm tablet:mix-blend-multiply laptop:hidden">
            <Image src="/images/about-paper-texture.png" alt="" fill className="object-cover" />
          </div>
          <div className="relative aspect-[468/550] w-full max-w-[280px] overflow-hidden tablet:absolute tablet:top-[20px] tablet:left-[150px] tablet:aspect-auto tablet:h-[340px] tablet:w-[290px] tablet:max-w-none tablet:rotate-[-6deg] laptop:top-[668.31px] laptop:left-[calc(50%-363.06px)] laptop:h-[550.14px] laptop:w-[468.21px] laptop:-translate-x-1/2 laptop:rotate-[-9.66deg] desktop:top-[721.59px] desktop:left-[calc(50%-437.08px)] desktop:h-[634.64px] desktop:w-[540.12px]">
            <Image src="/images/about-founder.png" alt="Аюна, основатель Саган Зам" fill className="object-cover" />
          </div>
          <div className="relative z-10 aspect-[226/265] w-[150px] self-start overflow-hidden shadow-[4px_4px_4px_0px_rgba(0,0,0,0.2)] tablet:absolute tablet:top-0 tablet:left-[40px] tablet:z-10 tablet:aspect-auto tablet:h-[190px] tablet:w-[162px] tablet:rotate-[9deg] laptop:top-[304.53px] laptop:left-[calc(50%+20.7px)] laptop:h-[265.17px] laptop:w-[225.68px] laptop:-translate-x-1/2 laptop:rotate-[-12.2deg] desktop:top-[345.1px] desktop:h-[346.94px] desktop:w-[295.27px]">
            <Image src="/images/about-archive.png" alt="Из архива Саган Зам" fill className="object-cover" />
          </div>
          {/* Pin accent — tablet-only flourish on the overlap; laptop/desktop show the two original pins below */}
          <div className="hidden tablet:absolute tablet:top-[160px] tablet:left-[95px] tablet:z-20 tablet:block tablet:h-[70px] tablet:w-[68px] laptop:hidden">
            <div className="relative size-full rotate-[40deg]">
              <Image src="/images/about-pin.png" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>

        <p className="text-espresso font-sans w-full max-w-[420px] text-center text-base leading-[1.55] font-normal whitespace-pre-wrap tablet:max-w-[540px] tablet:text-lg laptop:absolute laptop:top-[272.2px] laptop:left-[calc(50%-600px)] laptop:w-[414.48px] laptop:max-w-none laptop:text-left laptop:leading-normal desktop:top-[336.1px]">
          Роман с этим ремеслом начался еще в раннем детстве, когда я шила платья куклам, а потом
          братишке. После поступления в медицинский колледж, мне встретились яркие нарядные
          девчонки из швейного техникума. Поэтому в тайне от родителей, я пошла учиться на
          дизайнера-конструктора.
          {"\n\n"}
          Учеба, работа и открытие первого ателье в 2004 году. Со временем эта страсть выросла в
          профессиональную студию.
        </p>

        <p className="text-espresso font-sans w-full max-w-[420px] text-center text-base leading-[1.55] font-normal whitespace-pre-wrap tablet:max-w-[540px] tablet:text-lg laptop:absolute laptop:top-[442.42px] laptop:left-[calc(50%+226.92px)] laptop:w-[369.13px] laptop:max-w-none laptop:text-left laptop:leading-normal desktop:top-[527.61px] desktop:left-[calc(50%+238.37px)]">
          Сегодня я отшиваю премиальные меховые изделия для замечатльных успешных женщин. Лично
          отбираю соболя на мировых аукционах как сертифицированный брокер.
          {"\n\n"}
          Я постоянно учусь, объезжаю международные выставки, чтобы привозить вам лучшие
          технологии пошива и ценные ткани.
        </p>

        <div className="relative aspect-[474/107] w-full max-w-[380px] tablet:max-w-[460px] laptop:absolute laptop:top-[731.39px] laptop:left-[541.31px] laptop:aspect-auto laptop:h-[107.24px] laptop:w-[474.4px] laptop:max-w-none desktop:top-[792.89px] desktop:left-[616.6px] desktop:h-[145.83px] desktop:w-[645.08px]">
          <Image src="/images/about-delo-dushi.svg" alt="Дело души" fill />
        </div>

        <div className="relative aspect-[434/362] w-full max-w-[380px] overflow-hidden tablet:max-w-[460px] laptop:absolute laptop:top-[682.71px] laptop:left-[920.21px] laptop:aspect-auto laptop:h-[362px] laptop:w-[434.14px] laptop:max-w-none desktop:top-[732.5px] desktop:left-[1090.66px] desktop:h-[434px] desktop:w-[520.5px]">
          <Image src="/images/about-illustration-sewing.png" alt="" fill className="object-cover" />
        </div>

        <p className="text-espresso font-sans w-full max-w-[420px] text-center text-base leading-[1.55] font-normal whitespace-pre-wrap tablet:max-w-[540px] tablet:text-lg laptop:absolute laptop:top-[958.61px] laptop:left-[calc(50%-11.58px)] laptop:w-[387.29px] laptop:max-w-none laptop:text-left laptop:leading-normal desktop:top-[1060.73px] desktop:left-[calc(50%-47.97px)] desktop:w-[355.53px]">
          С клиентками выбираю силуэты, которые безупречно раскроют природную стать.
          {"\n\n"}
          Я верю, что изделие, созданное руками наполненными безусловной любовью к делу – имеет
          особую энергетику. Это не просто статусная вещь в гардеробе. Это личный талисман,
          который будет вдохновлять, греть не только тело, но и душу.
        </p>

        <p className="text-espresso font-sans w-full text-center text-base leading-normal font-medium tablet:text-lg laptop:absolute laptop:top-[1233.95px] laptop:left-[1005.37px] laptop:w-[183.42px] laptop:text-left laptop:whitespace-nowrap desktop:top-[1334.73px] desktop:left-[1107.35px] desktop:w-auto">
          Аюна, основатель Саган Зам
        </p>

        {/* Laptop/desktop only: two rotated pins, reused asset */}
        <div className="hidden laptop:absolute laptop:top-[272.2px] laptop:left-[calc(50%+64.85px)] laptop:flex laptop:h-[90.68px] laptop:w-[88.29px] laptop:-translate-x-1/2 laptop:items-center laptop:justify-center desktop:top-[302.8px] desktop:left-[calc(50%+46.18px)] desktop:h-[118.64px] desktop:w-[115.52px]">
          <div className="relative h-[48.56px] w-[78.2px] rotate-[48.26deg] desktop:h-[63.54px] desktop:w-[102.31px]">
            <Image src="/images/about-pin.png" alt="" fill className="object-cover" />
          </div>
        </div>
        <div className="hidden laptop:absolute laptop:top-[689.01px] laptop:left-[calc(50%-542.48px)] laptop:flex laptop:h-[81.1px] laptop:w-[101.84px] laptop:-translate-x-1/2 laptop:items-center laptop:justify-center desktop:top-[745.48px] desktop:left-[calc(50%-644.05px)] desktop:h-[93.56px] desktop:w-[117.48px]">
          <div className="relative h-[55.08px] w-[88.68px] rotate-[160.87deg] scale-y-[-1] desktop:h-[63.54px] desktop:w-[102.31px]">
            <Image src="/images/about-pin.png" alt="" fill className="object-cover" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
