const webpack= require('./webpack.config.js');
webpack.entry = {};

module.exports = function(config) {
  config.set({
    webpack,
    port: 9876,
    colors: true,
    basePath: '',
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    frameworks: ['jasmine'],
    reporters: ['mocha'],
    browsers: ['PhantomJS'],
    logLevel: config.LOG_INFO,
    preprocessors: {
      'test/**/*-test.js': ['webpack'],
      'app/index.js': ['webpack'],
    },
    files: [
      'app/index.js',
      'test/**/*-test.js',
    ],
  });
};
