// server/app.js
var bodyParser = require('body-parser');
var DatabaseTools = require('../modules/databasetools');
var config = require('../modules/config');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = express.Router();
const app = express();
let _store;

let authenticate = ( payload, expressResponse ) => {
    payload.secret='';
    for(var x = payload.origin.length+19; x<payload.referer.length;x++) {
        payload.secret += payload.referer.charAt(x);
    };
    return new Promise( ( resolve, reject ) => {

        let expectedPassword = config.development.expectedPassword;
        if( payload.secret == expectedPassword ) {
            
            resolve();
        }
        else{
            reject();
        }
    });
};

var allowCrossDomain = function(req, res, next) {
        res.header( 'Access-Control-Allow-Origin', '*' );
        res.header( 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS' );
        res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Key, Mode' );
        // intercept OPTIONS method
        if( 'OPTIONS' == req.method ){
            res.sendStatus( 200 );
        }
        else {
            next();
        }
};
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.get('/api', (req, res, next) => {	
  	DatabaseTools.getPendingArticleData()
        .then(function(value){
            console.log(value);  
            res.json(value);          
        })
        .catch(function(error){
            res.json({error: error})
            console.log(error);
            next(error);
        });
});
app.post('/api', (req, res, next) => {
    authenticate( req.headers, res )
        .then(() => {
            _store = req.body;
            DatabaseTools.postPendingArticle(_store);
        })
        .catch( () => res.status( 500 ).json( { error: "auth fail" } ) );

});
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

// module.exports = app;