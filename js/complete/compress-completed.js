const completed = require("./completed.json");
const completedCoords = completed.features[0].geometry.coordinates;

const jsonfile = require('jsonfile');
const completedCoordsFile = 'completedCoords.json';

let completeLatLng = completedCoords.map((i) => {
        i.pop();
        let lat = parseFloat(i[0].toFixed(4));
        let lng = parseFloat(i[1].toFixed(4));

        let latLng = [];
        latLng.push(lat, lng);

        return latLng;
    })

console.log(completeLatLng);

jsonfile.writeFile(completedCoordsFile , completeLatLng, function(err, data) {
    if(err) throw err;
    console.log("Done!");
});
