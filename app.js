const express = require("express");
const app = express();
const router = express.Router();

const path = __dirname + "/views/";
const port = 8000;

router.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(port, function () {
  console.log("server listening on port 8000!");
});
