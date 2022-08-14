import React, { memo } from "react";
import { createUseStyles } from "react-jss";
import { blockWrapper, contentWithIconWrapper } from "../../../style/style";
import Image from "next/image";

import {
  mediaMaxLargeMobile,
  mediaMinLargeMobileMaxMediumTablet,
} from "../../../style/responsive";
import { useTranslation } from "react-i18next";
import { TechnologyTypeStoryblok } from "../../../types/storyblok";

const useStyles = createUseStyles({
  skillsBlockWrapper: {
    ...blockWrapper,
    [mediaMaxLargeMobile]: {
      margin: [50, 0],
    },
  },
  skillsBlockInnerWrapper: {
    display: "grid",
    gridColumn: 2,
    gridTemplateRows: "1fr 1fr",
    gridRowGap: 100,
    gridTemplateColumns: `repeat(3, ${(1 / 3) * 100}%)`,
    [mediaMinLargeMobileMaxMediumTablet]: {
      gridTemplateRows: "1fr 1fr 1fr",
      gridTemplateColumns: `repeat(2, 50%)`,
    },
    [mediaMaxLargeMobile]: {
      gridTemplateRows: "repeat(6, 1fr)",
      gridTemplateColumns: "100%",
      gridRowGap: 30,
    },
  },
  ...contentWithIconWrapper,
});

export interface SkillsProps {
  data?: TechnologyTypeStoryblok[];
}

interface StylesOptions {}

const Skills = memo(({ data }: SkillsProps) => {
  const { t } = useTranslation("skills");
  const stylesOptions: StylesOptions = {};
  const classes = useStyles(stylesOptions);

  if (!data) {
    throw Error;
  }

  return (
    <div className={classes.skillsBlockWrapper}>
      <div className={classes.skillsBlockInnerWrapper}>
        {data.map((item) => {
          const { description, icon, name } = item;
          return (
            <React.Fragment key={name}>
              <div className={classes.contentWrapper}>
                <div className={classes.iconWrapper}>
                  <div className={classes.icon}>
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={icon.filename}
                      alt={icon.alt}
                    />
                  </div>
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
});

export default Skills;
