const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
      return res.status(401).redirect('/login');
  } else {
      next();
  }
};

module.exports = withAuth;