const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

//JSON blocks to be returned
//var bluerose = { 'identifiers': { 'color': 'blue', 'flowertype': 'rose' }, 'instock': 'true', 'number': '22', 'cost': '10.32', 'hours': '3', 'key': 'match' };
//var bluedaisy = { 'identifiers': { 'color': 'blue', 'flowertype': 'daisy' }, 'instock': 'true', 'number': '43', 'cost': '7.22', 'hours': '0.5', 'key': 'match' };
//var redrose = { 'identifiers': { 'color': 'red', 'flowertype': 'rose' }, 'instock': 'true', 'number': '32', 'cost': '11.57', 'hours': '1.5', 'key': 'match' };
//var reddaisy = { 'identifiers': { 'color': 'red', 'flowertype': 'daisy' }, 'instock': 'true', 'number': '12', 'cost': '5.49', 'hours': '2', 'key': 'match' };
//var whitetulip = { 'identifiers': { 'color': 'white', 'flowertype': 'tulip' }, 'instock': 'true', 'number': '34', 'cost': '2.40', 'hours': '1', 'key': 'match' };

var nikeputter = { 'identifiers': { 'brand': 'nike', 'club': 'putter' }, 'instock': 'true', 'number': '22', 'cost': '10.32', 'hours': '3', 'key': 'match' };
var nikedriver = { 'identifiers': { 'brand': 'nike', 'club': 'driver' }, 'instock': 'true', 'number': '43', 'cost': '7.22', 'hours': '0.5', 'key': 'match' };
var taylormadeputter = { 'identifiers': { 'brand': 'taylormade', 'club': 'putter' }, 'instock': 'true', 'number': '32', 'cost': '11.57', 'hours': '1.5', 'key': 'match' };
var taylormadedriver = { 'identifiers': { 'brand': 'taylormade', 'club': 'driver' }, 'instock': 'true', 'number': '12', 'cost': '5.49', 'hours': '2', 'key': 'match' };
var callawayiron = { 'identifiers': { 'brand': 'callaway', 'club': 'iron' }, 'instock': 'true', 'number': '34', 'cost': '2.40', 'hours': '1', 'key': 'match' };

//port setup
const PORT = 8080;

//app setup
const app = express();
app.use(bodyParser.json());


//Endpoint handleing
app.post('/golfstock', function (req, res) {//check the clubs we have in stock
    //console.log("Golfstock hit"); //debug
    var resp = { "key": "No_match" };//If there's no matching if statement, default to body: no_match
    //console.log(req); //debug
    var b0ddy = req["body"]
    var brand = b0ddy["brand"];
    var type = b0ddy["club"];

    //if loops
    if (brand.toLowerCase() == "nike" && (type.toLowerCase() == "putter" || type.toLowerCase() == 'putters')) {
        resp = nikeputter;
    }
    if (brand.toLowerCase() == "nike" && (type.toLowerCase() == "driver" ||
        type.toLowerCase() == 'drivers')) {
        resp = nikedriver;
    }
    if (brand.toLowerCase() == "taylormade" && (type.toLowerCase() == "putter" || type.toLowerCase() == 'putters')) {
        resp = taylormadeputter;
    }
    if (brand.toLowerCase() == "taylormade" && (type.toLowerCase() == "driver" ||
        type.toLowerCase() == 'drivers')) {
        resp = taylormadedriver;
    }
    if (brand.toLowerCase() == "callaway" && (type.toLowerCase() == "iron" || type.toLowerCase() == 'irons')) {
        resp = callawayiron;
    }

    //send the response back
    res.send(resp);
});

//post endpoint for odering
app.post('/order', (req, res) => {
    var resp = { "key": "No_match" };//If there's no matching if statement, default to body: no_match
    var b0dy = req["body"];
    var brand = b0dy["brand"];
    var type = b0dy["club"];
    var number = parseFloat(b0dy['number']); //how many clubs were ordered
    console.log(number);

    //if loops
    if (brand.toLowerCase() == "nike" && (type.toLowerCase() == "putter" || type.toLowerCase() == 'putters')) {
        var totals = (parseFloat(nikeputter['cost']) * number);
        resp = { 'total': totals, 'message': 'Thank you for your order', 'key': 'match' };
    }
    if (brand.toLowerCase() == "nike" && (type.toLowerCase() == "driver" ||
        type.toLowerCase() == 'drivers')) {
        var totals = (parseFloat(nikedriver['cost']) * number);
        resp = { 'total': totals, 'message': 'Thank you for your order', 'key': 'match' };
    }
    if (brand.toLowerCase() == "taylormade" && (type.toLowerCase() == "putter" || type.toLowerCase() == 'putters')) {
        var totals = (parseFloat(taylormadeputter['cost']) * number);
        resp = { 'total': totals, 'message': 'Thank you for your order', 'key': 'match' };
    }
    if (brand.toLowerCase() == "taylormade" && (type.toLowerCase() == "driver" ||
        type.toLowerCase() == 'drivers')) {
        var totals = (parseFloat(taylormadedriver['cost']) * number);
        resp = { 'total': totals, 'message': 'Thank you for your order', 'key': 'match' };
    }
    if (brand.toLowerCase() == "callaway" && (type.toLowerCase() == "iron" || type.toLowerCase() == 'irons')) {
        var totals = (parseFloat(callawayiron['cost']) * number);
        resp = { 'total': totals, 'message': 'Thank you for your order', 'key': 'match' };
    }

    //send the resoonse back 
    res.send(resp);
});

//post endpoint for selling
app.post('/order', (req, res) => {
    var resp = { "key": "No_match" };//If there's no matching if statement, default to body: no_match
    var b0dy = req["body"];
    var brand = b0dy["brand"];
    var type = b0dy["club"];
    var number = parseFloat(b0dy['number']); //how many flowers were ordered
    console.log(number);

    //if loops
    if (brand.toLowerCase() == "nike" && (type.toLowerCase() == "putter" || type.toLowerCase() == 'putters')) {
        var totals = (parseFloat(nikeputter['cost']) * number);
        resp = { 'total': totals, 'message': 'Thank you for your sale', 'key': 'match' };
    }
    if (brand.toLowerCase() == "nike" && (type.toLowerCase() == "putter" ||
        type.toLowerCase() == 'putters')) {
        var totals = (parseFloat(nikeputter['cost']) * number);
        resp = { 'total': totals, 'message': 'Thank you for your sale', 'key': 'match' };
    }
    if (brand.toLowerCase() == "taylormade" && (type.toLowerCase() == "driver" || type.toLowerCase() == 'drivers')) {
        var totals = (parseFloat(taylormadedriver['cost']) * number);
        resp = { 'total': totals, 'message': 'Thank you for your sale', 'key': 'match' };
    }
    if (brand.toLowerCase() == "taylormade" && (type.toLowerCase() == "putter" ||
        type.toLowerCase() == 'putters')) {
        var totals = (parseFloat(taylormadeputter['cost']) * number);
        resp = { 'total': totals, 'message': 'Thank you for your sale', 'key': 'match' };
    }
    if (color.toLowerCase() == "callaway" && (type.toLowerCase() == "iron" || type.toLowerCase() == 'irons')) {
        var totals = (parseFloat(callawayiron['cost']) * number);
        resp = { 'total': totals, 'message': 'Thank you for your sale', 'key': 'match' };
    }

    //send the resoonse back 
    res.send(resp);
});

//endpoint for testing the status of the API 
app.get('/status', (req, res) => {
    const somee = { msg: 'success', status: 'okay' }
    res.send(somee);
})

app.get('', (req, res) => {
    //return the html file to be rendered
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, () => {
    console.log("Server running on port 8080");
});