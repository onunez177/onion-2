module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      i: {
        files: {
         'build/i.min.css': [
            'styl/*.styl'
          ]
        }
      }
    },
    watch: {
      stylus: {
        files: [
         'styl/*.styl'
        ],
        tasks: [
         'stylus'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
   'stylus'
  ]);
};
