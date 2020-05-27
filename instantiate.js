const express = require("express");
const { Router } = express;

const router = new Router();

const app = express();
app.use(router);

const port = 4000;

router.get("/hi/:name", (req, res, next) => {
  const name = req.params.name;
  res.send(`Hi ${name}! Welcome to my homepage :)`);
});

app.listen(port, () => console.log(`Server started at port :${port}`));
