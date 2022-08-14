import React, { memo } from "react";
import classNames from "classnames";
import { secondary } from "../../style/colors";

export interface VuejsIconProps {
  fill?: string;
  height?: number;
  width?: number;
  className?: string;
}

const VuejsIcon = memo(
  ({
    fill = secondary,
    height = 50,
    width = 50,
    className,
  }: VuejsIconProps) => {
    return (
      <svg
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width={`${width}px`}
        height={`${height}px`}
        className={classNames(className)}
      >
        <path d="M 3 6 L 16 28 L 29 6 L 19 6 L 16 11.300781 L 13 6 L 3 6 z M 6.5 8 L 10.271484 8 L 16 18 L 21.728516 8 L 25.5 8 L 16 24.099609 L 6.5 8 z" />
      </svg>
    );
  }
);

export default VuejsIcon;
