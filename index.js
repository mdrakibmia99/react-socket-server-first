const express = require('express');
const app =express();
const http = require('http');
const expressServer =http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(expressServer);

app.get('/express-test',(req,res)=>{
    res.end('this is my backend')
})
  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect',()=>{
        console.log('a user disconnected')
    })
  });
  
  expressServer.listen(5000, () => {
    console.log('listening on *:5000');
  });