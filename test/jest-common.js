const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '../src'),
  testEnvironment: 'node',
  moduleDirectories: [
    'node_modules',
    __dirname,
    path.join(__dirname, '../src'),
  ],
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
}
