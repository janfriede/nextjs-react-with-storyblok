import React, { memo } from "react";
import { createUseStyles } from "react-jss";
import { blockTitle, blockWrapper } from "../../../style/style";
import {
  mediaMaxLargeMobile,
  mediaMaxMediumTablet,
  mediaMinMediumTablet,
} from "../../../style/responsive";
import Separator from "../../Separator";
import ProjectCard from "../../ProjectCard";
import { useTranslation } from "react-i18next";
import { primary } from "../../../style/colors";
import {
  LastProjectsItemStoryblok,
  ProjectItemStoryblok,
  ProjectTechnologyItemStoryblok,
} from "../../../types/storyblok";
import { renderStoryblokRichText } from "../../../utils/storyblok";

const useStyles = createUseStyles({
  latestProjectsBlockWrapper: {
    ...blockWrapper,
  },
  latestProjectsTop: {
    display: "grid",
    gridColumn: 2,
    [mediaMinMediumTablet]: {
      gridTemplateColumns: "70% 1fr",
    },
  },
  latestProjectsTopContent: {
    "& b": {
      color: primary,
    },
  },
  latestProjectsTitle: {
    ...blockTitle,
  },
  latestProjectsCards: {
    gridColumn: 2,
    display: "grid",
    marginTop: 30,
    [mediaMaxMediumTablet]: {
      gridTemplateColumns: "100%",
    },
  },
});

export interface LatestProjectsProps {
  data?: LastProjectsItemStoryblok;
}

interface StylesOptions {}

const LatestProjects = memo(({ data }: LatestProjectsProps) => {
  const { t } = useTranslation("latestProjects");
  const stylesOptions: StylesOptions = {};
  const classes = useStyles(stylesOptions);

  if (!data) {
    throw Error;
  }

  const { title, description, projects } = data;

  return (
    <div className={classes.latestProjectsBlockWrapper}>
      <div className={classes.latestProjectsTop}>
        <div className={classes.latestProjectsTopContent}>
          <Separator />
          <h2 className={classes.latestProjectsTitle}>{title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: renderStoryblokRichText(description),
            }}
          />
        </div>
      </div>
      <div className={classes.latestProjectsCards}>
        {projects.map((project: ProjectItemStoryblok) => {
          const {
            banner,
            description,
            link,
            logo,
            subtitle,
            technologies,
            title,
            _uid,
          } = project;

          return (
            <React.Fragment key={_uid}>
              <ProjectCard
                title={title}
                description={description}
                position={subtitle}
                logo={logo.filename}
                logoAlt={logo.alt}
                images={banner.map((img) => img.filename)}
                imageAlt="project_image"
                technology={technologies.map(
                  (tech: ProjectTechnologyItemStoryblok) => tech.title
                )}
                url={link}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
});

export default LatestProjects;
