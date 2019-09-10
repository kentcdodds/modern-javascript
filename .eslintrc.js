module.exports = {
  extends: ['kentcdodds', 'kentcdodds/import', 'kentcdodds/jest'],
  rules: {
    'no-console': 'off',
    'jest/no-disabled-tests': 'off',
  },
  settings: {
    'import/resolver': {
      jest: {
        jestConfigFile: './jest.config.js',
      },
    },
  },
  overrides: [
    {
      files: ['**/exercise.js'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
    {
      files: ['**/quiz.js'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
}
