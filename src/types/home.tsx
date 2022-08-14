import {
  AboutItemStoryblok,
  ContactItemStoryblok,
  ExpectationItemStoryblok,
  FooterItemStoryblok,
  HeadingItemStoryblok,
  LastProjectsItemStoryblok,
  TechnologyTypeStoryblok,
} from "./storyblok";

export interface HomeStory {
  content: {
    header: HeadingItemStoryblok[];
    about: AboutItemStoryblok[];
    technologies: TechnologyTypeStoryblok[];
    lastProjects: LastProjectsItemStoryblok[];
    expectations: ExpectationItemStoryblok[];
    contact: ContactItemStoryblok[];
    footer: FooterItemStoryblok[];
    metatags: {
      _uid: string;
      component: "meta-fields";
      title: string;
      description: string;
    };
  };
}
