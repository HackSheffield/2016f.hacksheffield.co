function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map-div'), {
    center: {
      lat: 53.381582,
      lng: -1.481965
    },
    scrollwheel: false,
    draggable: false,
    zoom: 16,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true
  });

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  service.getDetails({
    placeId: 'ChIJgT6L4oF4eUgR7WkhyiKVHGE'
  }, function(place, status) {
    console.log(place);
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(
          '<div class="mapInfoWindow"><strong>' + place.name + '</strong><div class="address">' +
          place.formatted_address + '</div>' + '<div class="view-link"><a target="_blank" ' +
          'href="' + place.url + '">View on Google Maps</a></div></div>'
        );
        infowindow.open(map, this);
      });
    }
  });

  google.maps.event.addListener(map, 'click', function(event) {
    this.setOptions({
      draggable: true,
      scrollwheel: true
    });
  });

  google.maps.event.addListener(map, 'mouseover', function(event) {
    this.setOptions({
      draggable: true,
      streetViewControl: true,
      zoomControl: true
    });
  });

  google.maps.event.addListener(map, 'mouseout', function(event) {
    this.setOptions({
      scrollwheel: false,
      draggable: false
    });
  });
}
