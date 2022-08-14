import React, { cloneElement, memo, ReactElement, ReactNode } from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";
import {
  mediaMinLargeDesktop,
  mediaMinLargeTabletMaxLargeDesktop,
} from "../../../style/responsive";
import { useWindowSize, WindowSize } from "../../../utils/responsive";

const useStyles = createUseStyles({
  container: {
    margin: "auto",
    maxWidth: "100%",
    [mediaMinLargeDesktop]: {
      maxWidth: 1785,
    },
    [mediaMinLargeTabletMaxLargeDesktop]: {
      maxWidth: ({ windowSize }: StylesOptions) => {
        if (windowSize.width) {
          return windowSize.width * 0.9375;
        }
        return "100%";
      },
    },
  },
  fluid: {
    maxWidth: "100%",
  },
});

export interface ContainerProps {
  className?: string;
  children?: ReactNode | ReactNode[];
  fluid?: boolean;
}

interface StylesOptions {
  windowSize: WindowSize;
}

const Container = memo(({ children, fluid, className }: ContainerProps) => {
  const windowSize = useWindowSize();
  const stylesOptions: StylesOptions = { windowSize };
  const classes = useStyles(stylesOptions);

  const rows = () => {
    if (children) {
      if (Array.isArray(children)) {
        return children.map((item, key) =>
          cloneElement(item as ReactElement, { key: key })
        );
      } else {
        return cloneElement(children as ReactElement);
      }
    }
    return null;
  };

  return (
    <div
      className={classNames(
        classes.container,
        { [classes.fluid]: fluid },
        className
      )}
    >
      {rows()}
    </div>
  );
});

export default Container;
