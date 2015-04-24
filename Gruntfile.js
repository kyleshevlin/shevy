module.exports = function(grunt) {
  // Requires
  require('load-grunt-tasks')(grunt);

  // Empty init allows us to merge by feature, not by function
  grunt.config.init({
    pkg: grunt.file.readJSON('package.json')
  });

  // Local Server
  grunt.config.merge({
    connect: {
      server: {
        options: {
          base      : 'demo',
          keepalive : true
        }
      }
    }
  });

  // Style config
  grunt.config.merge({
    autoprefixer: {
      dist: {
        files: {
          'demo/dist/style.css': 'demo/css/style.css'
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'demo/css/style.css': 'demo/scss/style.scss'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'autoprefixer'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Register Tasks
  grunt.registerTask('default', ['sass', 'autoprefixer', 'watch']);
};
