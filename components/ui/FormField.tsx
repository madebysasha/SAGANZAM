type FormFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  trailingSwatch?: boolean;
  className?: string;
};

export function FormField({
  label,
  placeholder,
  value,
  onChange,
  error,
  trailingSwatch,
  className,
}: FormFieldProps) {
  return (
    <div className={`flex w-full flex-col items-start gap-[7px] ${className ?? ""}`}>
      <label className="text-taupe font-sans text-base leading-normal font-normal tablet:text-lg">
        {label}
      </label>
      <div
        className={`flex w-full items-center justify-center gap-2.5 border-b pb-2 ${
          error ? "border-red-600" : "border-taupe"
        }`}
      >
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="text-espresso font-sans text-lg leading-[1.2] font-normal tracking-[-0.2px] outline-none placeholder:text-espresso flex-1 tablet:text-xl tablet:tracking-[-0.4px]"
        />
        {trailingSwatch && <div className="size-[18px] shrink-0 rounded bg-[#e4d9cc]" />}
      </div>
      {error && <p className="font-sans text-sm leading-normal font-normal text-red-600">{error}</p>}
    </div>
  );
}
