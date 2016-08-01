
  L.mapbox.accessToken = "pk.eyJ1IjoidGJ5ZXJzIiwiYSI6ImNpa3ZjYjhqMDAwMjl3OW0wc2V6bTh2YWYifQ.Ixpvw-9OHokrZ34u3bF-Gg";

  var keyStatistics = {
    milesCovered: 0,
    timeRunning: 0,
    distanceLeft: 1000,
    caloriesConsumed: 0
  }

  var map = L.mapbox.map('map', 'mapbox.light')
    .setView([54.6234, -4.16484], 6);

  var positionMarker = L.marker([50.065528, -5.714918], {
      title: "Matt's location",
      icon: L.mapbox.marker.icon({
        'marker-color': "#e66200",
        'marker-size': 'large'
      })
  });

  positionMarker.addTo(map);
  positionMarker.setLatLng([50.065528, -5.714918]);


  var currentPosition = positionMarker.getLatLng();
  console.log(currentPosition);
