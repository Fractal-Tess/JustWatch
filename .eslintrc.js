module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-next`
  extends: ['next'],
  settings: {
    next: {
      // Update this to point to any next apps
      rootDir: ['apps/next'],
    },
  },
};
