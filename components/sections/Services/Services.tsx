"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/context/LocaleContext";
import { siteMedia } from "@/data/media";
import { sectionIds } from "@/data/site";

export const Services = (): React.ReactElement => {
  const { dictionary } = useLocale();
  const peekRef = useRef<HTMLDivElement | null>(null);
  const peekImgRef = useRef<HTMLImageElement | null>(null);
  const pointer = useRef({ mx: 0, my: 0, cx: 0, cy: 0, run: false });

  useEffect(() => {
    if (!window.matchMedia("(hover:hover)").matches) {
      return;
    }

    const peek = peekRef.current;
    const peekImg = peekImgRef.current;
    if (!peek || !peekImg) {
      return;
    }

    const loop = (): void => {
      const p = pointer.current;
      p.cx += (p.mx - p.cx) * 0.12;
      p.cy += (p.my - p.cy) * 0.12;
      peek.style.transform = `translate(${p.cx + 30}px, ${p.cy - 140}px) rotate(-3deg)`;
      if (peek.classList.contains("on") || Math.abs(p.mx - p.cx) > 1) {
        requestAnimationFrame(loop);
      } else {
        p.run = false;
      }
    };

    const rows = Array.from(document.querySelectorAll<HTMLElement>(".row"));
    const cleanups = rows.map((row) => {
      const onEnter = (): void => {
        const index = Number(row.dataset.p ?? 0);
        peekImg.src =
          siteMedia.servicesPeek[index] ?? siteMedia.servicesPeek[0];
        peek.classList.add("on");
        if (!pointer.current.run) {
          pointer.current.run = true;
          requestAnimationFrame(loop);
        }
      };
      const onLeave = (): void => {
        peek.classList.remove("on");
      };
      const onMove = (event: MouseEvent): void => {
        pointer.current.mx = event.clientX;
        pointer.current.my = event.clientY;
      };
      row.addEventListener("mouseenter", onEnter);
      row.addEventListener("mouseleave", onLeave);
      row.addEventListener("mousemove", onMove);
      return () => {
        row.removeEventListener("mouseenter", onEnter);
        row.removeEventListener("mouseleave", onLeave);
        row.removeEventListener("mousemove", onMove);
      };
    });

    return () => cleanups.forEach((fn) => fn());
  }, [dictionary.services.items]);

  return (
    <>
      <section className="svc" id={sectionIds.services}>
        <div className="svc-head">
          <h2 className="h svc-title">{dictionary.services.title}</h2>
          <span className="sm">{dictionary.services.subtitle}</span>
        </div>
        {dictionary.services.items.map((item, index) => (
          <a
            key={item.number}
            className="row"
            href={`#${sectionIds.contact}`}
            data-p={index}
          >
            <span className="n">{item.number}</span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="ar" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </section>
      <div id="peek" ref={peekRef} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={peekImgRef}
          className="peek-img"
          src={siteMedia.servicesPeek[0]}
          alt=""
        />
      </div>
    </>
  );
};
