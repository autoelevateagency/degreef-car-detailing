"use client";

import { useLocale } from "@/context/LocaleContext";
import type { Locale } from "@/data/dictionary";

export const LocaleSwitcher = (): React.ReactElement => {
  const { locale, setLocale } = useLocale();
  const options: Locale[] = ["EN", "UR"];

  return (
    <div className="locale-switch" role="group" aria-label="Language">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={locale === option ? "on" : ""}
          aria-pressed={locale === option}
          onClick={() => setLocale(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
