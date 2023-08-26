const express = require('express')

const app = express();

const port = process.env.PORT || 4000

const mongoose = require('mongoose');
const playListRouter = require('./router/playListRouter');
const songRouter = require('./router/songRouter');
const userRouter = require('./router/userRouter');
const passportJWT = require('./middlewares/passportJWT')()

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/spotify');
  console.log('DATABASE CONNECTED!')
}
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(passportJWT.initialize())

app.get('/', (req,res) => {
  res.send('Welcome to the express api')
})

app.use('/api/playLists',passportJWT.authenticate(),playListRouter )
app.use('/api/song',passportJWT.authenticate(),songRouter )
app.use('/api/user',userRouter )

app.listen(port, ()=> console.log(`[SERVER] is running on: ${port}`))