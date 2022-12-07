//function to start the Leaflet map
function createMap(){
    
    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>'; //You can add you name to the variable if you want to add yourself to the credits.
    
    //Variable for storing your Mapbox API Token
    var apitoken = 'pk.eyJ1IjoianVhbnZpbGxhIiwiYSI6ImNsYmNmbnAwaTBmMDEzcHBjaG9lbmRiMHUifQ.nO3213zx2VZSfLLWas4aEg' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
    
    //URL used for Stanard MaxBox Styles
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';
    
   //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}'; 
    
     //For Custome basemaps - Replace your username and StyleID
    var customeBasemap = L.tileLayer(mbStyleUrl, {id: 'juanvilla/clbcgk2sq001614kydggkv997', token: apitoken,  attribution: mbAttr});
    
      //For MabBox Standard Basemaps
    var standardBasemap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
});
    
       //create the map*/
    var map = L.map('map', {
        center: [31.00, -5],//Coordinated to center the map
        zoom: 6, //zoom level
        layers:customeBasemap //basemap
    });
        
    
    
    
     //create the basemap control layer*/
    var baseLayers = {
		"Outdoors": standardBasemap,
        "Dark Terrain": customeBasemap,
    };
    
    L.control.layers(baseLayers).addTo(map);}

    
    

//calling the function
$(document).ready(createMap);