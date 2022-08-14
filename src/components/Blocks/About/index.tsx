import React, { memo } from "react";
import { createUseStyles } from "react-jss";
import {
  blockTitle,
  blockWrapper,
  RockSaltRegular,
} from "../../../style/style";
import Separator from "../../Separator";
import { mediaMinLargeTablet } from "../../../style/responsive";
import { primary } from "../../../style/colors";
import { useTranslation } from "react-i18next";
import { AboutItemStoryblok } from "../../../types/storyblok";
import Image from "next/image";

const useStyles = createUseStyles({
  aboutBlockWrapper: {
    ...blockWrapper,
  },
  aboutBlockInnerWrapper: {
    display: "grid",
    gridColumn: 2,
    [mediaMinLargeTablet]: {
      gridTemplateColumns: "60% 40%",
    },
  },
  aboutContent: {
    paddingRight: 50,
  },
  aboutProfile: {
    textAlign: "center",
    position: "relative",
    width: 200,
    height: 200,
    marginTop: 50,
    [mediaMinLargeTablet]: {
      height: 300,
      width: 300,
      marginTop: 0,
    },
  },
  profile: {
    borderRadius: "30%",
  },
  aboutTitle: {
    ...blockTitle,
  },
  aboutSentence: {
    color: primary,
    fontFamily: RockSaltRegular,
  },
});

export interface AboutProps {
  data?: AboutItemStoryblok;
}

interface StylesOptions {}

const About = memo(({ data }: AboutProps) => {
  const { t } = useTranslation("aboutMe");
  const stylesOptions: StylesOptions = {};
  const classes = useStyles(stylesOptions);

  if (!data) {
    throw Error;
  }

  const { title, description, quote, avatar } = data;

  return (
    <div className={classes.aboutBlockWrapper}>
      <div className={classes.aboutBlockInnerWrapper}>
        <div className={classes.aboutContent}>
          <Separator />
          <h2 className={classes.aboutTitle}>{title}</h2>
          <p>{description}</p>
          <span className={classes.aboutSentence}>{quote}</span>
        </div>
        <div className={classes.aboutProfile}>
          <Image
            layout="fill"
            objectFit="contain"
            src={avatar.filename}
            alt={avatar.alt}
            priority={true}
            className={classes.profile}
          />
        </div>
      </div>
    </div>
  );
});

export default About;
