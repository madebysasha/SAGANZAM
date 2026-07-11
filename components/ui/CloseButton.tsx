type CloseButtonProps = {
  onClick: () => void;
  className?: string;
};

export function CloseButton({ onClick, className }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Закрыть"
      className={`text-espresso flex size-8 shrink-0 cursor-pointer items-center justify-center transition-opacity hover:opacity-60 ${className ?? ""}`}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1L17 17M17 1L1 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
