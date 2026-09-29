"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { sectionIds } from "@/data/site";

export const Testimonials = (): React.ReactElement => {
  const { dictionary } = useLocale();
  const [active, setActive] = useState(0);
  const items = dictionary.testimonials.items;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [items.length, active]);

  return (
    <section className="tm" id={sectionIds.voices}>
      <div className="qmark h" aria-hidden="true">
        “
      </div>
      <div className="q" id="q">
        {items.map((item, index) => (
          <div key={item.cite} className={`qi${index === active ? " on" : ""}`}>
            <blockquote className="h">{item.quote}</blockquote>
            <cite className="sm">{item.cite}</cite>
          </div>
        ))}
      </div>
      <div className="ticks" id="ticks">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === active ? "on" : ""}
            aria-label={`${dictionary.testimonials.ariaLabel} ${index + 1}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
};
