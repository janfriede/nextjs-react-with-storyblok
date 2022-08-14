import React, { memo } from "react";
import { createUseStyles } from "react-jss";
import {
  blockTitle,
  blockWrapper,
  contentWithIconWrapper,
  icon,
} from "../../../style/style";
import Separator from "../../Separator";
import {
  mediaMaxLargeMobile,
  mediaMinLargeMobileMaxMediumTablet,
  mediaMinLargeMobileMaxTablet,
  mediaMinMediumTablet,
  mediaMinMediumTabletMaxLargeTablet,
} from "../../../style/responsive";
import { useTranslation } from "react-i18next";
import {
  ExpectationItemStoryblok,
  ExpectationTypeItemStoryblok,
} from "../../../types/storyblok";
import Image from "next/image";

const useStyles = createUseStyles({
  whatExpectBlockWrapper: {
    ...blockWrapper,
  },
  whatExpectTop: {
    display: "grid",
    gridColumn: 2,
    [mediaMinMediumTablet]: {
      gridTemplateColumns: "70% 1fr",
    },
  },
  whatExpectTopContent: {
    marginBottom: 50,
  },
  whatExpectTitle: {
    ...blockTitle,
  },
  whatExpectBottom: {
    display: "grid",
    gridColumn: 2,
    gridTemplateRows: "1fr",
    gridRowGap: 100,
    gridTemplateColumns: `repeat(3, ${(1 / 3) * 100}%)`,
    [mediaMinLargeMobileMaxMediumTablet]: {
      gridTemplateRows: "1fr 1fr",
      gridTemplateColumns: `repeat(2, 50%)`,
    },
    [mediaMaxLargeMobile]: {
      gridTemplateColumns: "100%",
      gridRowGap: 30,
    },
  },
  ...contentWithIconWrapper,
});

export interface WhatExpectProps {
  data?: ExpectationItemStoryblok;
}

interface StylesOptions {}

const WhatExpect = memo(({ data }: WhatExpectProps) => {
  const { t } = useTranslation("whatExpect");
  const stylesOptions: StylesOptions = {};
  const classes = useStyles(stylesOptions);

  if (!data) {
    throw Error;
  }

  const { title, description, expectationItems } = data;
  return (
    <div className={classes.whatExpectBlockWrapper}>
      <div className={classes.whatExpectTop}>
        <div className={classes.whatExpectTopContent}>
          <Separator />
          <h2 className={classes.whatExpectTitle}>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={classes.whatExpectBottom}>
        {expectationItems.map((item: ExpectationTypeItemStoryblok) => {
          const { _uid, title, description, icon } = item;
          return (
            <React.Fragment key={_uid}>
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
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
});

export default WhatExpect;
