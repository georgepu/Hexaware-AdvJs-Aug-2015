module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/vendor/angular.js',
      'app/vendor/angular-route.js',
      'app/vendor/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js',
      'app/greet/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
