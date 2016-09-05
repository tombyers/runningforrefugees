const completed = require("./completed.json");
const completedCoords = completed.features[0].geometry.coordinates;

const jsonfile = require('jsonfile');
const completedCoordsFile = 'completedCoords.json';

var completeLatLng = completedCoords.map((i) => {
        i.pop();
        var lat = parseFloat(i[0].toFixed(4));
        var lng = parseFloat(i[1].toFixed(4));

        var latLng = [];
        latLng.push(lat, lng);

        return latLng;
    })

console.log(completeLatLng);

jsonfile.writeFile(completedCoordsFile , completeLatLng, function(err, data) {
    if(err) throw err;
    console.log("Done!");
});
