import Image from "next/image";
import { IconLink } from "./ui/IconLink";
import { ApplicationForm } from "./ApplicationForm";
import { Reveal } from "./ui/Reveal";

const quickContactTextClass = "font-sans text-[20px] leading-[1.2] font-normal tracking-[-0.4px]";

export function ConsultationSection() {
  return (
    <section
      id="consultation"
      className="relative w-full mt-24 tablet:mt-[140px] laptop:h-[640px] laptop:w-[1280px] laptop:px-0 laptop:mt-[200px] desktop:h-[740px] desktop:w-[1512px] desktop:mt-[240px]"
    >
      <Reveal className="relative flex flex-col laptop:block laptop:h-[640px] laptop:w-[1280px] desktop:h-[740px] desktop:w-[1512px]">
        {/* Mobile/tablet — dark card per Figma: no photo, centered copy, form, then contacts right below it.
            Continues straight into the Footer's own dark card with no gap (see Footer.tsx). */}
        <div className="bg-espresso text-cream flex w-full flex-col items-center gap-10 px-5 py-20 tablet:gap-12 tablet:px-8 tablet:py-24 laptop:hidden">
          <div className="flex w-full flex-col items-center gap-4 text-center tablet:gap-5">
            <p className="font-display text-[22px] leading-[0.9] font-medium tracking-[-0.66px] italic tablet:text-[26px] tablet:tracking-[-0.7px]">
              Остались вопросы?
            </p>
            <p className="font-sans text-[32px] leading-[1.1] font-light tablet:text-[38px] tablet:tracking-[-1.2px]">
              Получите консультацию с дизайнером
            </p>
          </div>

          <ApplicationForm className="border-taupe-light w-full max-w-[480px] border" />

          <div className="flex w-full flex-col items-center gap-3">
            <IconLink
              icon="telegram"
              label="Telegram: @saganzam"
              href="https://t.me/saganzam"
              className="text-cream"
              textClassName={quickContactTextClass}
            />
            <IconLink
              icon="phone"
              label="+7 914 985 62-58"
              href="tel:+79149856258"
              className="text-cream"
              textClassName={quickContactTextClass}
            />
            <IconLink
              icon="place"
              label="Улан-Удэ, пр-т 50-летия октября, 21"
              href="https://maps.google.com/?q=Улан-Удэ, пр-т 50-летия октября, 21"
              align="start"
              className="text-cream text-left"
              textClassName="font-sans text-base leading-[1.2] font-normal"
            />
          </div>
        </div>

        {/* laptop/desktop: original layout, untouched */}
        <div className="hidden laptop:contents">
          <div className="text-espresso flex w-full max-w-[480px] flex-col items-start gap-10 laptop:absolute laptop:top-1/2 laptop:left-[40px] laptop:w-[516px] laptop:max-w-none laptop:-translate-y-1/2 desktop:left-[calc(50%-376.03px)] desktop:-translate-x-1/2">
            <div className="flex w-full flex-col items-start gap-3">
              <p className="font-display text-[32px] leading-[0.9] font-medium tracking-[-0.96px] italic">
                Остались вопросы?
              </p>
              <p className="font-sans text-[48px] leading-[1.1] font-light">Получите консультацию с дизайнером</p>
              <p className="font-sans text-lg leading-normal font-normal">
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
          <div className="relative aspect-square overflow-hidden laptop:absolute laptop:top-1/2 laptop:right-0 laptop:h-[640px] laptop:w-[640px] laptop:-translate-y-1/2 desktop:hidden">
            <Image src="/images/laptop-consultation-photo.png" alt="" fill className="object-cover" />
          </div>
          <div className="absolute top-0 left-[calc(50%+370.5px)] hidden h-[740px] w-[740px] -translate-x-1/2 bg-[#d9d9d9] desktop:block" />

          <ApplicationForm className="laptop:absolute laptop:top-1/2 laptop:right-[60px] laptop:w-[520px] laptop:-translate-y-1/2 desktop:top-[140px] desktop:left-[867px] desktop:translate-y-0 desktop:right-auto" />
        </div>
      </Reveal>
    </section>
  );
}
