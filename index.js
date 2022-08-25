const express = require('express'); // express module 가지 오기
const app = express(); // express 함수를 이용해서 app을 만들다
const port = 5000; // port 설정

// mongoose 통해 mongodb 연결
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://khusan:123@cluster0.ahymbcd.mongodb.net/?retryWrites=true&w=majority',
    {}
  )
  // 연결 성공일 때
  .then(() => console.log('ulandi'))
  // 연결 실패일 때
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('hi'));

app.listen(port, () => console.log(` ${port}`)); // 5000 port에사 앱을 실행한다.
