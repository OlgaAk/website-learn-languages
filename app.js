var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mustacheExpress = require("mustache-express");
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// app.get ('/', function ( req, res) {
//         res.send('Hello, Express!')
// })

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


var routes = require('./routes/index');
app.use('/', routes);

var session = require('express-session');

   app.use(session({
     secret: ' 23msdfl34kasd ',
     name: 'sid',
     cookie: { secure: true, httpOnly: true, maxAge: 60000},  
   }))


var crypto = require('crypto');



app.get('/', function(req, res, next) {
  var sess = req.session
  if (sess.views) {
    sess.views++
    res.setHeader('Content­Type', 'text/html')
    res.write('<p>views: ' + sess.views + '</p>')
    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    sess.views = 1
    res.end('welcome to the session demo. refresh! id' + req.session.id )
  }
})

var loginData = {username: "John", password: "000"};

app.post('/admin', function (req, res) { 
    var username =  req.body.username;
    var password = req.body.password;
    req.session = {'hello':'world'};
    if (req.body.username = loginData.username){
            var md5HashHex = crypto.createHash('md5').update(username).update(password).digest('hex');
            console.log(md5HashHex, loginData);
     res.cookie('login-data', md5HashHex, {
    expires: new Date(Date.now() + 900000),
    httpOnly: true
});
    if (req.body.password != loginData.password) {
     res.redirect('/');
    res.write('Sorry, you have given a wrong password')
    } else {
    res.redirect('/loged.html');
    res.write('Hello' + req.body.username)
    console.log(req.body.username);
    }}
    else {
    res.redirect('/loged.html');
    res.write('You have created an account')
    loginData.username = req.body.username; 
    loginData.password = req.body.password;
    console.log(loginData);
    }
}); 

    app.listen(port);
console.log('Listening on port ' + port);

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'secret',
  database : 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();

// var sql = "SELECT * FROM ?? WHERE ?? = ?";
// var inserts = ['users','id', 'userId'];
// sql= mysql.format(sql, inserts);


// app.get('/', function(req, res, next) {
//    
//      connection.query("SELECT 1 + 1 AS solution union SELECT 3 AS solution",  function(err, rows, fields) {
//        mess = [];   
//         //          подготовка массива объектов для вывода
//         res.render('admin', { auth: req.session.auth, table: mess
// });
//      });
//      console.log(obj);
// });
