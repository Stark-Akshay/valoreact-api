require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const checkingRoute = require("./routes/checkingRoute");
const { default: mongoose } = require("mongoose");

// //cors option setting
// var corsOptions = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200,
// };
// //middlewares
// app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/checking", checkingRoute);

app.get("/", (req, res) => {
  res.send("hello its working normally");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
