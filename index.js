const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;
const checkingRoute = require("./routes/checkingRoute");

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

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
