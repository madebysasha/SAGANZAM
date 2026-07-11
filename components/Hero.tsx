import Image from "next/image";
import { Header } from "./Header";

export function Hero() {
  return (
    <section className="relative h-[927px] w-screen ml-[calc(50%-50vw)] overflow-hidden desktop:h-[1095px]">
      <Image
        src="/images/hero-background.png"
        alt="Пальто Nour Hammour, коллекция Fall Winter 25"
        fill
        priority
        className="object-cover"
      />

      <div className="relative mx-auto h-full w-[1280px] desktop:w-[1512px]">
        <Header />

        <p className="font-sans text-xl leading-normal font-normal text-white absolute top-[272.67px] left-[875.24px] w-[174px] desktop:left-[991.24px]">
          30 лет опыта
          <br />
          Ручная работа
          <br />
          Онлайн-примерка
        </p>

        <p className="font-sans text-xl leading-normal font-normal text-white absolute top-[498.87px] left-[1131.24px] w-[156.78px] desktop:left-[1247.24px]">
          Доставка по всей России
        </p>
      </div>
    </section>
  );
}
