import React, { memo } from "react";
import classNames from "classnames";
import { secondary } from "../../style/colors";

export interface KotlinIconProps {
  fill?: string;
  height?: number;
  width?: number;
  className?: string;
}

const KotlinIcon = memo(
  ({
    fill = secondary,
    height = 50,
    width = 50,
    className,
  }: KotlinIconProps) => {
    return (
      <svg
        fill={fill}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={`${width}px`}
        height={`${height}px`}
        className={classNames(className)}
      >
        <title />
        <path d="M1.3 24l11.3-11.5L24 24zM0 0h12L0 12.5zM13.4 0L0 14v10l12-12L24 0z" />
      </svg>
    );
  }
);

export default KotlinIcon;
