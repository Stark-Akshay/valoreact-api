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
var allowedOrigins = [
  "https://valoreacts.onrender.com",
  "https://3.75.158.163",
  "https://3.125.183.140",
  "https://35.157.117.28",
  "https://valoreacts.vercel.app/",
];

var corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow access
    } else {
      callback(new Error("Not allowed by CORS")); // Deny access
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log("Origin:", req.headers.origin);
  next();
});

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
