const { Router } = require("express");

const router = new Router();

const students = ["Marcin", "Robbert", "Nadine", "Minh", "Kevin"];

router.get("/student", (req, res) => {
  res.send(students);
});

module.exports = router;
