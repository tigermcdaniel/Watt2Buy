/***********************
  Load Components!

  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database
***********************/
var express = require('express'); //Ensure our express framework has been added
const session = require('express-session');
var app = express();

app.set('trust proxy', 1)
app.use(session({
  secret: 'secret',
  resave: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 365 * 1000
  }
}))

var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();

let dbConfig = {
    host: 'localhost',
    port: 5432,
    database: 'watt2buy',
    user: 'postgres',
    password: 'postgre'
};

const isProduction = process.env.NODE_ENV === 'production';
dbConfig = isProduction ? process.env.DATABASE_URL : dbConfig;
let db = pgp(dbConfig);

//app.listen(3000);
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
	console.log(`Express running → PORT ${server.address().port}`);
});

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory



app.get('/nodejs/signup', function(req, res) {

	var userName = req.query.userName;
	var email = req.query.email;
    var hash = req.query.hash;
    var d = new Date().toLocaleString();
	var insert_statement = "INSERT INTO public.\"USER\"(userName, email, hash, role, registeredAt, lastLogin) VALUES('" + userName + "','" +
							email + "'," + hash +",'" + "Customer" + "','" + d + "','" + d + "');";


	db.task('get-everything', task => {
        return task.batch([
            task.any(insert_statement),
        ]);
    })
    .then(info => {
        //req.session.loggedIn = true;
        res.status(200).end();
    })
    .catch(error => {
        // display error message in case an error
        res.status(500).send(error);
        console.log(error);
    });
});

app.get('/nodejs/login', function(req, res) {

	var userName = req.query.userName;
    var hash = req.query.hash;

	var find_user = 'select * from public.\"USER\" where username=\'' + userName + '\' and hash=' + hash + ';';

	 db.task('get-everything', task => {
        return task.batch([
            task.any(find_user)
        ]);
    })
    .then(data => {
        console.log(data[0]);

        if(data[0].length == 0){
            res.status(404).end();
        }else {
            res.status(200).end();
        }
        
    })
    .catch(error => {
        // display error message in case an error
        res.status(500).send(error);
        console.log(error);
    });
});

app.listen(3000);
