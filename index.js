const express = require('express'); // express module 가지 오기
const app = express(); // express 함수를 이용해서 app을 만들다
const port = 8000; // port 설정
const bodyParser = require("body-parser");
const config = require('./config/key');

const {User} = require("./models/Users");


const mongoose = require("mongoose");

mongoose.connect(config.mongoURI,{

}).then(()=>console.log("mongo ulandi!"))
  .catch(err=>console.log(err))



app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());


app.get('/', (req, res) => res.send('salom'));

app.post('/register', (req,res)=>{


  const user = new User(req.body)

  user.save((err,userInfo)=>{
    if(err) return res.json({success: false,err})
    return res.status(200).json({
      success: true
    })
  })

})





app.listen(port, () => console.log(` ${port}`)); // 5000 port에사 앱을 실행한다.
