import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import useMountTransition from "../utils/mountTransition";
import { NextPageContext } from "next";
import { loadStory } from "../utils/storyblok";
import Head from "next/head";
import Hero from "../components/Blocks/Hero";
import About from "../components/Blocks/About";
import Skills from "../components/Blocks/Skills";
import LatestProjects from "../components/Blocks/LatestProjects";
import WhatExpect from "../components/Blocks/WhatExpect";
import Contact from "../components/Blocks/Contact";
import Footer from "../components/Blocks/Footer";
import { HomeStory } from "../types/home";
import { StoryProps } from "../types";
import { mediaMinMediumTablet } from "../style/responsive";

const useStyles = createUseStyles({
  mainWrapper: {
    display: "flex",
    justifyContent: "space-around",
  },
  inner: {
    width: "90vw",
    maxWidth: 1600,
    [mediaMinMediumTablet]: {
      transition: "opacity 0.75s ease-in-out 0.25s",
      opacity: ({ opacity }: StylesOptions) => opacity,
    },
  },
});

interface StylesOptions {
  opacity: number;
}

Homepage.getInitialProps = async (context: NextPageContext) => {
  const story = await loadStory(context, "home");

  return {
    story,
  };
};

function Homepage({ story }: StoryProps<HomeStory>) {
  const [opacity, setOpacity] = useState<number>(0);
  const stylesOptions: StylesOptions = { opacity };
  const classes = useStyles(stylesOptions);
  const hasTransitionedIn = useMountTransition(500);

  useEffect(() => {
    if (hasTransitionedIn) {
      setOpacity(1);
    }
  }, [hasTransitionedIn]);

  if (!story) {
    return;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={story.content.metatags.description} />
        <title>{story.content.metatags.title}</title>
      </Head>
      <main className={classes.mainWrapper}>
        <div className={classes.inner}>
          <Hero data={story.content.header[0]} />
          <About data={story.content.about[0]} />
          <Skills data={story.content.technologies} />
          <LatestProjects data={story.content.lastProjects[0]} />
          <WhatExpect data={story.content.expectations[0]} />
          <Contact data={story.content.contact[0]} />
        </div>
      </main>
      <footer>
        <Footer data={story.content.footer[0]} />
      </footer>
    </>
  );
}

export default Homepage;
