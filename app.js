const express = require("express");
const app = express();
const router = express.Router();

const path = __dirname + "/views/";


router.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(process.env.PORT || 5000 , function () {
  console.log("server listening on port 5000!");
});

