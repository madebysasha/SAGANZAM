import Image from "next/image";
import { IconLink } from "./ui/IconLink";
import { ApplicationForm } from "./ApplicationForm";
import { Reveal } from "./ui/Reveal";

export function ConsultationSection() {
  return (
    <section
      id="consultation"
      className="relative w-full px-5 mt-24 tablet:px-8 tablet:mt-[140px] laptop:h-[640px] laptop:w-[1280px] laptop:px-0 laptop:mt-[200px] desktop:h-[740px] desktop:w-[1512px] desktop:mt-[240px]"
    >
      <Reveal className="relative flex flex-col items-center gap-10 tablet:gap-12 laptop:block laptop:h-[640px] laptop:w-[1280px] desktop:h-[740px] desktop:w-[1512px]">
        <div className="text-espresso flex w-full max-w-[480px] flex-col items-start gap-10 tablet:gap-12 laptop:absolute laptop:top-1/2 laptop:left-[40px] laptop:w-[516px] laptop:max-w-none laptop:-translate-y-1/2 desktop:left-[calc(50%-376.03px)] desktop:-translate-x-1/2">
          <div className="flex w-full flex-col items-start gap-3 tablet:gap-4">
            <p className="font-display text-[20px] leading-[0.95] font-medium tracking-[-0.4px] italic tablet:text-[26px] tablet:tracking-[-0.7px] laptop:text-[32px] laptop:leading-[0.9] laptop:tracking-[-0.96px]">
              Остались вопросы?
            </p>
            <p className="font-sans text-[28px] leading-[1.2] font-light tablet:text-[36px] tablet:leading-[1.15] laptop:text-[48px] laptop:leading-[1.1]">
              Получите консультацию с дизайнером
            </p>
            <p className="font-sans text-[15px] leading-[1.55] font-normal tablet:text-[17px] tablet:leading-[1.45] laptop:text-lg laptop:leading-normal">
              Оставьте контакты, мы согласуем удобное время для онлайн-консультации и подбора
              изделия. Дизайнер поможет выбрать фасон, мех и продемонстрирует изделия.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <IconLink icon="telegram" label="Telegram: @saganzam" href="https://t.me/saganzam" />
            <IconLink icon="phone" label="+7 914 985 62-58" href="tel:+79149856258" />
            <IconLink
              icon="place"
              label="Улан-Удэ, пр-т 50-летия октября, 21"
              href="https://maps.google.com/?q=Улан-Удэ, пр-т 50-летия октября, 21"
            />
          </div>
        </div>

        {/* Real photo at laptop, placeholder at desktop (established separately) */}
        <div className="relative aspect-square w-full max-w-[480px] overflow-hidden laptop:absolute laptop:top-1/2 laptop:right-0 laptop:aspect-auto laptop:h-[640px] laptop:w-[640px] laptop:max-w-none laptop:-translate-y-1/2 desktop:hidden">
          <Image src="/images/laptop-consultation-photo.png" alt="" fill className="object-cover" />
        </div>
        <div className="absolute top-0 left-[calc(50%+370.5px)] hidden h-[740px] w-[740px] -translate-x-1/2 bg-[#d9d9d9] desktop:block" />

        <ApplicationForm className="w-full max-w-[480px] laptop:absolute laptop:top-1/2 laptop:right-[60px] laptop:w-[520px] laptop:max-w-none laptop:-translate-y-1/2 desktop:top-[140px] desktop:left-[867px] desktop:translate-y-0 desktop:right-auto" />
      </Reveal>
    </section>
  );
}
