var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');

var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var expressSession = require('express-session');
//에러 핸들러 모듈(예외처리)
var expressErrorHandler = require('express-error-handler');

//익스프레스 객체 생성
var app = express();

//포트 연결
app.set('port', process.env.PORT || 3000);

//익스프레스 서버시작
var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('익스프레스로 웹서버를 실행함 : ' + app.get('port'));
});

//public폴더 연결
//__dirname -> 루트디렉토리
app.use('/public', static(path.join(__dirname, 'public')));
app.use('/', static(path.join(__dirname, '')));

//미들웨어 등록
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));

//루트로 접속했을때 라우팅함수
var router = express.Router();
router.route('/').get(function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);

//404에러페이지 처리
var errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

//등록되지 않은 패스에 대해 페이지 오류 응답
//app.all('*', function(req, res){
//    res.status(404).send("<h1>요청하신 페이지는 없습니다</h1>");
//});

