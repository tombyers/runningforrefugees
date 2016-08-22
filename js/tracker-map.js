L.mapbox.accessToken = "pk.eyJ1IjoidGJ5ZXJzIiwiYSI6ImNpa3ZjYjhqMDAwMjl3OW0wc2V6bTh2YWYifQ.Ixpvw-9OHokrZ34u3bF-Gg";

var positionMarker = L.marker([50.0663, -5.7143], {
    title: "Matt's location",
    icon: L.mapbox.marker.icon({
        'marker-color': "#e66200",
        'marker-size': 'large'
    })
});

var map =   L.mapbox.map('map', 'mapbox.light');
map.setView([50.0663, -5.7143],6);

positionMarker.addTo(map);

var getCoords = function(responseText) {
    var responseBody = JSON.parse(responseText);
    responseBody = responseBody.MiataruLocation[0];

    var currentCoords = [];

    var latitude = responseBody.Latitude;
    var longitude = responseBody.Longitude;

    currentCoords.push(latitude, longitude);

    return currentCoords;
};

var request = $.ajax(
    "http://service.miataru.com/v1/GetLocation", {
        method: "POST",
        type: "POST",
        data: {
            "MiataruGetLocation": [
                {
                    "Device": "A914BE91-AEB6-43E2-AD52-6A27E07B11C7"
                }
            ]
        },
        dataType: "json",
        success: function(data, str, obj) {
            var currentCoords = getCoords(obj.responseText)
            positionMarker.setLatLng(currentCoords);
            map.setView(currentCoords, 7);
        },
        error: function(obj, err) {
            console.log(err);
        }
});

var keyStatistics = {
    milesCovered: 0,
    timeRunning: 0,
    distanceLeft: 1000,
    caloriesConsumed: 0
};
