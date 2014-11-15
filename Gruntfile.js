module.exports = function (grunt) {

  'use strict';

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    /*
     * Read options from external JSON files
     */
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      options: {
        livereload: true,
        open: false,
        hostname: '*',
        port: 3000,
        useAvailablePort: true
      },
      main: {
        options: {
          base: 'src'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },

      html: {
        files: ['src/**/*.html']
      },

      css: {
        files: ['src/**/*.css']
      },

      js: {
        files: ['src/**/*.js']
      }
    }

  });

  grunt.registerTask('serve', ['connect', 'watch']);
}
