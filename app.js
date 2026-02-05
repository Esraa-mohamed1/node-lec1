const express = require('express');
const app = express();

const ntiroute = require ('./routes/user.routes');
app.use("/api", ntiroute)
 module.exports=app;




