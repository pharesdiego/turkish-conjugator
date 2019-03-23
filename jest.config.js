module.exports = {
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  testRegex: './src/test/.*\\.(test|spec)?\\.(ts)$',
  moduleFileExtensions: ['js', 'ts']
};