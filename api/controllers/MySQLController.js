'use strict';

var util = require('util');
var mainApp = require('./../../app');
var mysqlProvider = require('../providers/MySQLProvider.js');

module.exports = {
    getRegisteredAPICount: getRegisteredAPICount
};

function getRegisteredAPICount(req, res) {
    
    mysqlProvider.executeQuery(mainApp.get('mysql-query'), mainApp.get('mysql_DB')).then(function (json){
        
        res.json({res: json});
        
    }).catch(function (error){
        console.log(error);
        res.status(500).json({ message: error});
    }); 

}