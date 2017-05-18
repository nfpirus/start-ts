module.exports = function(grunt, demoTsOptions) {
  return {
	options: {
	  configuration: grunt.file.readJSON('tslint.json'),
	  rulesDirectory: ['node_modules/vrsource-tslint-rules/rules/']
	},
	files: {
	  src: [
		'lib/**/*.ts',
		'demo/**/*.ts'
	  ]
	}
  }
}