import React, { memo } from "react";
import classNames from "classnames";
import { secondary } from "../../style/colors";

export interface CodeIconProps {
  fill?: string;
  height?: number;
  width?: number;
  className?: string;
}

const CodeIcon = memo(
  ({ fill = secondary, height = 50, width = 50, className }: CodeIconProps) => {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={`${width}px`}
        height={`${height}px`}
        className={classNames(className)}
      >
        <path
          d="M16 13L4 25.4322L16 37"
          stroke={fill}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 13L44 25.4322L32 37"
          stroke={fill}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 4L21 44"
          stroke={fill}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

export default CodeIcon;
