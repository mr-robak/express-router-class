const { Router } = require("express");

const router = new Router();

router.get("/", (req, res, next) => {
  res.send("Separated");
});

module.exports = router;
