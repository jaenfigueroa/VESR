module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-vers`
  extends: ["vers"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
