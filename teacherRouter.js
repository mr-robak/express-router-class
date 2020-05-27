const { Router } = require("express");

const router = new Router();

const teachers = ["Matias", "Rein", "Kelley", "Johan", "Jeroen"];

router.get("/teacher", (req, res) => {
  res.send(teachers);
});

module.exports = router;
