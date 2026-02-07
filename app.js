const express = require('express');
const app = express();
const logger= require ('./middleware/logger.middleware')
app.use(logger)
app.use(express.json())

// app.use((request,res,next) =>
// {
// console.log("recieved")
// next()
// })


const ntiroute = require ('./routes/user.routes');
app.use('/upload', express.static('uploads'))
app.use("/api", ntiroute)
 module.exports=app;

