// Authentication middleware
const checkAuth = (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.redirect('/login'); // page or route
    
    }
  };

  module.exports = checkAuth;