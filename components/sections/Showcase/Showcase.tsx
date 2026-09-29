"use client";

import { useEffect, useRef } from "react";
import { SiteImage } from "@/components/ui/SiteImage";
import { SiteVideo } from "@/components/ui/SiteVideo";
import { useLocale } from "@/context/LocaleContext";
import { showcaseTrack, type ShowcaseTrackItem } from "@/data/media";
import { sectionIds } from "@/data/site";

const panelLabel = (
  item: ShowcaseTrackItem,
  panels: {
    number: string;
    label: string;
    detail: string;
  }[],
): { number: string; label: string; detail: string } | null => {
  if (item.kind === "word") {
    return null;
  }
  return panels[item.panelIndex];
};

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
      const percent =
        Math.min(1, Math.max(0, (x - rect.left) / rect.width)) * 100;
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

  const panels = dictionary.showcase.panels;

  return (
    <section className="show" id={sectionIds.work} ref={showRef}>
      <div className="stick">
        <div className="track" id="track" ref={trackRef}>
          {showcaseTrack.map((item, index) => {
            if (item.kind === "word") {
              const className =
                item.textKey === "wordDepth" ? "big h depth-word" : "big h";
              return (
                <div key={`${item.textKey}-${index}`} className={className} aria-hidden="true">
                  {dictionary.showcase[item.textKey]}
                </div>
              );
            }

            const lb = panelLabel(item, panels);

            if (item.kind === "beforeAfter") {
              return (
                <div
                  key={`ba-${index}`}
                  className="pn ba"
                  id="ba"
                  ref={baRef}
                  style={{ width: item.width }}
                >
                  <div className="ba-base">
                    <SiteImage
                      src={item.before}
                      alt={dictionary.media.beforeAfter}
                      sizes="46vw"
                    />
                  </div>
                  <div className="after">
                    <SiteImage
                      src={item.after}
                      alt=""
                      sizes="46vw"
                    />
                  </div>
                  <div className="bar" aria-hidden="true" />
                  {lb ? (
                    <div className="lb">
                      <em>{lb.number}</em>
                      {lb.label}
                      <em>{lb.detail}</em>
                    </div>
                  ) : null}
                </div>
              );
            }

            const alt = lb
              ? `${lb.label} — ${lb.detail}`
              : dictionary.media.peek;
            const heightClass =
              item.kind === "image" || item.kind === "video"
                ? item.heightClass ?? ""
                : "";

            return (
              <div
                key={`${item.kind}-${index}`}
                className={`pn ${heightClass}`.trim()}
                style={{ width: item.width }}
              >
                {item.kind === "video" ? (
                  <SiteVideo src={item.src} poster={item.poster} />
                ) : (
                  <SiteImage src={item.src} alt={alt} sizes={item.width} />
                )}
                <div className="fx" aria-hidden="true" />
                {lb ? (
                  <div className="lb">
                    <em>{lb.number}</em>
                    {lb.label}
                    <em>{lb.detail}</em>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="prog">
          <i id="pg" ref={progRef} />
        </div>
      </div>
    </section>
  );
};
