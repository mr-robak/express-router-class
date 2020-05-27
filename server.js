const express = require("express");
const router = require("./router");

const app = express();
const port = 4000;

app.use(router);

app.listen(port, () => {
  console.log(`Server started on port :${port}`);
});
