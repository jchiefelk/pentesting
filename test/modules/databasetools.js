const express = require('express');
const router = express.Router();
var Client = require('mariasql'); 
var config = require('./config');
var Promise = require( 'bluebird' );
var cors = require( "cors" );
var date = new Date();
//
// Connecting to local databse instance
//
console.log( config.development );
let _store;
var connect = new Client({
  host: config.development.database.host,
  user: config.development.database.user,
  password: config.development.database.password,
  db: config.development.database.database
});

var getPendingArticles = function(){
  return new Promise(function(resolve,reject){
            var sql = 'select * from Pending';
            connect.query(sql, function(err,rows){
            //	console.log(rows);
                  if (err) {
                      reject(err);
                  } else {
                      resolve(rows);
                  }
            });
  });
};


var postToPending = function(){
  return new Promise(function(resolve,reject){
      var Insert = [_store.firstname, _store.lastname, _store.abstract, _store.article, _store.subjects];
      var sql = 'insert into Pending set First_Name=?, Last_Name=?, Abstract=?, Article=?, Subjects=?';
      connect.query(sql,Insert,function(err, rows) {
      	  console.log(rows);
          if (err) {
            reject(err);
          }  else {
            resolve(rows.info.insertId);
          }
      });
	});
};



class DatabaseTools {

	getPendingArticleData() {
          return new Promise(function(resolve,reject){
                    var sql = 'select * from Pending';
                    connect.query(sql, function(err,rows){
                    //  console.log(rows);
                          if (err) {
                              reject(err);
                          } else {
                              resolve(rows);
                          }
                    });
          });
	}
	postPendingArticle(item){
    _store = item;
		postToPending();
	}
}
module.exports = new DatabaseTools