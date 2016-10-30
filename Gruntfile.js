'use strict';
module.exports = function(grunt) {
  // Load Grunt Tasks
  require('load-grunt-tasks')(grunt);

  // Initialize the Grunt object
  grunt.config.init({
    pkg: grunt.file.readJSON('package.json')
  });

  // Merge Style Tasks
  grunt.config.merge({
    // Compile Sass
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/app.css': 'assets/stylesheets/base.scss'
        }
      }
    },

    // LiveReload
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Local Server
  grunt.config.merge({
    connect: {
      server: {
        options: {
          keepalive : true
        }
      }
    }
  });

  // Register Tasks
  grunt.registerTask('default', ['sass', 'watch']);
};