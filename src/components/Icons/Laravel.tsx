import React, { memo } from "react";
import classNames from "classnames";
import { secondary } from "../../style/colors";

export interface LaravelIconProps {
  fill?: string;
  height?: number;
  width?: number;
  className?: string;
}

const LaravelIcon = memo(
  ({
    fill = secondary,
    height = 50,
    width = 50,
    className,
  }: LaravelIconProps) => {
    return (
      <svg
        version="1.1"
        viewBox="0 0 512 512"
        width={`${width}px`}
        height={`${height}px`}
        className={classNames(className)}
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="comp_x5F_194-laravel">
          <polygon
            points="   33,106 153,336 479,256 429,186 359,196 469,356 319,406 143,106  "
            style={{
              fill: "none",
              stroke: fill,
              strokeWidth: 20,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
          />
        </g>
        <g id="Layer_1" />
      </svg>
    );
  }
);

export default LaravelIcon;
