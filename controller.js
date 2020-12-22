'use strict';

var response = require('./res')
var connection = require('./connection');

exports.index = function(req, res) {
    response.ok("Aplikasi REST API berjalan", res)
}

exports.articles = function(req, res) {
    connection.query('SELECT * FROM article', function(error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    })
}