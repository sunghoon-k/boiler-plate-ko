const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key');

/* User.js를 불러온다 */
const { User } = require("./models/User");

// application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져오게 해주는 것
app.use(bodyParser.urlencoded({extended: true}));

// application/json 파일을 분석해서 가져올 수 있게 하는 것.
app.use(bodyParser.json());

/* mongoose => connect application with MongoDB */
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true /* here are for not error */
}).then(() => console.log('MongoDB Connected...')) /* check if connection is successed */
  .catch(err => console.log(err)) /* if any error, print error contents */


app.get('/', (req, res) => {
  res.send('Hello World! 응기잇!')
})

app.post('/register', (req, res) => {
  // 회원 가입할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body) // User 인스턴스 생성

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  }) // save는 몽고DB에서 오는 메소드
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})