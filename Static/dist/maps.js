var directionsDisplay = [];
var directionsService = [];
var map = [];
var coordinates;
var waypoints = ["Dayton, OH"];

function initMap(){
    for (var i = 0; i < 3; i++){
        directionsService[i] = new google.maps.DirectionsService();

        directionsDisplay[i] = new google.maps.DirectionsRenderer();

        var latitude = 41.1537;
        var longitude = 81.3579;

        coordinates = new google.maps.LatLng(latitude, longitude);

        var mapOptions = {
            zoom: 13,
            center: coordinates
        };

        var numString = i.toString();
        var thisMapID = "map-canvas" + numString;
        var thisTitleID = "map-title" + numString;
        var thisRatingID = "map-rating" + numString;

        //Query database information
        var start = posts[i].start;
        var end = posts[i].end;
        var title = posts[i].title;
        var rating = posts[i].rating;
        document.getElementById(thisTitleID).innerHTML = title;
        document.getElementById(thisRatingID).innerHTML = rating;
        map[i] = new google.maps.Map(document.getElementById(thisMapID), mapOptions);
        directionsDisplay[i].setMap(map[i]);


        calcRoute(i, start, end);
    };
}


function calcRoute(index, start, end){
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService[index].route(request, function(response, status){
        if(status == google.maps.DirectionsStatus.OK){
            directionsDisplay[index].setDirections(response);
        } else { alert("Directions request failed: " + status); }
    });
}