import React, { memo } from "react";
import { createUseStyles } from "react-jss";
import {
  ContactIconStoryblok,
  ContactItemStoryblok,
} from "../../../types/storyblok";
import {
  blockTitle,
  blockWrapper,
  icon,
  iconWrapper,
} from "../../../style/style";
import {
  mediaMaxMediumTablet,
  mediaMinLargeTablet,
} from "../../../style/responsive";
import Separator from "../../Separator";
import { primary } from "../../../style/colors";
import { renderStoryblokRichText } from "../../../utils/storyblok";
import Image from "next/image";

const useStyles = createUseStyles({
  contactBlockWrapper: {
    ...blockWrapper,
  },
  contactBlockInnerWrapper: {
    gridColumn: 2,
  },
  contactTitleWrapper: {
    [mediaMaxMediumTablet]: {
      gridColumn: 2,
    },
  },
  contactTitle: {
    ...blockTitle,
    marginTop: 0,
  },
  contactSentence: {
    color: primary,
    textTransform: "uppercase",
  },
  contactContentWrapper: {
    borderRadius: 10,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    [mediaMinLargeTablet]: {
      gridTemplateColumns: "50% 50%",
    },
  },
  contactDescription: {
    marginBottom: 30,
  },
  socialIconWrapper: {
    display: "flex",
    gridGap: 10,
  },
  iconWrapper: {
    ...iconWrapper,
  },
  icon: {
    ...icon,
  },
});

export interface ContactProps {
  data?: ContactItemStoryblok;
}

interface StylesOptions {}

const Contact = memo(({ data }: ContactProps) => {
  const stylesOptions: StylesOptions = {};
  const classes = useStyles(stylesOptions);

  if (!data) {
    throw Error;
  }

  const { subtitle, title, description, icons } = data;

  return (
    <div className={classes.contactBlockWrapper}>
      <div className={classes.contactBlockInnerWrapper}>
        <div className={classes.contactTitleWrapper}>
          <Separator />
          <h3 className={classes.contactSentence}>{subtitle}</h3>
          <h2 className={classes.contactTitle}>{title}</h2>
        </div>
        <div className={classes.contactContentWrapper}>
          <div
            className={classes.contactDescription}
            dangerouslySetInnerHTML={{
              __html: renderStoryblokRichText(description),
            }}
          />
          <div className={classes.socialIconWrapper}>
            {icons.map((item: ContactIconStoryblok) => {
              const { icon, link, _uid } = item;

              return (
                <a key={_uid} href={link} target="_blank" aria-label={icon.alt}>
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
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
