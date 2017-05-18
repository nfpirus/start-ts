module.exports = function(grunt, demoTsOptions) {
  return {
	server: {
		options: {
			hostname: '*',
			port: 80,
			base: '',
			livereload: 35729,
			open: 'http://localhost/demo/'
		}
	}
  }
}