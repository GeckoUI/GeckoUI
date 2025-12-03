import type { FC } from "react";

import { classNames } from "../utils/classNames";
import type { BaseIconProps } from "./Icon.types";

const Upload: FC<BaseIconProps> = ({ className, fill = "currentColor", ...rest }) => {
  return (
    <svg
      className={classNames("h-5 w-5 text-gray-500", className)}
      fill={fill}
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
    </svg>
  );
};

export default Upload;
