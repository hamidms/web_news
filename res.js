'use strict';

exports.ok = function (articles, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var data = articles;

    res.json(data);
    res.end();
}