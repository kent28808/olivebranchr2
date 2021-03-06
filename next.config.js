const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  images: {
    domains: ["tusd.tusdemo.net"],
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
});
