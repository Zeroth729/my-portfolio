module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/_index.scss";',
      },
    },
  },
};
