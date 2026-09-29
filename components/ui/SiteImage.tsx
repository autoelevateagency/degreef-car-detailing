import Image from "next/image";

type SiteImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export const SiteImage = ({
  src,
  alt,
  className = "site-media",
  priority = false,
  sizes = "100vw",
}: SiteImageProps): React.ReactElement => (
  <Image
    src={src}
    alt={alt}
    fill
    className={className}
    sizes={sizes}
    priority={priority}
  />
);
