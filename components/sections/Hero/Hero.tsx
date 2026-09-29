"use client";

import { Reveal } from "@/components/ui/Reveal";
import { MaskLine, Stripes } from "@/components/ui/MaskLine";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { SiteVideo } from "@/components/ui/SiteVideo";
import { useLocale } from "@/context/LocaleContext";
import { siteMedia } from "@/data/media";
import { sectionIds } from "@/data/site";

export const Hero = (): React.ReactElement => {
  const { dictionary } = useLocale();

  return (
    <Reveal as="header" className="hero grain" id={sectionIds.top} autoIn>
      <div className="hero-media" aria-hidden="true">
        <SiteVideo
          src={siteMedia.hero.video}
          poster={siteMedia.hero.poster}
        />
      </div>
      <div className="rail sm">
        <Stripes />
        {dictionary.hero.rail}
      </div>
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
