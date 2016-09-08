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
				banner: '/*\n <%= pkg.name %> \n Gabriel Hubermann | Hubermann.com | Buenosweb.com \n e: hubermann@gmail.com \n <%= grunt.template.today("yyyy-mm-dd") %> \n */\n'
			},
			build: {
				files: {
					'dist/js/main.min.js': 'src/**/*.js'
				}
			}
		},

		//compilar css com less
		less: {
			build: {
				files:{
					//vamos a compilar 'src/css/main.less' >> 'dist/css/styles.css'
					'dist/css/styles.css': 'src/css/main.less'
				}
			}
		},

		// cssmin
		cssmin: {
			options: {
				banner: '/*\n <%= pkg.name %> \n Gabriel Hubermann | Hubermann.com | Buenosweb.com \n e: hubermann@gmail.com \n<%= grunt.template.today("yyyy-mm-dd") %> \n */\n'
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