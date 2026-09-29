"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { sectionIds } from "@/data/site";

export const Nav = (): React.ReactElement => {
  const { dictionary } = useLocale();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setSolid(window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="nav" className={solid ? "solid" : ""} aria-label="Primary">
      <a className="logo" href={`#${sectionIds.top}`} aria-label={dictionary.nav.logoAria}>
        <b>{dictionary.brand.name}</b>
        <i>{dictionary.brand.tag}</i>
      </a>
      <div className="links">
        <a href={`#${sectionIds.services}`}>{dictionary.nav.services}</a>
        <a href={`#${sectionIds.work}`}>{dictionary.nav.work}</a>
        <a href={`#${sectionIds.about}`}>{dictionary.nav.studio}</a>
        <a href={`#${sectionIds.area}`}>{dictionary.nav.area}</a>
        <a href={`#${sectionIds.contact}`}>{dictionary.nav.contact}</a>
      </div>
      <a className="book" href={`#${sectionIds.book}`}>
        {dictionary.nav.book}
      </a>
    </nav>
  );
};
