module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/*spec.js',
      'routes/*.js'
    ],
    plugins :[
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],
    exclude: [],
    preprocessors: { 'routes/*.js': 'coverage' },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    coverageReporter: {
    reporters: [
      { type : 'lcov', dir : 'coverage/' },
      { type: 'text-summary' }
    ]
  }
});
};
