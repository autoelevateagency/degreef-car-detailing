"use client";

import { Reveal } from "@/components/ui/Reveal";
import { MaskLine } from "@/components/ui/MaskLine";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { SiteVideo } from "@/components/ui/SiteVideo";
import { useLocale } from "@/context/LocaleContext";
import { siteMedia } from "@/data/media";
import { sectionIds } from "@/data/site";

export const FinalCta = (): React.ReactElement => {
  const { dictionary } = useLocale();

  return (
    <Reveal as="section" className="fin grain" id={sectionIds.book} threshold={0.1}>
      <div className="fin-media" aria-hidden="true">
        <SiteVideo
          src={siteMedia.finalCta.video}
          poster={siteMedia.finalCta.poster}
        />
      </div>
      <div className="stripe-bg" aria-hidden="true" />
      <div className="fin-inner">
        <p className="sm fin-eyebrow">{dictionary.nav.book}</p>
        <h2 className="h">
          <MaskLine>{dictionary.finalCta.line1}</MaskLine>
          <MaskLine>{dictionary.finalCta.line2}</MaskLine>
          <MaskLine>{dictionary.finalCta.line3}</MaskLine>
        </h2>
        <MagneticLink className="cta fin-cta" href={`#${sectionIds.contact}`}>
          {dictionary.finalCta.cta} <span aria-hidden="true">→</span>
        </MagneticLink>
      </div>
    </Reveal>
  );
};
