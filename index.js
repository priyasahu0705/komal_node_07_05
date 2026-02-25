require('dotenv').config();
// common js
const express = require('express');

// import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
res.send("Logged In");
});
app.get('/chai',(req,res)=>{
res.send("Chai aur code");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
