"use client";

import { Reveal } from "@/components/ui/Reveal";
import { MaskLine, Stripes } from "@/components/ui/MaskLine";
import { useLocale } from "@/context/LocaleContext";
import { sectionIds } from "@/data/site";

export const About = (): React.ReactElement => {
  const { dictionary } = useLocale();

  return (
    <Reveal as="section" className="ab" id={sectionIds.about}>
      <h2 className="h">
        <MaskLine>{dictionary.about.line1}</MaskLine>
        <MaskLine>{dictionary.about.line2}</MaskLine>
        <MaskLine>{dictionary.about.line3}</MaskLine>
      </h2>
      <div className="vis grain">
        <svg viewBox="0 0 300 400" fill="none" stroke="#F4F4F2" strokeWidth=".6" aria-hidden="true">
          <circle cx="150" cy="210" r="110" strokeOpacity=".35" />
          <circle cx="150" cy="210" r="70" strokeOpacity=".25" />
          <circle cx="150" cy="210" r="14" strokeOpacity=".6" />
          <path d="M0 330H300" strokeOpacity=".2" />
        </svg>
      </div>
      <div className="txt">
        <strong>{dictionary.about.lead}</strong>
        <p>{dictionary.about.body}</p>
        <Stripes />
      </div>
      <div className="spec">
        {dictionary.about.specs.map((spec) => (
          <div key={spec.label}>
            {spec.label}
            <b>{spec.value}</b>
          </div>
        ))}
      </div>
    </Reveal>
  );
};
