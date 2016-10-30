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
          'tmp/compiled.css': 'assets/stylesheets/base.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')
        ]
      },
      dist: {
        files: {
          'dist/app.css': 'tmp/compiled.css'
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
        tasks: ['sass', 'postcss', 'clean'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Clean
  grunt.config.merge({
    clean: ['tmp']
  });

  // Register Tasks
  grunt.registerTask('default', ['sass', 'postcss', 'clean', 'watch']);
};