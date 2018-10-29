// function initMap() {
//        var markerArray = [];
//
//
//        // Instantiate a directions service.
//        var directionsService = new google.maps.DirectionsService;
//
//        // Create a map and center it on Manhattan.
//        var map = new google.maps.Map(document.getElementById('map'), {
//          zoom: 13,
//          center: {lat: 41.1537, lng: 81.3579}
//        });
//
//
//
//        // Create a renderer for directions and bind it to the map.
//        var directionsDisplay = new google.maps.DirectionsRenderer({map: map});
//
//
//        // Instantiate an info window to hold step text.
//        var stepDisplay = new google.maps.InfoWindow;
//
//
//
//        // Display the route between the initial start and end selections.
//        calculateAndDisplayRoute(
//            directionsDisplay, directionsService, markerArray, stepDisplay, map);
//
//        // Listen to change events from the start and end lists.
//        var onChangeHandler = function() {
//          calculateAndDisplayRoute(
//              directionsDisplay, directionsService, markerArray, stepDisplay, map);
//        };
//
//
//        document.getElementById('start').addEventListener('change', onChangeHandler);
//        document.getElementById('end').addEventListener('change', onChangeHandler);
//
// }
//
//      function calculateAndDisplayRoute(directionsDisplay, directionsService,
//          markerArray, stepDisplay, map) {
//        // First, remove any existing markers from the map.
//        for (var i = 0; i < markerArray.length; i++) {
//          markerArray[i].setMap(null);
//
//        }
//
//        // Retrieve the start and end locations and create a DirectionsRequest using
//        // WALKING directions.
//        directionsService.route({
//          origin: document.getElementById('start').value,
//          destination: document.getElementById('end').value,
//          travelMode: 'DRIVING'
//        }, function(response, status) {
//          // Route the directions and pass the response to a function to create
//          // markers for each step.
//          if (status === 'OK') {
//            document.getElementById('warnings-panel').innerHTML =
//                '<b>' + response.routes[0].warnings + '</b>';
//            directionsDisplay.setDirections(response);
//            showSteps(response, markerArray, stepDisplay, map);
//          } else {
//            window.alert('Directions request failed due to ' + status);
//          }
//        });
//      }
//
//
//      function showSteps(directionResult, markerArray, stepDisplay, map) {
//        // For each step, place a marker, and add the text to the marker's infowindow.
//        // Also attach the marker to an array so we can keep track of it and remove it
//        // when calculating new routes.
//        var myRoute = directionResult.routes[0].legs[0];
//        for (var i = 0; i < myRoute.steps.length; i++) {
//          var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
//          marker.setMap(map);
//          marker.setPosition(myRoute.steps[i].start_location);
//          attachInstructionText(
//              stepDisplay, marker, myRoute.steps[i].instructions, map);
//        }
//      }
//
//      function attachInstructionText(stepDisplay, marker, text, map) {
//        google.maps.event.addListener(marker, 'click', function() {
//          // Open an info window when the marker is clicked on, containing the text
//          // of the step.
//          stepDisplay.setContent(text);
//          stepDisplay.open(map, marker);
//        });
//      }

//var map1, map2;
//function drawMap() {
//
//    var mapOptions = {
//      zoom: 13,
//      mapTypeId: google.maps.MapTypeId.ROADMAP,
//      mapTypeControl: true,
//      fullscreenControl: false
//     }
//    mapOptions.center = new google.maps.LatLng(51.509865, -0.118092); // London
//    map1 = new google.maps.Map(document.getElementById("mapCanvas1"), mapOptions);
//
//    mapOptions.center = new google.maps.LatLng(52.370216, 4.895168); // Amsterdam
//    map2 = new google.maps.Map(document.getElementById("mapCanvas2"), mapOptions);
// }

var directionsDisplay = [];
var directionsService = [];
var map = [];
var coordinates;

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
        var start = posts[i].start;
        var end = posts[i].end;

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