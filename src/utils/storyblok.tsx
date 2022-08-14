import { NextPageContext } from "next";
import StoryblokService from "./storyblok-service";

import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "7y0bcWmGnLRrQxL2JzdnLwtt",
});

export const renderStoryblokRichText = (document: any) => {
  return Storyblok.richTextResolver.render(document);
};

export const loadStory = async (
  context: NextPageContext,
  path: string,
  language = "en"
) => {
  const { query } = context;

  StoryblokService.setQuery(query);

  const response = await StoryblokService.get(
    `cdn/stories/${path}?language=${language}`
  );

  return response.data.story;
};
