var express = require("express");
var app = express();

//var serverInfoApi = require('./DataApi/countryInfoApi.js');




app.use(express.static('../html'), function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* serves main page */
app.get("/", function(req, res) {
    res.sendFile('MapsView.html', { root: '../html' });
});


// var data = [ { label: "Data Set 1",
//     x: [0, 1, 2, 3, 4],
//     y: [0, 1, 2, 3, 4] },
//     { label: "Data Set 2",
//         x: [0, 1, 2, 3, 4],
//         y: [0, 1, 4, 9, 16] } ] ;
//
//
// //  Example HTTP Request - http://localhost:5000/getCountryHiTechInfo?country=ISR&year=2014
// app.get('/getCountryHiTechInfo', function (req, res) {
//     // console.log(req);
//     var country = req.query.country;
//     var year = req.query.year;
//
//     //console.log('Got request for Hi Tech info for country: ' + country + ' in year: ' + year);
//     var queryRes = serverInfoApi.getCountryHiTechInfoByYear('TX.VAL.TECH.CD', year, country);
//     var queryResStr = JSON.stringify(queryRes);
//
//
//     // console.log("Res: " + queryResStr);
//     res.end(queryResStr);
//
// })
//
// //  Example HTTP Request - http://localhost:5000/getCountryHiTechInfo?yearStart=2014&yearEnd=2018
// app.get('/getCountriesHiTechInfoLineCharted', function (req, res) {
//     // console.log(req);
//     var yearStart = req.query.yearStart;
//     var yearEnd = req.query.yearEnd;
//     var country = req.query.country;
//     var infoLabel = req.query.infoLabel;
//     //console.log('Got request for Hi Tech info for country: ' + country + ' from year: ' + yearStart + ' to year:' + yearEnd + " infoLabel: " + infoLabel);
//
//     var finalRes = {'countryLabel': country, 'x':[],'y':[]};
//
//     for (var i = yearStart; i <= yearEnd; i++) {
//         var queryRes = serverInfoApi.getCountryInfoByYear(infoLabel, i, country);
//         //console.log(queryRes);
//
//         // finalRes['y'].push(queryRes.Val/1000000);
//         finalRes['y'].push(queryRes.Val);
//         finalRes['x'].push(queryRes.Year);
//         // var queryResStr = JSON.stringify(queryRes);
//         // console.log("Res: " + queryResStr);
//     }
//
//     var queryResStr = JSON.stringify(finalRes);
//     // console.log("Res: " + queryResStr);
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // res.addHeader('Access-Control-Allow-Origin', '192.168.1.13');
//
//     console.log('final result size: ' + queryResStr.length)
//     res.end(queryResStr);
//
// })

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});