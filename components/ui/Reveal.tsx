"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  as?: "div" | "header" | "section";
  className?: string;
  id?: string;
  children: ReactNode;
  threshold?: number;
  autoIn?: boolean;
};

export const Reveal = ({
  as: Tag = "div",
  className = "",
  id,
  children,
  threshold = 0.25,
  autoIn = false,
}: RevealProps): React.ReactElement => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    if (autoIn) {
      const timer = window.setTimeout(() => {
        el.classList.add("in");
      }, 100);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [autoIn, threshold]);

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={className}
    >
      {children}
    </Tag>
  );
};
