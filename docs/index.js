const paths = require('./paths');

module.exports = {
  swagger: '3.0',
  openapi: '3.0.0',
  info: {
    description: 'This website compression and processing images and convert their format live',
    version: '1.0.0',
    title: 'Image Processing',
    termsOfService: 'http://swagger.io/terms/',
    contact: {
      email: 'miladezzat.f@gmail.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  host: 'images-process.herokuapp.com',
  tags: [
    {
      name: 'Image Proccessing',
      description: 'Operations on image proccessing',
    },
  ],
  schemes: [
    'https',
    'http',
  ],
  paths,
};
