import React, { memo } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({});

export interface ComponentTemplateProps {}

interface StylesOptions {}

const ComponentTemplate = memo(({}: ComponentTemplateProps) => {
  const stylesOptions: StylesOptions = {};
  const classes = useStyles(stylesOptions);
  return <div>content</div>;
});

export default ComponentTemplate;
