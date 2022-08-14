import {
  mediaMaxLargeMobile,
  mediaMinDesktop,
  mediaMinLargeMobileMaxTablet,
  mediaMinLargeTabletMaxDesktop,
  mediaMinMediumTabletMaxLargeTablet,
  mediaMinTabletMaxLargeTablet,
} from "./responsive";
import { primary } from "./colors";

export const blockWrapper = {
  background: "transparent",
  marginBottom: "18rem",
  display: "grid",
  gridTemplateColumns: "1fr 70% 1fr",
  [mediaMinTabletMaxLargeTablet]: {
    gridTemplateColumns: "1fr 75% 1fr",
  },
  [mediaMaxLargeMobile]: {
    marginBottom: "10rem",
  },
};

// FONTS
export const RockSaltRegular = "RockSalt-Regular, sans-serif";
export const PoppinsLight = "Poppins-Light, sans-serif";

export const blockTitle = {
  fontSize: 26,
  [mediaMinDesktop]: {
    fontSize: 56,
  },
  [mediaMinLargeTabletMaxDesktop]: {
    fontSize: 48,
  },
};

export const shadowNormal = "0 .5rem 1rem rgba(0,0,0,.15)";
export const shadowLight = "0 .125rem .25rem rgba(0,0,0,.075)";

export const icon = {
  position: "relative",
  width: 50,
  height: 50,
};

export const contentWrapper = {
  display: "flex",
  flexDirection: "column",
  paddingRight: 50,
  [mediaMinMediumTabletMaxLargeTablet]: {
    paddingRight: 25,
  },
  [mediaMinLargeMobileMaxTablet]: {
    paddingRight: 25,
  },
  [mediaMaxLargeMobile]: {
    paddingRight: 0,
  },
};

export const iconWrapper = {
  position: "relative",
  background: primary,
  padding: 5,
  borderRadius: 22,
  width: 60,
  height: 60,
  boxShadow: shadowLight,
};

export const contentWithIconWrapper = {
  contentWrapper: {
    ...contentWrapper,
  },
  iconWrapper: {
    ...iconWrapper,
  },
  icon: {
    ...icon,
  },
};
