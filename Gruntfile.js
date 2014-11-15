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
          base: 'dist'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },

      html: {
        files: ['dist/**/*.html']
      },

      css: {
        files: ['dist/**/*.css']
      },

      js: {
        files: ['dist/**/*.js']
      }
    }

  });

  grunt.registerTask('serve', ['connect', 'watch']);
}
