const url = require("url");

module.exports = userDetials = (req, res, next) => {

    var user = {
      agent: req.header('user-agent'), // User Agent we get from headers
      referrer: req.header('referrer'), //  Likewise for referrer
      ip: req.header('x-forwarded-for') || req.connection.remoteAddress, // Get IP - allow for proxy
      screen: { // Get screen info that we passed in url post data
        width: req.param('width'),
        height: req.param('height')
      }
    };
    req.user = user;
        next()

  };



  

    // rest of req handling code