const router = require("express").Router();

function requireLogin(req, res, next) {
  if (req.session.currentUser) {
      next();
  }else {
      res.redirect("/login")
  }
}


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


router.get("/main", requireLogin ,async (req, res) => {
  res.render("main");
});


router.get("/private", requireLogin ,async (req, res) => {
  res.render("private");
});


module.exports = router;
