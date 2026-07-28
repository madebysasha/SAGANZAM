"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { FormField } from "./ui/FormField";
import { SelectField } from "./ui/SelectField";
import { Checkbox } from "./ui/Checkbox";
import { IconLink } from "./ui/IconLink";

const INTEREST_OPTIONS = [
  "Пальто double-face",
  "Дизайнерский перешив шубы (норка, каракуль, соболь)",
  "Пошив из соболя",
];

const CALL_TIME_OPTIONS = [
  "В любое время",
  "Утро (9:00–12:00)",
  "День (12:00–17:00)",
  "Вечер (17:00–21:00)",
];

type ApplicationFormProps = {
  withCallTime?: boolean;
  withTelegramShortcut?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function ApplicationForm({
  withCallTime = false,
  withTelegramShortcut = false,
  className,
  style,
}: ApplicationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState<string | undefined>();
  const [phoneError, setPhoneError] = useState<string | undefined>();
  const [agreed, setAgreed] = useState(false);
  const [showAgreementWarning, setShowAgreementWarning] = useState(false);

  if (submitted) {
    return (
      <div
        className={`flex flex-col items-start gap-4 bg-white p-6 tablet:p-8 laptop:p-[42px] ${className ?? ""}`}
        style={style}
      >
        <p className="font-display text-espresso text-[26px] leading-[0.95] font-medium italic tablet:text-[32px] tablet:leading-[0.9]">
          Спасибо!
        </p>
        <p className="text-espresso font-sans text-base leading-normal font-normal tablet:text-lg">
          Мы получили заявку и свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const nameEmpty = name.trim() === "";
        const phoneEmpty = phone.trim() === "";
        setNameError(nameEmpty ? "Укажите имя" : undefined);
        setPhoneError(phoneEmpty ? "Укажите телефон или Telegram" : undefined);
        if (!agreed) setShowAgreementWarning(true);
        if (nameEmpty || phoneEmpty || !agreed) return;
        // No backend wired up yet — this just shows a confirmation state locally.
        setSubmitted(true);
      }}
      className={`flex flex-col items-start gap-6 bg-white p-6 tablet:gap-8 tablet:p-8 laptop:gap-10 laptop:p-[42px] ${className ?? ""}`}
      style={style}
    >
      <div className="flex w-full flex-col items-start gap-[19px]">
        <FormField
          label="Имя"
          placeholder="Имя"
          value={name}
          onChange={(v) => {
            setName(v);
            if (v.trim() !== "") setNameError(undefined);
          }}
          error={nameError}
        />
        <FormField
          label="Телефон или Telegram"
          placeholder="+7 / @username"
          value={phone}
          onChange={(v) => {
            setPhone(v);
            if (v.trim() !== "") setPhoneError(undefined);
          }}
          error={phoneError}
        />
        <SelectField label="Что вас интересует" options={INTEREST_OPTIONS} />
        {withCallTime && (
          <SelectField
            label="Удобное время для звонка"
            options={CALL_TIME_OPTIONS}
            defaultValue="В любое время"
          />
        )}
      </div>
      <div className="flex w-full flex-col items-start gap-3">
        <button
          type="submit"
          className="font-sans bg-espresso text-cream flex w-full cursor-pointer items-center justify-center gap-4 px-6 py-3 text-lg leading-[1.2] font-normal tracking-[-0.2px] transition-all hover:opacity-90 tablet:py-4 tablet:text-xl tablet:tracking-[-0.4px]"
        >
          Записаться на консультацию
        </button>
        {withTelegramShortcut && (
          <IconLink
            icon="telegram"
            label="Связаться в Telegram"
            href="https://t.me/saganzam"
            className="text-espresso"
            textClassName="font-sans text-lg leading-normal font-normal"
          />
        )}
        <Checkbox
          checked={agreed}
          onChange={(next) => {
            setAgreed(next);
            if (next) setShowAgreementWarning(false);
          }}
          error={showAgreementWarning}
          labelClassName={`font-sans text-sm leading-normal font-normal transition-colors ${
            showAgreementWarning ? "text-red-600" : "text-taupe"
          }`}
          label={
            <>
              Я соглашаюсь с <span className="underline">политикой конфиденциальности</span> и
              даю согласие на <span className="underline">обработку персональных данных</span>
            </>
          }
        />
      </div>
    </form>
  );
}
