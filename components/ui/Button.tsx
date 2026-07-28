"use client";

import Image from "next/image";
import { usePopup } from "../PopupProvider";

type ButtonProps = {
  label: string;
  icon?: boolean;
  arrow?: boolean;
  className?: string;
};

export function Button({ label, icon = false, arrow = true, className }: ButtonProps) {
  const { open } = usePopup();

  return (
    <button
      type="button"
      onClick={open}
      className={`border-espresso text-espresso group inline-flex shrink-0 cursor-pointer items-center justify-center gap-4 rounded-[60px] border px-[26px] py-[18px] transition-colors hover:bg-[#491a0a]/5 tablet:gap-4 tablet:px-6 tablet:py-2.5 ${className ?? ""}`}
    >
      <span className="flex shrink-0 items-center gap-3">
        {icon && (
          <Image
            src="/images/icon-telegram.svg"
            alt=""
            width={24}
            height={24}
            className="shrink-0"
          />
        )}
        <span className="font-sans text-base leading-[1.2] font-normal tracking-[-0.32px] whitespace-nowrap tablet:text-lg tablet:font-medium tablet:tracking-[-0.3px] laptop:text-xl laptop:tracking-[-0.4px]">
          {label}
        </span>
      </span>
      {arrow && (
        <Image
          src="/images/button-arrow.svg"
          alt=""
          width={84}
          height={6}
          className="w-[84px] shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
}
