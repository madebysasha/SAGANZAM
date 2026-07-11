import Image from "next/image";
import { IconLink } from "./ui/IconLink";
import { ApplicationForm } from "./ApplicationForm";
import { Reveal } from "./ui/Reveal";

export function ConsultationSection() {
  return (
    <section
      id="consultation"
      className="relative h-[640px] w-[1280px] mt-[200px] desktop:h-[740px] desktop:w-[1512px] desktop:mt-[240px]"
    >
      <Reveal className="relative h-[640px] w-[1280px] desktop:h-[740px] desktop:w-[1512px]">
        <div className="text-espresso absolute top-1/2 left-[40px] flex w-[516px] -translate-y-1/2 flex-col items-start gap-16 desktop:left-[calc(50%-376.03px)] desktop:-translate-x-1/2">
          <div className="flex w-full flex-col items-start gap-4">
            <p className="font-display text-[32px] leading-[0.9] font-medium tracking-[-0.96px] italic">
              Остались вопросы?
            </p>
            <p className="font-sans text-[48px] leading-[1.1] font-light">
              Получите консультацию с дизайнером
            </p>
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
        <div className="absolute top-1/2 right-0 h-[640px] w-[640px] -translate-y-1/2 overflow-hidden desktop:hidden">
          <Image src="/images/laptop-consultation-photo.png" alt="" fill className="object-cover" />
        </div>
        <div className="absolute top-0 left-[calc(50%+370.5px)] hidden h-[740px] w-[740px] -translate-x-1/2 bg-[#d9d9d9] desktop:block" />

        <ApplicationForm className="absolute top-1/2 right-[60px] w-[520px] -translate-y-1/2 desktop:top-[140px] desktop:left-[867px] desktop:translate-y-0 desktop:right-auto" />
      </Reveal>
    </section>
  );
}
