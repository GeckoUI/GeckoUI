import type { FC } from "react";

import type { BaseIconProps } from "./Icon.types";

const IndeterminateIcon: FC<BaseIconProps> = ({ className, stroke = "currentColor", ...rest }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="2"
      viewBox="0 0 11 2"
      width="11"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
      {...rest}>
      <rect fill="white" height="2" rx="1" width="10" x="0.82959" y="-0.00830078" />
    </svg>
  );
};

export default IndeterminateIcon;
