import React from "react";
import Hero from "../components/Blocks/Hero";
import About from "../components/Blocks/About";
import Skills from "../components/Blocks/Skills";
import LatestProjects from "../components/Blocks/LatestProjects";
import WhatExpect from "../components/Blocks/WhatExpect";
import Contact from "../components/Blocks/Contact";

export interface PageBlock {
  name: string;
  to: string;
  component: any;
}

export const pageBlocks: PageBlock[] = [
  { name: "Home", to: "home", component: <Hero /> },
  { name: "AboutMe", to: "about", component: <About /> },
  { name: "Skills", to: "skills", component: <Skills /> },
  {
    name: "Latest projects",
    to: "latestProjects",
    component: <LatestProjects />,
  },
  { name: "WhatExpect", to: "whatExpect", component: <WhatExpect /> },
  { name: "ContactForm", to: "contactForm", component: <Contact /> },
];
