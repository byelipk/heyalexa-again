var appServer = require('./index');
appServer.start({
  port: process.env.PORT || 3000,
  debug: process.env.NODE_ENV === 'development'
});
