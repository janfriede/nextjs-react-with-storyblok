import React, { cloneElement, memo, ReactElement, ReactNode } from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles({
  row: {
    display: "flex",
    flexWrap: "wrap",
  },
  justify: {
    justifyContent: ({ justify }: StylesOptions) => {
      if (justify === "left") {
        return "end";
      }
      if (justify === "right") {
        return "flex-end";
      }
      return "center";
    },
  },
});

export interface RowProps {
  children?: ReactNode | ReactNode[];
  grid?: number;
  justify?: boolean | "center" | "left" | "right";
  className?: string;
}

interface StylesOptions {
  justify: RowProps["justify"];
}

const Row = memo(({ children, grid = 12, justify, className }: RowProps) => {
  const stylesOptions: StylesOptions = { justify };
  const classes = useStyles(stylesOptions);

  const columns = () => {
    if (children) {
      if (Array.isArray(children)) {
        return children
          .filter((item) => !!item)
          .map((item, key) =>
            cloneElement(item as ReactElement, { grid: grid, key: key })
          );
      } else {
        return cloneElement(children as ReactElement, { grid: grid });
      }
    }
    return null;
  };

  return (
    <div
      className={classNames(
        classes.row,
        { [classes.justify]: justify },
        className
      )}
    >
      {columns()}
    </div>
  );
});

export default Row;
