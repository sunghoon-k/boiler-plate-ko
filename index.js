const express = require('express')
const app = express()
const port = 5000

/* mongoose => connect application with MongoDB */
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://BusinessK:rlatjdgns94!@boilerplate.o6hk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true /* here are for not error */
}).then(() => console.log('MongoDB Connected...')) /* check if connection is successed */
  .catch(err => console.log(err)) /* if any error, print error contents */


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})