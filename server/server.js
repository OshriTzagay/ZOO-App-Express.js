const dotenv = require("dotenv");
dotenv.config();
//!----------------------------->
//!-->Requires<--

const express = require("express");
require("./DB");
const animalsRouter = require("./Routes/animal-route");
const employeeRouter= require('./Routes/employees-route')
const cors =require('cors');
const app = express();
const port = process.env.PORT || 8000;
//!-->Requires<--

//!-->USES<--//
app.use(express.json());
app.use(cors());
app.use("/animals", animalsRouter);
app.use("/employee", employeeRouter);


//!-->USES<--//


app.listen(port, (err, result) => {
  if (err) console.log(err);
  console.log(`SERVER IS UP On localhost : ${port}`);
});

//---> For Now Starting The Server with GET to get Reaction.
app.get("/", (req, res) => {
  res.send("WELCOME TO THE ZOO");
});
