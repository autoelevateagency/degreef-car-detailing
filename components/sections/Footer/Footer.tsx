"use client";

import { useLocale } from "@/context/LocaleContext";
import { sectionIds, siteLinks } from "@/data/site";

export const Footer = (): React.ReactElement => {
  const { dictionary } = useLocale();

  return (
    <footer>
      <div className="fr">
        <div>
          <span className="sm">{dictionary.footer.navigate}</span>
          <a href={`#${sectionIds.services}`}>{dictionary.nav.services}</a>
          <a href={`#${sectionIds.work}`}>{dictionary.nav.work}</a>
          <a href={`#${sectionIds.about}`}>{dictionary.nav.studio}</a>
        </div>
        <div>
          <span className="sm">{dictionary.footer.contact}</span>
          <a href={siteLinks.phoneTel}>{siteLinks.phoneDisplay}</a>
          <a href={siteLinks.emailMailto}>{siteLinks.emailDisplay}</a>
        </div>
        <div>
          <span className="sm">{dictionary.footer.area}</span>
          <span>{dictionary.footer.areaValue}</span>
        </div>
        <div>
          <span className="sm">{dictionary.footer.follow}</span>
          <a href={siteLinks.instagram}>{dictionary.footer.instagram}</a>
          <a href={siteLinks.tiktok}>{dictionary.footer.tiktok}</a>
        </div>
      </div>
      <div className="wm" aria-hidden="true">
        {dictionary.brand.name}
      </div>
      <div className="lg">
        <span>{dictionary.footer.copyright}</span>
        <span>{dictionary.footer.legal}</span>
      </div>
    </footer>
  );
};
