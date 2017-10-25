var express = require('express');
var app = express();
var user = require('./routes/user');
var morgan = require('morgan');
var bodyParser = require('body-parser');

/*
var myLogger = function(req, res, next) {
    console.log(req.url);
    next();
};

app.use(myLogger);
*/

app.use(morgan('dev'));
app.use(bodyParser.json()); // json 형태에 바디를 읽어줘
app.use('/', express.static('public'));



app.use('/user', user);

app.listen(3000, function(){
    console.log('Example App is listening on port 3000');
});


/*
>npm install --save morgan body-parser

morgan : 로깅 미들 웨어
body-parser : JSON 형태 데이터 파싱

npm repo morgan // github 사이트 설명 볼 수 있다.
*/

/*
껏다 켯다 하지않고 자동 리로드가 된다.
npm install -g nodemon
-g global로 설치하게되면 명령어로 사용할 수 있다.
nodemon main.js
개발할 때에는 nodemon main.js로 실행하고, 배포할 때는 node main.js 로 실행한다.

*/
