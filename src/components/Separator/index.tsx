import React, { memo } from "react";
import { createUseStyles } from "react-jss";
import { primary } from "../../style/colors";

const useStyles = createUseStyles({
  separator: {
    border: "none",
    "&:before": {
      content: "''",
      display: "inline-block",
      width: "2rem",
      height: 5,
      borderTop: `solid 5px ${primary}`,
      marginTop: -2.5,
    },
  },
});

export interface SeparatorProps {}

interface StylesOptions {}

const Separator = memo(({}: SeparatorProps) => {
  const stylesOptions: StylesOptions = {};
  const classes = useStyles(stylesOptions);
  return <hr className={classes.separator} />;
});

export default Separator;
