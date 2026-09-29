"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { sectionIds } from "@/data/site";

export const Testimonials = (): React.ReactElement => {
  const { dictionary, dir } = useLocale();
  const [active, setActive] = useState(0);
  const items = dictionary.testimonials.items;
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [items.length, active]);

  const goTo = (index: number): void => {
    setActive((index + items.length) % items.length);
  };

  const goPrev = (): void => {
    goTo(active - 1);
  };

  const goNext = (): void => {
    goTo(active + 1);
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>): void => {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 48) {
      return;
    }

    const swipedForward = dir === "rtl" ? deltaX > 0 : deltaX < 0;

    if (swipedForward) {
      goNext();
      return;
    }

    goPrev();
  };

  return (
    <section className="tm" id={sectionIds.voices}>
      <div className="qmark h" aria-hidden="true">
        “
      </div>
      <div
        className="q"
        id="q"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {items.map((item, index) => (
          <div key={item.cite} className={`qi${index === active ? " on" : ""}`}>
            <blockquote className="h">{item.quote}</blockquote>
            <cite className="sm">{item.cite}</cite>
          </div>
        ))}
      </div>
      <div className="tm-ctrl">
        <button
          type="button"
          className="tm-nav tm-prev"
          aria-label={dictionary.testimonials.prevLabel}
          onClick={goPrev}
        >
          <span aria-hidden="true">←</span>
        </button>
        <div className="ticks" id="ticks">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === active ? "on" : ""}
              aria-label={`${dictionary.testimonials.ariaLabel} ${index + 1}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="tm-nav tm-next"
          aria-label={dictionary.testimonials.nextLabel}
          onClick={goNext}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
};
