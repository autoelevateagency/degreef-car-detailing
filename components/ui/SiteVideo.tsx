type SiteVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

export const SiteVideo = ({
  src,
  poster,
  className = "site-media",
}: SiteVideoProps): React.ReactElement => (
  <video
    className={className}
    src={src}
    poster={poster}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    aria-hidden="true"
  />
);
