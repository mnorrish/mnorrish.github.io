module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Matthew Norrish | Software Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "msvalidate.01", content: "4A176D1DBACD7F686445A6E2F3269816" },
    ],
    link: [{ rel: "canonical", href: "http://mnorrish.co.nz" }],
    script: [
      {
        type: "text/javascript",
        src: "https://www.googletagmanager.com/gtag/js?id=UA-33183970-1",
        async: true,
      },
      {
        type: "text/javascript",
        innerHTML:
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-33183970-1');",
      },
    ],
    __dangerouslyDisableSanitizers: ["script"],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {},
};
