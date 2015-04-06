//Gruntfile
module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({

        // Task configuration
        clean: ["app/dist/"],

        copy: {
            main: {
                files: [
                    //index.html file
                    {
                        cwd: 'app/',
                        src: 'index.html',
                        dest: 'app/dist/',
                        filter: 'isFile',
                        expand: true
                    },

                    //img folder
                    {
                        cwd: 'app/',
                        src: 'img/**',
                        dest: 'app/dist/',
                        expand: true
                    },

                    //modernizr file
                    {
                        cwd: 'bower_components/html5-boilerplate/dist/js/vendor/',  // set working folder / root to copy
                        src: 'modernizr-2.8.3.min.js',           // copy all files and subfolders
                        dest: 'app/dist/assets/',    // destination folder
                        expand: true           // required when using cwd
                    },

                    //fonts from font-awesome
                    {
                        cwd: 'bower_components/font-awesome/fonts/',  // set working folder / root to copy
                        src: '*',           // copy all files and subfolders
                        dest: 'app/dist/fonts/',    // destination folder
                        expand: true           // required when using cwd
                    }
                ]
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            js_files: {
                src: [
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './app/js/creative-brands/js/creative-brands.js',
                    './app/js/mersocarlin/app.js'
                ],
                dest: './app/dist/assets/mersocarlin.js'
            }
        },
        /*less: {
         //...
         },*/
        uglify: {
            options: {
                mangle: false  // Use if you want the names of your functions and variables unchanged
            },
            js: {
                files: {
                    //'./app/dist/assets/mersocarlin.js': './app/dist/assets/mersocarlin.js'
                }
            }
        },
        cssmin: {
            build: {
                files: {
                    './app/dist/assets/mersocarlin.css': [
                        './bower_components/html5-boilerplate/dist/css/normalize.css',
                        './bower_components/html5-boilerplate/dist/css/main.css',
                        './bower_components/bootstrap/dist/css/bootstrap.css',
                        './bower_components/font-awesome/css/font-awesome.css',
                        './app/js/creative-brands/css/animate.css',
                        './app/js/creative-brands/css/creative-brands.css',
                        './app/js/mersocarlin/app.css' ]
                }
            }
        },
        processhtml: {
            options: {
                // Task-specific options go here.
            },
            dist: {
                files: {
                    'app/dist/index.html': ['app/dist/index.html']
                }
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-stripcomments');


    // Task definition
    grunt.registerTask('mersocarlin', ['clean', 'copy', 'concat', 'uglify', 'cssmin', 'processhtml']);

};