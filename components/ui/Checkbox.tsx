"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type CheckboxProps = {
  label: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  labelClassName?: string;
};

export function Checkbox({ label, checked, onChange, className, labelClassName }: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(false);
  const isControlled = checked !== undefined;
  const value = isControlled ? checked : internalChecked;

  function handleChange(next: boolean) {
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  }

  return (
    <label className={`flex cursor-pointer items-start gap-3 ${className ?? ""}`}>
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => handleChange(e.target.checked)}
        className="peer sr-only"
      />
      <span className="border-taupe relative mt-0.5 flex size-[18px] shrink-0 items-center justify-center border transition-colors peer-checked:bg-transparent">
        {value && (
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 5L4.5 8.5L11 1.5"
              stroke="#491A0A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className={labelClassName ?? "text-taupe font-sans text-sm leading-normal font-normal"}>
        {label}
      </span>
    </label>
  );
}
