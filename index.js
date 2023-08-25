const express = require('express')

const app = express();

const port = process.env.PORT || 4000

const mongoose = require('mongoose')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mini-istagram');
  console.log('DATABASE CONNECTED!')
}
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.listen(port, ()=> console.log(`[SERVER] is running on: ${port}`))