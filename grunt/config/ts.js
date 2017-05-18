module.exports = function(grunt, options) {
  return {
	  default: {
		tsconfig: true
	  },
	  demo: {
		  src: ['demo/App.ts'],
		  out: 'demo/demo.js',
		  options: options.demoTsOptions
	  }
  }
}