"use client";

import { Reveal } from "@/components/ui/Reveal";
import { MaskLine } from "@/components/ui/MaskLine";
import { useLocale } from "@/context/LocaleContext";
import { sectionIds, siteLinks } from "@/data/site";

export const Contact = (): React.ReactElement => {
  const { dictionary } = useLocale();

  return (
    <Reveal as="section" className="ct" id={sectionIds.contact}>
      <h2 className="h">
        <MaskLine>{dictionary.contact.line1}</MaskLine>
        <MaskLine>{dictionary.contact.line2}</MaskLine>
        <MaskLine>{dictionary.contact.line3}</MaskLine>
      </h2>
      <a className="li" href={siteLinks.bookingEmail}>
        <span className="sm">{dictionary.contact.booking}</span>
        <span>{dictionary.contact.bookingValue}</span>
        <span aria-hidden="true">→</span>
      </a>
      <a className="li" href={siteLinks.phoneTel}>
        <span className="sm">{dictionary.contact.phone}</span>
        <span>{siteLinks.phoneDisplay}</span>
        <span aria-hidden="true">→</span>
      </a>
      <a className="li" href={siteLinks.emailMailto}>
        <span className="sm">{dictionary.contact.email}</span>
        <span>{siteLinks.emailDisplay}</span>
        <span aria-hidden="true">→</span>
      </a>
      <div className="li">
        <span className="sm">{dictionary.contact.serviceArea}</span>
        <span>{dictionary.contact.serviceAreaValue}</span>
        <span />
      </div>
      <div className="li">
        <span className="sm">{dictionary.contact.hours}</span>
        <span>{dictionary.contact.hoursValue}</span>
        <span />
      </div>
    </Reveal>
  );
};
