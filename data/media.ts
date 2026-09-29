export const images = {
  img01: "/assets/img-01.jpg",
  img02: "/assets/img-02.jpg",
  img03: "/assets/img-03.jpg",
  img04: "/assets/img-04.jpg",
  img05: "/assets/img-05.jpg",
  img06: "/assets/img-06.jpg",
  img07: "/assets/img-07.jpg",
  img08: "/assets/img-08.jpg",
  img09: "/assets/img-09.jpg",
  img10: "/assets/img-10.jpg",
  img11: "/assets/img-11.jpg",
  img12: "/assets/img-12.jpg",
  img13: "/assets/img-13.jpg",
  img14: "/assets/img-14.jpg",
} as const;

export const videos = {
  vid01: "/assets/vid-01.mp4",
  vid02: "/assets/vid-02.mp4",
  vid03: "/assets/vid-03.mp4",
} as const;

export const siteMedia = {
  hero: {
    video: videos.vid01,
    poster: images.img01,
  },
  servicesPeek: [images.img02, images.img03, images.img04],
  about: images.img10,
  serviceArea: images.img14,
  finalCta: {
    video: videos.vid02,
    poster: images.img06,
  },
} as const;

export type ShowcasePanelIndex = 0 | 1 | 2 | 3;

export type ShowcaseTrackItem =
  | {
      kind: "image";
      src: string;
      width: string;
      panelIndex: ShowcasePanelIndex;
      heightClass?: "pn-h-tall" | "pn-h-short";
    }
  | {
      kind: "video";
      src: string;
      poster: string;
      width: string;
      panelIndex: ShowcasePanelIndex;
      heightClass?: "pn-h-tall" | "pn-h-short";
    }
  | {
      kind: "beforeAfter";
      before: string;
      after: string;
      width: string;
      panelIndex: ShowcasePanelIndex;
    }
  | { kind: "word"; textKey: "wordFinish" | "wordDepth" };

export const showcaseTrack: ShowcaseTrackItem[] = [
  {
    kind: "image",
    src: images.img05,
    width: "38vw",
    panelIndex: 0,
    heightClass: "pn-h-tall",
  },
  { kind: "word", textKey: "wordFinish" },
  {
    kind: "video",
    src: videos.vid02,
    poster: images.img11,
    width: "42vw",
    panelIndex: 1,
  },
  {
    kind: "beforeAfter",
    before: images.img09,
    after: images.img04,
    width: "46vw",
    panelIndex: 1,
  },
  {
    kind: "image",
    src: images.img12,
    width: "30vw",
    panelIndex: 2,
    heightClass: "pn-h-short",
  },
  {
    kind: "image",
    src: images.img13,
    width: "34vw",
    panelIndex: 3,
  },
  {
    kind: "video",
    src: videos.vid03,
    poster: images.img08,
    width: "38vw",
    panelIndex: 3,
  },
  { kind: "word", textKey: "wordDepth" },
];
