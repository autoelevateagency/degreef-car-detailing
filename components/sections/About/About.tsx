"use client";

import { Reveal } from "@/components/ui/Reveal";
import { MaskLine, Stripes } from "@/components/ui/MaskLine";
import { SiteImage } from "@/components/ui/SiteImage";
import { useLocale } from "@/context/LocaleContext";
import { siteMedia } from "@/data/media";
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
        <SiteImage
          src={siteMedia.about}
          alt={dictionary.media.about}
          sizes="(max-width: 820px) 78vw, 40vw"
        />
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
