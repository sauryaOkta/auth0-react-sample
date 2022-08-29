const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
require("dotenv/config");
var passport = require("passport");
const apiRouter = require("./routes/ApiRouter");

const app = express();
const PORT = process.env.PORT;

const sess = {
  secret: "19900923",
  resave: "true",
  saveUninitialized: false,
  cookie: { httpOnly: true },
};

const corsOptions = {
  origin: [process.env.FRONEND_URL],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session(sess));
app.use(cors(corsOptions));

app.use(passport.initialize({ userProperty: "userContext" }));
app.use(passport.session());

passport.serializeUser((user, next) => {
  next(null, user);
});

passport.deserializeUser((obj, next) => {
  next(null, obj);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port : ${PORT}`);
});

app.use("/api", apiRouter);
