module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://agile-tor-99890.herokuapp.com/"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
