"use client";

import { Reveal } from "@/components/ui/Reveal";
import { MaskLine, Stripes } from "@/components/ui/MaskLine";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { useLocale } from "@/context/LocaleContext";
import { sectionIds } from "@/data/site";

export const Hero = (): React.ReactElement => {
  const { dictionary } = useLocale();

  return (
    <Reveal as="header" className="hero grain" id={sectionIds.top} autoIn>
      <div className="rail sm">
        <Stripes />
        {dictionary.hero.rail}
      </div>
      <svg
        className="car"
        viewBox="0 0 1200 380"
        fill="none"
        stroke="#F4F4F2"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path
          d="M40 270 C40 240 70 232 120 226 L330 206 C400 150 470 112 590 104 L780 100 C880 106 950 150 1010 196 L1120 212 C1160 218 1170 240 1168 270 L1150 282 L1078 282 A62 62 0 0 0 954 282 L340 282 A62 62 0 0 0 216 282 L60 282 Z"
          strokeOpacity=".75"
        />
        <path
          d="M360 200 C420 156 480 128 590 122 L760 120 C830 128 880 160 930 196 Z"
          strokeOpacity=".35"
        />
        <path d="M640 122 L640 198" strokeOpacity=".3" />
        <line x1="120" y1="232" x2="1120" y2="212" strokeOpacity=".2" />
        <circle cx="278" cy="282" r="62" strokeOpacity=".6" />
        <circle cx="278" cy="282" r="38" strokeOpacity=".25" />
        <circle cx="1016" cy="282" r="62" strokeOpacity=".6" />
        <circle cx="1016" cy="282" r="38" strokeOpacity=".25" />
        <line x1="0" y1="345" x2="1200" y2="345" strokeOpacity=".18" />
      </svg>
      <div className="sweep" aria-hidden="true" />
      <h1 className="h" id="h1">
        <MaskLine>{dictionary.hero.line1}</MaskLine>
        <MaskLine>{dictionary.hero.line2}</MaskLine>
        <MaskLine>{dictionary.hero.line3}</MaskLine>
      </h1>
      <div className="hero-side fade">
        <p>{dictionary.hero.support}</p>
        <MagneticLink className="cta" href={`#${sectionIds.book}`}>
          {dictionary.hero.cta} <span aria-hidden="true">→</span>
        </MagneticLink>
      </div>
    </Reveal>
  );
};
