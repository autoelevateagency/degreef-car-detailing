import type { ReactNode } from "react";

type MaskLineProps = {
  children: ReactNode;
};

export const MaskLine = ({ children }: MaskLineProps): React.ReactElement => (
  <span className="mask">
    <span>{children}</span>
  </span>
);

export const Stripes = (): React.ReactElement => (
  <span className="stripes" aria-hidden="true" />
);
