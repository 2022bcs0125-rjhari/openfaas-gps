let map;

function getLocation(){

fetch("http://localhost:5000")

.then(response => response.json())

.then(data => {

let coords = data.location.split(",");

let lat = coords[0];
let lon = coords[1];

let info = `
<p><b>City:</b> ${data.city}</p>
<p><b>Region:</b> ${data.region}</p>
<p><b>Country:</b> ${data.country}</p>
<p><b>Latitude:</b> ${lat}</p>
<p><b>Longitude:</b> ${lon}</p>
`;

document.getElementById("info").innerHTML = info;

showMap(lat,lon)

})

}

function showMap(lat,lon){

if(map){
map.remove()
}

map = L.map('map').setView([lat,lon],13)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap'
}).addTo(map)

L.marker([lat,lon]).addTo(map)
.bindPopup("Your Location")
.openPopup()

}