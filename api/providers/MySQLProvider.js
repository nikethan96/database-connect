'use strict';

var mainApp = require('./../../app');
var mysql = require('mysql');

module.exports = {
    executeQuery: executeQuery
};

function executeQuery(SQLStatement, database) {

    return new Promise(function (resolve, reject) {
        
        try{
            
            var connection = mysql.createConnection({
                host     : mainApp.get("mysql_host"),
                user     : mainApp.get('mysql_username'),
                password : mainApp.get('mysql_password'),
                database : database
            });

            connection.connect();

            connection.query(SQLStatement, function (error, results, fields) {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                resolve(results);
            });

            connection.end();
            
        }catch(err){
            reject(err);
        }
        
    });

}