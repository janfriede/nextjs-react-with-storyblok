export const largeDesktopMin = 1904;
export const largeDesktopMax = 1903.99;
export const desktopMin = 1264;
export const desktopMax = 1263.99;
export const largeTabletMin = 960;
export const largeTabletMax = 959.99;
export const mediumTabletMin = 768;
export const mediumTabletMax = 767.99;
export const tabletMin = 600;
export const tabletMax = 599.99;
export const largeMobileMin = 480;
export const largeMobileMax = 479.99;
export const mobileMin = 320;

export const mediaMinLargeDesktop = `@media (min-width: ${largeDesktopMin}px)`;
export const mediaMaxLargeDesktop = `@media (max-width: ${largeDesktopMax}px)`;
export const mediaMinDesktop = `@media (min-width: ${desktopMin}px)`;
export const mediaMaxDesktop = `@media (max-width: ${desktopMax}px)`;
export const mediaMinLargeTablet = `@media (min-width: ${largeTabletMin}px)`;
export const mediaMaxLargeTablet = `@media (max-width: ${largeTabletMax}px)`;
export const mediaMinMediumTablet = `@media (min-width: ${mediumTabletMin}px)`;
export const mediaMaxMediumTablet = `@media (max-width: ${mediumTabletMax}px)`;
export const mediaMinTablet = `@media (min-width: ${tabletMin}px)`;
export const mediaMaxTablet = `@media (max-width: ${tabletMax}px)`;
export const mediaMinLargeMobile = `@media (max-width: ${largeMobileMin}px)`;
export const mediaMaxLargeMobile = `@media (max-width: ${largeMobileMax}px)`;
export const mediaMinMobile = `@media (max-width: ${mobileMin}px)`;

export const mediaMinDesktopMaxLargeDesktop = `@media screen and (min-width: ${desktopMin}px) and (max-width: ${largeDesktopMax}px)`;
export const mediaMinLargeTabletMaxLargeDesktop = `@media (min-width: ${largeTabletMin}px) and (max-width: ${largeDesktopMax}px)`;
export const mediaMinLargeTabletMaxDesktop = `@media (min-width: ${largeTabletMin}px) and (max-width: ${desktopMax}px)`;
export const mediaMinTabletMaxDesktop = `@media (min-width: ${tabletMin}px) and (max-width: ${desktopMax}px)`;
export const mediaMinMediumTabletMaxLargeTablet = `@media (min-width: ${mediumTabletMin}px) and (max-width: ${largeTabletMax}px)`;
export const mediaMinTabletMaxLargeTablet = `@media (min-width: ${tabletMin}px) and (max-width: ${largeTabletMax}px)`;
export const mediaMinLargeMobileMaxMediumTablet = `@media (min-width: ${largeMobileMin}px) and (max-width: ${mediumTabletMax}px)`;
export const mediaMinLargeMobileMaxTablet = `@media (min-width: ${largeMobileMin}px) and (max-width: ${tabletMax}px)`;
