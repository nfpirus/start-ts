module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.loadTasks('./grunt/tasks');

	var demoTsOptions = JSON.parse(grunt.file.read('tsconfig.json')).compilerOptions;
	demoTsOptions.sourceMap = false;
	demoTsOptions.declaration = false;
	
	var options = {
		config : {
			src : "grunt/config/*.js"
		},
		demoTsOptions: demoTsOptions
	};
	
    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);
	
	grunt.registerTask('serve', ['default', 'connect', 'watch']);
    grunt.registerTask('default', ['tslint', 'ts']);
	grunt.registerTask('demo', ['tslint', 'ts:demo']);
}