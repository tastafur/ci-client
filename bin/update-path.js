/* eslint no-console: 0 */
const replace = require('replace-in-file');

const options = {
  files: 'index.html',
  from: /dist\/bundle.js/g,
  to: (matchWay) => {
    console.log('Updates path match..:', matchWay);
    return '/bundle.js'
  },
};

try {
  const changes = replace.sync(options);
  console.log('Modified files:', changes.join(', '));
}
catch (error) {
  console.error('Error occurred:', error);
}
