module.exports = {
  endOfLine: 'auto',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.md'],
      options: {
        parser: 'markdown-nocjsp',
      },
    },
  ],
};
