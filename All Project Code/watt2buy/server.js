/***********************
  Load Components!

  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database
***********************/

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

console.log(stripeSecretKey);


var express = require('express'); //Ensure our express framework has been added
const session = require('express-session');
const app = express();
const fs = require('fs');
const stripe = require('stripe')(stripeSecretKey);

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));

// CHECKOUT
app.get('/store', function(req, res){
    fs.readFile('items.json', function(error, data){
        if(error){
            res.status(500).end();
        }
        else{
            res.render('store.ejs', {
                stripePublicKey : stripePublicKey,
                items : JSON.parse(data)
            })
        }
    })
})

app.post('/purchase', function(req, res){
    fs.readFile('items.json', function(error, data){
        if(error){
            res.status(500).end();
        }
        else{
            const itemJson = JSON.parse(data);
            const itemArray0 = itemJson.solar.concat(itemJson.electricvehicles);
            const itemArray = itemArray0.concat(itemJson.smartappliances);
            let total = 0;
            req.body.items.forEach(function(item){
                const itemJson = itemArray.find(function(i){
                    return i.id == item.id;
                })
                total = total + itemJson.price;
            })

            stripe.charges.create({
                amount : total,
                source : req.body.stripeTokenId,
                currency : 'usd'
            }).then(function(){
                console.log('Successful');
                res.json({message : 'Successfully purchased item'})
            }).catch(function(){
                console.log('Failed');
                res.status(500).end();
            })


        }
    })
})



// END CHECKOUT

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

app.get('/nodejs/saveResults', function(req, res) {
    var results = req.query.results;
    var userName = req.query.userName;
    
    
    var insert_statement = "INSERT INTO public.\"RESULTS\"(username, results) VALUES('" + userName + "','" + results +  "');";


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

app.get('/nodejs/subscribe', function(req, res) {
    var email = req.query.email;

    var insert_statement = "INSERT INTO public.\"SUBSCRIBERS\"(email) VALUES('" + email + "');";
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

app.listen(3000);

