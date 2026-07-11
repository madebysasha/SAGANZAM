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

  const isReady = agreed && name.trim() !== "" && phone.trim() !== "";

  if (submitted) {
    return (
      <div className={`flex flex-col items-start gap-4 bg-white p-[42px] ${className ?? ""}`} style={style}>
        <p className="font-display text-espresso text-[32px] leading-[0.9] font-medium italic">
          Спасибо!
        </p>
        <p className="text-espresso font-sans text-lg leading-normal font-normal">
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
      className={`flex flex-col items-start gap-10 bg-white p-[42px] ${className ?? ""}`}
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
          <SelectField label="Удобное время для звонка" options={CALL_TIME_OPTIONS} />
        )}
      </div>
      <div className="flex w-full flex-col items-start gap-3">
        <button
          type="submit"
          aria-disabled={!isReady}
          className={`font-sans flex w-full items-center justify-center gap-4 px-6 py-4 text-xl leading-[1.2] font-normal tracking-[-0.4px] transition-all ${
            isReady
              ? "bg-espresso text-cream cursor-pointer hover:opacity-90"
              : "bg-espresso/40 text-cream cursor-not-allowed"
          }`}
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
