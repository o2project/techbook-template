module.exports = {
  title: "Vivliostyle Base",
  author: "kubosho",
  language: "ja",
  size: "JIS-B5",
  theme: '@o2project/vivliostyle-theme-o2project',
  entry: [
    "./entries/introduction.md",
  ],
  output: [
    {
      path: "./out/pdf",
      format: "pdf",
    },
    {
      path: "./out/webpub",
      format: "webpub",
    },
  ],
  workspaceDir: ".temp",
  toc: true,
  tocTitle: '目次',
  vfm: {
    hardLineBreaks: true,
  },
};
