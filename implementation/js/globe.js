/*
  two fingers swipe up and down || one finger placed and second moves == zoom
  three fingers swipe left right == rotates
*/

function initialize() {
        var options = {
          sky: true,
          atmosphere: true,
          dragging: true,
          tilting: true,
          zooming: true,
          center: [46.8011, 8.2266],
          zoom: 2,
          scrollWheelZoom: true,
        };
        earth = new WE.map('earth_div', options);
        var natural = WE.tileLayer('http://data.webglearth.com/natural-earth-color/{z}/{x}/{y}.jpg', {
          tileSize: 256,
          tms: true
        });
        natural.addTo(earth);

        var toner = WE.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
          attribution: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.',
          opacity: 0.6
        });
        toner.addTo(earth);
      };

function addSomeMarkers() {
        document.getElementById('addmarkers').disabled = true;

        map.setView([51.505, 0], 5);
        var marker = WE.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();

             };


