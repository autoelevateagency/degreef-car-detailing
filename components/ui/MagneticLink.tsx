"use client";

import { useEffect, useRef, type ReactNode } from "react";

type MagneticProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export const MagneticLink = ({
  href,
  className = "",
  children,
}: MagneticProps): React.ReactElement => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover:hover)").matches) {
      return;
    }

    const onMove = (event: MouseEvent): void => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.22;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.35;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };

    const onLeave = (): void => {
      el.style.transition = "transform .5s";
      el.style.transform = "";
      window.setTimeout(() => {
        el.style.transition = "";
      }, 500);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a ref={ref} href={href} className={className} data-mag>
      {children}
    </a>
  );
};
