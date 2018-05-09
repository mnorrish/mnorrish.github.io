module.exports = {
  server: {
    command: "npm run serve:static",
    port: 8080,
    debug: true,
  },
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== "false",
  },
};
