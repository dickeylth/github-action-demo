const { sayHello } = require('node-gyp-build')(__dirname);
// require('./build/Release/exposeFunction');
const result = sayHello("Github");
console.log(result);