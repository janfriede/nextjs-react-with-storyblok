module.exports = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["a.storyblok.com"],
  },
  i18n: {
    locales: ["cs"],
    defaultLocale: "cs",
  },
};
