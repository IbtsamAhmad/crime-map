const path = require("path");
module.exports = (phase) => {
  const env = {
    SITE_URL: process.env.SITE_URL
  };
  return {
    env,
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
      });

      return config;
    },
  };
};
