import { memo } from "react";
import { FooterItemStoryblok } from "../../../types/storyblok";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3rem",
  },
});

export interface FooterProps {
  data: FooterItemStoryblok;
}

interface StylesOptions {}

const Footer = memo(({ data }: FooterProps) => {
  const stylesOptions: StylesOptions = {};
  const classes = useStyles(stylesOptions);
  const { text } = data;

  return <div className={classes.footer}>{text}</div>;
});

export default Footer;
