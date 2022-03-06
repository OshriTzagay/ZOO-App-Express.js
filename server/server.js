const dotenv = require("dotenv");
dotenv.config();
//!----------------------------->
//!-->Requires<--

const express = require("express");
require("./DB");
const animalsRouter = require("./Routes/animal-route");
const employeesRouter= require('./Routes/employees-route');
const usersRouter = require('./Routes/users-route');
const passport = require("passport");
require("./Config/passport")(passport);

const cors =require('cors');
const app = express();
const port = process.env.PORT || 8000;
//!-->Requires<--

//!-->USES<--//
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use("/animals",  passport.authenticate("jwt", { session: false }), animalsRouter);
app.use("/emp",  passport.authenticate("jwt", { session: false }), employeesRouter);
app.use("/users",usersRouter)
//!-->USES<--//


app.listen(port, (err, result) => {
  if (err) console.log(err);
  console.log(`SERVER IS UP On localhost : ${port}`);
});

//---> For Now Starting The Server with GET to get Reaction.
// app.get("/", (req, res) => {
//   res.send("WELCOME TO THE ZOO");
// });
