module.exports = function(grunt, demoTsOptions) {
  return {
	default: {
		files: ['lib/**/*.ts'],
		tasks: ['default']
	},
	options: {
		spawn: false,
		livereload: 35729
	}
  }
}