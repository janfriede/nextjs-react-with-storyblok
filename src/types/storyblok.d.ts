export interface AboutItemStoryblok {
  title: string;
  description: string;
  quote: string;
  avatar: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  _uid: string;
  component: "About Item";
  [k: string]: any;
}

export interface ContactIconStoryblok {
  icon: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  link: string;
  _uid: string;
  component: "Contact Icon";
  [k: string]: any;
}

export interface ContactItemStoryblok {
  subtitle: string;
  title: string;
  description: any;
  icons: any[];
  _uid: string;
  component: "Contact Item";
  [k: string]: any;
}

export interface ExpectationItemStoryblok {
  title: string;
  description: string;
  expectationItems: any[];
  _uid: string;
  component: "Expectation Item";
  [k: string]: any;
}

export interface ExpectationTypeItemStoryblok {
  icon: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  title: string;
  description: string;
  _uid: string;
  component: "Expectation Type Item";
  [k: string]: any;
}

export interface FooterItemStoryblok {
  text?: string;
  _uid: string;
  component: "Footer Item";
  [k: string]: any;
}

export interface HeadingItemStoryblok {
  preview: string;
  title: string;
  subtitle: string;
  _uid: string;
  component: "Heading Item";
  [k: string]: any;
}

export interface HeadingSubtitleItemStoryblok {
  text?: string;
  _uid: string;
  component: "Heading Subtitle Item";
  [k: string]: any;
}

export interface HomeStoryblok {
  _uid: string;
  component: "home";
  [k: string]: any;
}

export interface LastProjectsItemStoryblok {
  title: string;
  description: any;
  projects: any[];
  _uid: string;
  component: "Last Projects Item";
  [k: string]: any;
}

export interface PageStoryblok {
  header?: any[];
  about?: any[];
  technologies?: any[];
  lastProjects?: any[];
  expectations?: any[];
  contact?: any[];
  footer?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface ProjectItemStoryblok {
  logo: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  banner: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  }[];
  title: string;
  subtitle: string;
  technologies: any[];
  description: string;
  link: string;
  _uid: string;
  component: "Project Item";
  [k: string]: any;
}

export interface ProjectTechnologyItemStoryblok {
  title: string;
  _uid: string;
  component: "Project Technology Item";
  [k: string]: any;
}

export interface TechnologyItemStoryblok {
  _uid: string;
  component: "Technology Item";
  [k: string]: any;
}

export interface TechnologyTypeStoryblok {
  icon: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  name: string;
  description: string;
  _uid: string;
  component: "TechnologyType";
  [k: string]: any;
}
