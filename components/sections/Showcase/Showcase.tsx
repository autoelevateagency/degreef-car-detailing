"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/context/LocaleContext";
import { sectionIds } from "@/data/site";

export const Showcase = (): React.ReactElement => {
  const { dictionary } = useLocale();
  const showRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progRef = useRef<HTMLElement | null>(null);
  const baRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const show = showRef.current;
    const track = trackRef.current;
    const prog = progRef.current;
    if (!show || !track || !prog) {
      return;
    }

    const update = (): void => {
      if (window.innerWidth <= 820) {
        track.style.transform = "";
        return;
      }
      const rect = show.getBoundingClientRect();
      const max = show.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / max));
      const width = track.scrollWidth - window.innerWidth;
      track.style.transform = `translate3d(${-progress * width}px, 0, 0)`;
      prog.style.width = `${progress * 100}%`;
    };

    let ticking = false;
    const onScroll = (): void => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const ba = baRef.current;
    if (!ba) {
      return;
    }
    const after = ba.querySelector<HTMLElement>(".after");
    const bar = ba.querySelector<HTMLElement>(".bar");
    if (!after || !bar) {
      return;
    }

    const move = (x: number): void => {
      const rect = ba.getBoundingClientRect();
      const percent = Math.min(1, Math.max(0, (x - rect.left) / rect.width)) * 100;
      after.style.clipPath = `inset(0 0 0 ${percent}%)`;
      bar.style.left = `${percent}%`;
    };

    const onMouse = (event: MouseEvent): void => move(event.clientX);
    const onTouch = (event: TouchEvent): void => {
      if (event.touches[0]) {
        move(event.touches[0].clientX);
      }
    };

    ba.addEventListener("mousemove", onMouse);
    ba.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      ba.removeEventListener("mousemove", onMouse);
      ba.removeEventListener("touchmove", onTouch);
    };
  }, []);

  const [p1, p2, p3, p4] = dictionary.showcase.panels;

  return (
    <section className="show" id={sectionIds.work} ref={showRef}>
      <div className="stick">
        <div className="track" id="track" ref={trackRef}>
          <div className="pn" style={{ width: "38vw" }}>
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#F4F4F2" strokeWidth=".8" aria-hidden="true">
              <path d="M-20 220 C60 150 200 120 420 190" strokeOpacity=".6" />
              <path d="M-20 240 C80 170 220 145 420 215" strokeOpacity=".3" />
              <path d="M-20 260 C100 200 240 170 420 240" strokeOpacity=".15" />
            </svg>
            <div className="fx" aria-hidden="true" />
            <div className="lb">
              <em>{p1.number}</em>
              {p1.label}
              <em>{p1.detail}</em>
            </div>
          </div>

          <div className="big h" aria-hidden="true">
            {dictionary.showcase.wordFinish}
          </div>

          <div className="pn ba" id="ba" ref={baRef} style={{ width: "46vw" }}>
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#F4F4F2" strokeWidth=".8" aria-hidden="true">
              <circle cx="200" cy="150" r="90" strokeOpacity=".4" />
              <circle cx="200" cy="150" r="60" strokeOpacity=".25" />
              <circle cx="200" cy="150" r="20" strokeOpacity=".5" />
            </svg>
            <div className="after" aria-hidden="true" />
            <div className="bar" aria-hidden="true" />
            <div className="lb">
              <em>{p2.number}</em>
              {p2.label}
              <em>{p2.detail}</em>
            </div>
          </div>

          <div className="pn" style={{ width: "30vw" }}>
            <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#F4F4F2" strokeWidth=".8" aria-hidden="true">
              <path d="M40 400 L260 0M90 400 L310 0M140 400 L360 0" strokeOpacity=".2" />
            </svg>
            <div className="fx" aria-hidden="true" />
            <div className="lb">
              <em>{p3.number}</em>
              {p3.label}
              <em>{p3.detail}</em>
            </div>
          </div>

          <div className="pn" style={{ width: "34vw" }}>
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#F4F4F2" strokeWidth=".8" aria-hidden="true">
              <path d="M0 200 L400 120M0 216 L400 136" strokeOpacity=".3" />
            </svg>
            <div className="fx" aria-hidden="true" />
            <div className="lb">
              <em>{p4.number}</em>
              {p4.label}
              <em>{p4.detail}</em>
            </div>
          </div>

          <div className="big h depth-word" aria-hidden="true">
            {dictionary.showcase.wordDepth}
          </div>
        </div>
        <div className="prog">
          <i id="pg" ref={progRef} />
        </div>
      </div>
    </section>
  );
};
