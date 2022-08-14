import React, { memo, ReactNode } from "react";
import { createUseStyles } from "react-jss";
import {
  mediaMaxLargeMobile,
  mediaMinDesktopMaxLargeDesktop,
  mediaMinLargeDesktop,
  mediaMinLargeMobileMaxTablet,
  mediaMinLargeTabletMaxDesktop,
  mediaMinTabletMaxLargeTablet,
} from "../../../style/responsive";
import classNames from "classnames";

const useStyles = createUseStyles({
  column: {
    flex: ({ col, grid = 12 }: StylesOptions) => `0 0 ${(col / grid) * 100}%`,
    maxWidth: "100%",
    [mediaMinLargeDesktop]: {
      flex: ({ col, xl, grid = 12 }: StylesOptions) =>
        `0 0 ${xl ? (xl / grid) * 100 : (col / grid) * 100}%`,
    },
    [mediaMinDesktopMaxLargeDesktop]: {
      flex: ({ col, l = col, grid = 12 }: StylesOptions) =>
        `0 0 ${(l / grid) * 100}%`,
    },
    [mediaMinLargeTabletMaxDesktop]: {
      flex: ({ col, m = col, grid = 12 }: StylesOptions) =>
        `0 0 ${(m / grid) * 100}%`,
    },
    [mediaMinTabletMaxLargeTablet]: {
      flex: ({ col, s = col, grid = 12 }: StylesOptions) =>
        `0 0 ${(s / grid) * 100}%`,
    },
    [mediaMinLargeMobileMaxTablet]: {
      flex: ({ col, xs = col, grid = 12 }: StylesOptions) =>
        `0 0 ${(xs / grid) * 100}%`,
    },
    [mediaMaxLargeMobile]: {
      flex: ({ col, xs = col, mobile, grid = 12 }: StylesOptions) => {
        if (mobile) {
          return `0 0 ${(mobile / grid) * 100}%`;
        }
        return `0 0 ${(xs / grid) * 100}%`;
      },
    },
  },
  justify: {},
});

export interface ColumnProps {
  col: number;
  xl?: number;
  l?: number;
  m?: number;
  s?: number;
  xs?: number;
  mobile?: number;
  children?: ReactNode;
  grid?: number;
  className?: string;
}

interface StylesOptions {
  col: ColumnProps["col"];
  xl: ColumnProps["xl"];
  l: ColumnProps["l"];
  m: ColumnProps["m"];
  s: ColumnProps["s"];
  xs: ColumnProps["xs"];
  mobile: ColumnProps["mobile"];
  grid: ColumnProps["grid"];
}

const Column = memo(
  ({
    col,
    children,
    grid,
    xl,
    l,
    m,
    s,
    xs,
    mobile,
    className,
  }: ColumnProps) => {
    const stylesOptions: StylesOptions = {
      col,
      grid,
      xl,
      l,
      m,
      s,
      xs,
      mobile,
    };
    const classes = useStyles(stylesOptions);
    return (
      <div className={classNames(classes.column, className)}>{children}</div>
    );
  }
);

export default Column;
