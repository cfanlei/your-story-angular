module.exports = {
  extends: ['stylelint-config-html', 'stylelint-config-standard', 'stylelint-config-prettier'],
  overrides: [
    {
      files: ['*.html', '**/*.html'],
      customSyntax: 'postcss-html',
      rules: {
        'block-no-empty': null,
        'no-descending-specificity': null,
      },
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        'block-no-empty': null,
      },
    },
  ],
  rules: {
    'block-no-empty': true,
    'no-empty-source': null,
  },
};
