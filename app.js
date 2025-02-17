const express = require("express");
const path = require("path");
const app = express();
const userRouter = require("./routes/userRouter");
const rootDir = require("./utils/pathUtil");
const {mongoDbConfig} = require("./utils/dbConfig");
app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(userRouter);

mongoDbConfig(() => {
  app.listen(4000, (req, res) => {
    console.log(`server is running: http://localhost:4000`);
  });
})

