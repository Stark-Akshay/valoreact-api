require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const { default: mongoose } = require("mongoose");

//Route Imports
const checkingRoute = require("./routes/checkingRoute");
const retriveRoute = require("./routes/retriveData");
const deletionRoute = require("./routes/deleteData");
const registerRouter = require("./routes/registerUser");
const getUserRoute = require("./routes/checkUser");
//cors option setting
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

//Middlewares
app.use(express.json());

app.use("/api/checking", checkingRoute);

app.use("/api/retriveOne", retriveRoute);

app.use("/api/deleteData", deletionRoute);

app.use("/api/registerUser", registerRouter);

app.use("/api/getUser", getUserRoute);

//Endpoints
app.get("/", (req, res) => {
  res.send("hello its working normally");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

//DB Connections
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
