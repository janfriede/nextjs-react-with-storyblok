import React, { memo, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { primary, primaryLight } from "../../style/colors";
import { shadowLight } from "../../style/style";
import classNames from "classnames";
import { mediaMaxLargeMobile } from "../../style/responsive";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const useStyles = createUseStyles({
  project: {
    margin: [20, 20, 70, 0],
    [mediaMaxLargeMobile]: {
      margin: [20, 0],
    },
  },
  projectCard: {
    borderRadius: 5,
    background: "#fff",
    boxShadow: shadowLight,
    display: "flex",
    flexDirection: "column",
    margin: [10, 0],
  },
  projectLogoWrapper: {
    color: "#fff",
    height: 30,
    width: 100,
    borderRadius: [5, 5, 0, 0],
    margin: [10, 0, 0, 10],
    position: "relative",
  },
  projectLogo: {
    height: "100%",
  },
  projectContent: {
    borderRadius: [0, 0, 5, 5],
    margin: [0, 20, 25],
    position: "relative",
    display: "grid",
    gridTemplateRows: "1fr",
    alignItems: "center",
    aspectRatio: "1578 / 777",
  },
  projectImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  },
  projectContentText: {
    display: "grid",
    gridTemplateRows: "1fr",
    marginTop: 15,
    "& a": {
      color: primary,
      textDecoration: "none",
    },
  },
  projectPosition: {
    gridRow: 1,
    lineHeight: 1,
    marginBottom: 0,
  },
  projectTitle: {
    gridRow: 2,
    marginBottom: "1em",
    fontSize: 11,
  },
  projectTechnology: {
    gridRow: 3,
    marginBottom: 20,
    "& h4": {
      display: "inline-block",
      fontSize: 14,
      marginRight: 5,
    },
  },
  projectTechnologyItem: {
    display: "inline-block",
    color: primary,
    background: primaryLight,
    borderRadius: 15,
    fontSize: 14,
    padding: [2, 5],
    marginRight: 5,
  },
  projectDescription: {
    gridRow: 4,
    fontSize: 12,
  },
});

interface StylesOptions {}

export interface ProjectCardProps {
  title: string;
  logo: string;
  logoAlt?: string;
  images: string[];
  imageAlt: string;
  position: string;
  technology: string[];
  url: string;
}

interface Props extends ProjectCardProps {
  className?: string;
  description: string;
}

const ProjectCard = memo(
  ({
    title,
    logo,
    logoAlt,
    images,
    imageAlt,
    position,
    description,
    className,
    technology,
    url,
  }: Props) => {
    let changeImageKeyInterval: ReturnType<typeof setInterval>;
    const { t } = useTranslation("latestProjects");
    const stylesOptions: StylesOptions = {};
    const classes = useStyles(stylesOptions);

    const [firstImage, setFirstImage] = useState<boolean>(true);

    useEffect(() => {
      updateKey();

      return () => clearInterval(changeImageKeyInterval);
    }, []);

    const updateKey = () => {
      if (changeImageKeyInterval) {
        return;
      }
      changeImageKeyInterval = setInterval(() => {
        setFirstImage((prevState) => !prevState);
      }, 8000);
    };

    return (
      <div className={classNames(classes.project, className)}>
        <div className={classNames(classes.projectCard)}>
          <div className={classes.projectLogoWrapper}>
            <Image
              layout="fill"
              objectFit="contain"
              src={logo}
              alt={logoAlt}
              className={classes.projectLogo}
            />
          </div>
          <div className={classes.projectContent}>
            <Image
              layout="fill"
              objectFit="contain"
              src={images[firstImage ? 0 : 1]}
              alt={imageAlt}
              className={classes.projectImage}
            />
            {/*<img*/}
            {/*  src={images[firstImage ? 0 : 1]}*/}
            {/*  alt={imageAlt}*/}
            {/*  className={classes.projectImage}*/}
            {/*/>*/}
          </div>
        </div>
        <div className={classes.projectContentText}>
          <h3 className={classes.projectPosition}>{position}</h3>
          <small className={classes.projectTitle}>{title}</small>
          <div className={classes.projectTechnology}>
            <h4>Technologie:</h4>
            {technology.map((item) => (
              <div className={classes.projectTechnologyItem} key={item}>
                {item}
              </div>
            ))}
          </div>
          <div className={classes.projectDescription}>{description}</div>
        </div>
        <div className={classes.projectContentText}>
          <a href={url} target="_blank">
            Více o aplikaci zde
          </a>
        </div>
      </div>
    );
  }
);

export default ProjectCard;
