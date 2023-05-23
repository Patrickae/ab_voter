const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();



app.get('/api', (req, res) => {
  res.json({message: 'hello world'})
});

app.get('/api/smoothies', (req, res) => {
  res.json({message: 'hello smoothies!'})
});

app.listen(PORT, ()=>{
  console.log('server is listening on port:' + PORT)
})

