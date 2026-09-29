"use client";

import { Reveal } from "@/components/ui/Reveal";
import { MaskLine } from "@/components/ui/MaskLine";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { useLocale } from "@/context/LocaleContext";
import { sectionIds } from "@/data/site";

export const FinalCta = (): React.ReactElement => {
  const { dictionary } = useLocale();

  return (
    <Reveal as="section" className="fin" id={sectionIds.book}>
      <div className="stripe-bg" aria-hidden="true" />
      <h2 className="h">
        <MaskLine>{dictionary.finalCta.line1}</MaskLine>
        <MaskLine>{dictionary.finalCta.line2}</MaskLine>
      </h2>
      <MagneticLink href={`#${sectionIds.contact}`}>
        {dictionary.finalCta.cta} <span aria-hidden="true">→</span>
      </MagneticLink>
    </Reveal>
  );
};
