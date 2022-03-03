const dotenv = require('dotenv');
dotenv.config();
//!----------------------------->
//!-->Requires<--

const express = require('express');

const app = express();
//!-->Requires<--


//!-->USES<--//
app.use(express.json());

//!-->USES<--//

const port = process.env.PORT || 8000

app.listen(port,(err,result)=>{
if(err)console.log(err);
console.log(`SERVER IS UP On localhost : ${port}`);
})

//---> For Now Starting The Server with GET to get Reaction.
app.get('/',(req,res)=>{
    res.send("WELCOME TO THE ZOO")
})