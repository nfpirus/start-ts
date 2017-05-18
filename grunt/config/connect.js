module.exports = function(grunt, demoTsOptions) {
  return {
	server: {
		options: {
			hostname: '*',
			port: 8080,
			base: '',
			livereload: 35729,
			open: 'http://localhost:8080/demo/'
		}
	}
  }
}