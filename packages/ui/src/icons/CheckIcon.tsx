import type { FC } from "react";

import type { BaseIconProps } from "./Icon.types";

const CheckIcon: FC<BaseIconProps> = ({ className, fill = "currentColor", ...rest }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="8"
      viewBox="0 0 10 8"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        clipRule="evenodd"
        d="M2.30559 3.56852L3.36934 5.43088L8.02528 0.760713C8.38335 0.402647 8.96283 0.401232 9.32189 0.758003C9.68054 1.11666 9.68196 1.69614 9.32519 2.05519L3.83867 7.5584L3.81832 7.57874C3.64566 7.7514 3.41231 7.84717 3.16973 7.84717C3.1083 7.84609 3.1083 7.84609 3.03227 7.83619C2.76393 7.79962 2.51619 7.6326 2.37433 7.38551L0.713074 4.47909C0.461274 4.03958 0.614341 3.47975 1.05395 3.22789C1.49389 2.97584 2.05373 3.12891 2.30559 3.56852ZM3.18238 6.84763C3.20683 6.85098 3.2292 6.86606 3.24205 6.88845L3.18829 6.79439L3.13102 6.85183L3.11122 6.87164C3.12693 6.85592 3.14826 6.84717 3.16973 6.84717C3.1759 6.84721 3.1759 6.84721 3.18238 6.84763Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

CheckIcon.displayName = "CheckIcon";

export default CheckIcon;
