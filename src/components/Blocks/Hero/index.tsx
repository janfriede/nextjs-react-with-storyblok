import React, { memo } from "react";
import { createUseStyles } from "react-jss";
import {
  mediaMinDesktop,
  mediaMinLargeTablet,
  mediaMinLargeTabletMaxDesktop,
} from "../../../style/responsive";
import { primary } from "../../../style/colors";
import { blockWrapper } from "../../../style/style";
import { HeadingItemStoryblok } from "../../../types/storyblok";
import { TypeAnimation } from "react-type-animation";

const useStyles = createUseStyles({
  heroBlockWrapper: {
    aspectRatio: "16 / 8",
    ...blockWrapper,
  },
  heroBlockInnerWrapper: {
    gridColumn: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heroName: {
    color: primary,
    gridRow: 2,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "1em",
    margin: 0,
    fontWeight: "bold",
    [mediaMinLargeTablet]: {
      fontSize: "1.5em",
    },
  },
  heroTitle: {
    gridRow: 3,
    margin: "2rem 0",
    textAlign: "center",
    fontSize: 26,
    [mediaMinDesktop]: {
      fontSize: 56,
    },
    [mediaMinLargeTabletMaxDesktop]: {
      fontSize: 48,
    },
  },
  heroSentence: {
    maxWidth: "50ch",
    gridRow: 4,
    margin: "0 auto",
    textAlign: "center",
    fontWeight: "bold",
  },
});

interface HeroProps {
  data?: HeadingItemStoryblok;
}

interface StylesOptions {}

const Hero = memo(({ data }: HeroProps) => {
  const stylesOptions: StylesOptions = {};
  const classes = useStyles(stylesOptions);

  if (!data) {
    throw Error;
  }

  const { preview, title, subtitle } = data;

  return (
    <div className={classes.heroBlockWrapper}>
      <div className={classes.heroBlockInnerWrapper}>
        <p className={classes.heroName}>{preview}</p>
        <h1 className={classes.heroTitle}>{title}</h1>
        <TypeAnimation
          sequence={[subtitle]}
          speed={25}
          wrapper="p"
          className={classes.heroSentence}
        />
      </div>
    </div>
  );
});

export default Hero;
