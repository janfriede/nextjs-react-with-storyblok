import React, { memo } from "react";
import classNames from "classnames";
import { secondary } from "../../style/colors";

export interface SpinnerIconProps {
  fill?: string;
  height?: number;
  width?: number;
  className?: string;
}

const SpinnerIcon = memo(
  ({
    fill = secondary,
    height = 50,
    width = 50,
    className,
  }: SpinnerIconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: "auto",
          background: "none",
          display: "block",
          shapeRendering: "auto",
        }}
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className={classNames(className)}
      >
        <rect x="19" y="34" width="12" height="32" fill={fill}>
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="24.4;34;34"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.2s"
          />
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="51.2;32;32"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.2s"
          />
        </rect>
        <rect x="44" y="34" width="12" height="32" fill={fill}>
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="26.799999999999997;34;34"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.1s"
          />
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="46.400000000000006;32;32"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.1s"
          />
        </rect>
        <rect x="69" y="34" width="12" height="32" fill={fill}>
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="26.799999999999997;34;34"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          />
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="46.400000000000006;32;32"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          />
        </rect>
      </svg>
    );
  }
);

export default SpinnerIcon;
