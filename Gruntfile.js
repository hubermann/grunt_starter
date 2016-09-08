module.exports = function(grunt){

	grunt.initConfig({ 
		
		pkg: grunt.file.readJSON('package.json'),

		//validar JS
		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},

			build: ['Gruntfile.js', 'src/**/*.js'],
		},

		//minificar con uglify
		uglify: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n */\n'
			},
			build: {
				files: {
					'dist/js/magic.min.js': 'src/**/*.js'
				}
			}
		},

		//compilar css com less
		less: {
			build: {
				files:{
					//vamos a compilar 'src/css/pretty.less' >> 'dist/css/pretty.css'
					'dist/css/pretty.css': 'src/css/pretty.less'
				}
			}
		},

		// cssmin
		cssmin: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n */\n'
			},
			build: {
				files: {
					'dist/css/style.min.css': 'dist/**/*.css'
				}
			}
		}

	});

	//levantar modulos 
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//todas las tareas en una
	grunt.registerTask('default', ['jshint', 'uglify', 'less', 'cssmin']); 

};