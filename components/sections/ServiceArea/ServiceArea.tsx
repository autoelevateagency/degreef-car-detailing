"use client";

import { Reveal } from "@/components/ui/Reveal";
import { MaskLine } from "@/components/ui/MaskLine";
import { SiteImage } from "@/components/ui/SiteImage";
import { useLocale } from "@/context/LocaleContext";
import { siteMedia } from "@/data/media";
import { sectionIds } from "@/data/site";

export const ServiceArea = (): React.ReactElement => {
  const { dictionary } = useLocale();

  return (
    <Reveal as="section" className="mob" id={sectionIds.area}>
      <div className="mob-media" aria-hidden="true">
        <SiteImage
          src={siteMedia.serviceArea}
          alt={dictionary.media.serviceArea}
          sizes="100vw"
        />
      </div>
      <svg
        className="map"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#262626" strokeWidth="1">
          <path d="M-50 120 C250 60 400 220 700 160 S1100 60 1300 140" />
          <path d="M-50 220 C250 160 400 320 700 260 S1100 160 1300 240" />
          <path d="M-50 330 C300 280 450 420 750 360 S1100 300 1300 350" />
          <path d="M-50 450 C300 400 500 540 800 480 S1100 430 1300 460" />
          <path
            d="M300 -20 L380 720M620 -20 L560 720M900 -20 L960 720"
            strokeOpacity=".6"
          />
        </g>
        <path
          id="rt"
          d="M120 560 C300 480 380 560 520 430 S760 300 860 340 S1020 200 1090 150"
          stroke="#F4F4F2"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          strokeOpacity=".35"
        />
        <path
          d="M120 560 C300 480 380 560 520 430 S760 300 860 340 S1020 200 1090 150"
          stroke="#fff"
          strokeWidth="2"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="1"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="1;0;0"
            keyTimes="0;.7;1"
            dur="7s"
            repeatCount="indefinite"
          />
        </path>
        <circle r="5" fill="#fff">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            keyPoints="0;1;1"
            keyTimes="0;.7;1"
            calcMode="linear"
          >
            <mpath href="#rt" />
          </animateMotion>
        </circle>
        <circle cx="120" cy="560" r="4" fill="#fff" />
        <circle cx="1090" cy="150" r="14" stroke="#fff" strokeOpacity=".7" />
        <circle cx="1090" cy="150" r="4" fill="#fff" />
      </svg>
      <h2 className="h">
        <MaskLine>{dictionary.area.line1}</MaskLine>
        <MaskLine>{dictionary.area.line2}</MaskLine>
      </h2>
      <ul>
        {dictionary.area.items.map((item) => (
          <li key={item.label}>
            <small>{item.label}</small>
            {item.value}
          </li>
        ))}
      </ul>
    </Reveal>
  );
};
