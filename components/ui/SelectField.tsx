"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type SelectFieldProps = {
  label: string;
  options: string[];
  defaultValue?: string;
  className?: string;
};

export function SelectField({ label, options, defaultValue, className }: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ?? options[0]);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={rootRef} className={`relative flex w-full flex-col items-start gap-[7px] ${className ?? ""}`}>
      <label className="text-taupe font-sans text-base leading-normal font-normal tablet:text-lg">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="border-taupe flex w-full items-center justify-between gap-2.5 border-b pb-2"
      >
        <span className="text-espresso font-sans text-lg leading-[1.2] font-normal tracking-[-0.2px] tablet:text-xl tablet:tracking-[-0.4px]">
          {value}
        </span>
        <Image
          src="/images/icon-chevron-down.svg"
          alt=""
          width={14}
          height={8}
          className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="border-taupe/40 absolute top-full left-0 z-10 mt-1 w-full border bg-white shadow-[4px_4px_4px_0px_rgba(0,0,0,0.09)]">
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                onClick={() => {
                  setValue(option);
                  setOpen(false);
                }}
                className="text-espresso font-sans hover:bg-cream w-full px-4 py-3 text-left text-lg leading-normal font-normal transition-colors"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
