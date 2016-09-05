"use strict";

const routeJSON = require('./route.json');
const routeCoordinates = routeJSON.features[0].geometry.coordinates;

const jsonfile = require('jsonfile');
const routeCoordsFile = 'routeCoords.json';


var routeLatLng = routeCoordinates.map((i) => {
        i.pop()
        var lat = parseFloat(i[0].toFixed(4));
        var lng = parseFloat(i[1].toFixed(4));

        var latLng = [];
        latLng.push(lat,lng);

        return latLng;
    })


console.log(routeLatLng);

jsonfile.writeFile(routeCoordsFile, routeLatLng, function(err, data) {
    if (err) throw err;
    console.log("New file is compiled.")
});