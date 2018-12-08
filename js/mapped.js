
/*Automatic Location Detection*/
var getUserLocation = function () {
    console.log("getting location");
    //check if the geolocation object is supported, if so get position
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    } else {
        document.getElementById("locationData").innerHTML = "Sorry - your browser doesn't support geolocation!";
    }
};


var displayLocation = function (position) {
 
    //build text string including co-ordinate data passed in parameter
    var displayText = "User latitude is " + position.coords.latitude + " and longitude is " + position.coords.longitude;

   
   var input = document.getElementById("moolatlong"); // "moo" is the 'id' of the text field
input.value = "https://www.google.com/maps?q=" + position.coords.latitude + "," + position.coords.longitude;;


   
var input = document.getElementById("moolat"); // "moo" is the 'id' of the text field
input.value = position.coords.latitude ;

var input = document.getElementById("moolong"); // "moo" is the 'id' of the text field
input.value = position.coords.longitude ;

var pop1 =  position.coords.latitude;
var pop2 =  position.coords.longitude;
  
function initMap() {

 var pointA = new google.maps.LatLng(pop1,pop2),pointB = new google.maps.LatLng(20.3888, 78.1204),center = new google.maps.LatLng(42.599814, -71.367284),
    myOptions = {
      zoom: 8,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    },
    map = new google.maps.Map(document.getElementById('map-canvas'), myOptions),
    // Instantiate a directions service.
    directionsService = new google.maps.DirectionsService,
    directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    }),

    outputAtoB = document.getElementById('a2b'),
    flightPath = new google.maps.Polyline({
      path: [pointA, pointB],
      geodesic: true,
      strokeColor: '#000000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

  // click on marker B to get route from A to B
  calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB, outputAtoB);

  
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB, outputTxt ) {
  var selectedMode = 'DRIVING';

  directionsService.route({
    origin: pointA,
    destination: pointB,
    unitSystem: google.maps.UnitSystem.METRIC,
    travelMode: google.maps.TravelMode[selectedMode]
  }, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
    
  directionsDisplay.setDirections(response);
      outputTxt.innerHTML = Math.round(directionsDisplay.getDirections().routes[directionsDisplay.getRouteIndex()].legs[0].distance.value ) + "ms";
          price.innerHTML = Math.round(directionsDisplay.getDirections().routes[directionsDisplay.getRouteIndex()].legs[0].distance.value / 1000 * 10 ) + "Rs. Delivery";
         
          kms.innerHTML = Math.round(directionsDisplay.getDirections().routes[directionsDisplay.getRouteIndex()].legs[0].distance.value / 1000 ) + "Kms";
          avgtime.innerHTML = Math.round(directionsDisplay.getDirections().routes[directionsDisplay.getRouteIndex()].legs[0].distance.value / 1000*2.4+30 ) + "Mins.";
          speedestimate.value = Math.round(directionsDisplay.getDirections().routes[directionsDisplay.getRouteIndex()].legs[0].distance.value / 1000*2.4+30 ) + " Mins. Required";
	 
	 
	 var distancerange = Math.round(directionsDisplay.getDirections().routes[directionsDisplay.getRouteIndex()].legs[0].distance.value / 1000);
	 
	 if('0' <= distancerange && distancerange <= '10'){
 price2.innerHTML =  urange0to10 ;
 document.getElementById("pricex").value = urange0to10;
}
	 
	 if('11' <= distancerange && distancerange <= '30'){
 price2.innerHTML =  urange10to30 ;
 document.getElementById("pricex").value = urange10to30;
}
	 if('31' <= distancerange && distancerange <= '60'){
 price2.innerHTML =  urange30to60 ;
 document.getElementById("pricex").value = urange30to60;
}
	 if('61' <= distancerange && distancerange <= '100'){
 price2.innerHTML =  urange60to100 ;
 document.getElementById("pricex").value = urange60to100;
}
	 if('101' <= distancerange && distancerange <= '200'){
 price2.innerHTML =  urange100to200 ;
 document.getElementById("pricex").value = urange100to200;
}
	 if('201' <= distancerange && distancerange <= '300'){
 price2.innerHTML =  urange200to300 ;
 document.getElementById("pricex").value = urange200to300;
}
	 if('301' <= distancerange && distancerange <= '400'){
 price2.innerHTML =  urange300to400 ;
 document.getElementById("pricex").value = urange300to400;
}
	 if('401' <= distancerange && distancerange <= '500'){
 price2.innerHTML =  urange400to500 ;
 document.getElementById("pricex").value = urange400to500;
}
	 if('501' <= distancerange && distancerange <= '1000'){
 price2.innerHTML =  urange500to1000 ;
 document.getElementById("pricex").value = urange500to1000;
}
	 if('1001' <= distancerange && distancerange <= '2000'){
 price2.innerHTML =  urange1000to2000 ;
 document.getElementById("pricex").value = urange1000to2000;
}
	 if('2001' <= distancerange && distancerange <= '3000'){
 price2.innerHTML =  urange2000to3000 ;
 document.getElementById("pricex").value = urange2000to3000;
}
	 
 var pricex = document.getElementById("pricex"); // "moo" is the 'id' of the text field
	  
	
		  
    } else {
      window.alert('Location Detection Problem. You will have to confirm your Delivery charges on phone call.');
    }
		 
  });
  
}


initMap();

};



var displayError = function (error) {

    //get a reference to the HTML element for writing result
    var locationElement = document.getElementById("locationData");

    //find out which error we have, output message accordingly
    switch (error.code) {
        case error.PERMISSION_DENIED:
            locationElement.innerHTML = "Permission was denied";
            break;
        case error.POSITION_UNAVAILABLE:
            locationElement.innerHTML = "Location data not available";
            break;
        case error.TIMEOUT:
            locationElement.innerHTML = "Location request timeout";
            break;
        case error.UNKNOWN_ERROR:
            locationElement.innerHTML = "An unspecified error occurred";
            break;
        default:
            locationElement.innerHTML = "Who knows what happened...";
            break;
    }
};



