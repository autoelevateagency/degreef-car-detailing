"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

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
  threshold = 0.15,
  autoIn = false,
}: RevealProps): React.ReactElement => {
  const ref = useRef<HTMLElement | null>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || isIn) {
      return;
    }

    if (autoIn) {
      const timer = window.setTimeout(() => {
        setIsIn(true);
      }, 100);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIn(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [autoIn, threshold, isIn]);

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={`${className}${isIn ? " in" : ""}`.trim()}
    >
      {children}
    </Tag>
  );
};
