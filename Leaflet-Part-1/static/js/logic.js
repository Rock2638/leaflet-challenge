
// Creating the map object
let myMap = L.map("map", {
    center: [ 7, 81],
    zoom: 4
  });

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define a function to get colour based on depth
function getColor(depth) {
    if (depth > 90 ) return "#634D8E";
    else if (depth > 70) return "#8E5B91";
    else if (depth > 50) return "#C76B8F";
    else if (depth > 30) return "#DC828E";
    else if (depth > 10) return "#EC988E";
    else return "#FFCC99";
    }

// Define a function to get radius based on magnitude
function getRadius(magnitude) {
    return magnitude * 4;
}

// Fetch the earthquake data using d3.json
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(data => {
    // Add GeoJSON data to the map
    L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: getRadius(feature.properties.mag),
                fillColor: getColor(feature.geometry.coordinates[2]),
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 1
            });
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup(`<strong>Location:</strong> ${feature.properties.place}<br>
                             <strong>Magnitude:</strong> ${feature.properties.mag}<br>
                             <strong>Depth:</strong> ${feature.geometry.coordinates[2]} km<br>
                             <strong>Time:</strong> ${new Date(feature.properties.time).toLocaleString()}`);
        }
    }).addTo(myMap);

    // Add a legend to the map
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'legend');
        var grades = [-10, 10, 30, 50, 70, 90];

        div.innerHTML = '<div class="legend-title">Depth (km)</div>';

        // Loop through depth intervals and generate a label with the matching coloured square for each interval
        // CSS is applied to make it appear
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(myMap);

}).catch(error => console.error('Error fetching the earthquake data:', error));