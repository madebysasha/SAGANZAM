import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

export function RemoteOrderSection() {
  return (
    <section
      id="delivery"
      className="relative h-[640px] w-[1280px] mt-[200px] desktop:h-[740px] desktop:w-[1512px] desktop:mt-[240px]"
    >
      <Reveal className="relative h-[640px] w-[1280px] desktop:h-[740px] desktop:w-[1512px]">
        <div className="text-espresso absolute top-1/2 left-[40px] flex w-[516px] -translate-y-1/2 flex-col items-start gap-6 desktop:left-[calc(50%-376.03px)] desktop:-translate-x-1/2">
          <div className="flex w-full flex-col items-start gap-4">
            <p className="font-display text-[32px] leading-[0.9] font-medium tracking-[-0.96px] italic">
              Онлайн-ателье
            </p>
            <p className="font-sans w-[425.86px] text-[36px] leading-[1.2] font-normal tracking-[-0.72px]">
              Доставляем по всей России
            </p>
          </div>
          <p className="font-sans text-lg leading-normal font-normal">
            Мы годами работаем дистанционно. Снятие мерок по простой инструкции, фото,
            индивидуальный подбор ткани и меха. готовое изделие приезжает к вам бережной
            доставкой.
          </p>
          <Button label="Получить консультацию" arrow={false} />
        </div>

        {/* Figma's photo slot here is still empty at both breakpoints — pending a real photo */}
        <div className="absolute top-1/2 left-[640px] h-[640px] w-[640px] -translate-y-1/2 bg-[#d9d9d9] desktop:left-[calc(50%+370.5px)] desktop:h-[740px] desktop:w-[740px] desktop:-translate-x-1/2" />
      </Reveal>
    </section>
  );
}
