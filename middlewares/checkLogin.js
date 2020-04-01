module.exports = (req, res, next) => {
  if (req.url.startsWith("/login")) {
    return next();
  } else {
    //not login page
    if (!req.session.User) {
        return res.redirect('/login')
    }
    //login
    next()
  }
};
