module.exports = function(grunt, options) {
  return {
    default: {
    tsconfig: true
    },
    demo: {
      src: ['demo/App.ts'],
      out: 'demo/demo.js',
      options: {
        sourceMap: true,
        module: "system",
        target: "es5",
        moduleResolution: "node",
        noImplicitAny: true,
        noUnusedLocals: true,
        noImplicitReturns: true,
        failOnTypeErrors: true,
        stripInternal: true
      }
    }
  }
}