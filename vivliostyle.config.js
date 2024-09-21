const TITLE = 'Vivliostyle Base';

module.exports = {
  title: TITLE,
  author: 'kubosho',
  language: 'ja',
  size: 'JIS-B5',
  theme: '@o2project/vivliostyle-theme-o2project',
  entry: ['./entries/introduction.md'],
  output: [
    {
      path: `./dist/pdf/${TITLE}.pdf`,
      format: 'pdf',
    },
    {
      path: './dist/webpub/',
      format: 'webpub',
    },
  ],
  workspaceDir: '.temp',
  toc: {
    title: '目次',
  },
  vfm: {
    hardLineBreaks: true,
  },
};
