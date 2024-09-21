const TITLE = 'Vivliostyle Base';

const pdfConfig = {
  path: `./dist/pdf/${TITLE}.pdf`,
  format: 'pdf',
};
const webpubConfig = {
  path: './dist/webpub/',
  format: 'webpub',
};

const output =
  process.env.PRESS_ONLY === 'true' ? [{ ...pdfConfig, path: `./dist/press/${TITLE}.pdf` }] : [pdfConfig, webpubConfig];

module.exports = {
  title: TITLE,
  author: 'kubosho',
  language: 'ja',
  size: 'JIS-B5',
  theme: '@o2project/vivliostyle-theme-o2project',
  entry: ['./entries/introduction.md'],
  output,
  workspaceDir: '.temp',
  toc: {
    title: '目次',
  },
  vfm: {
    hardLineBreaks: true,
  },
};
