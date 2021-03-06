 var map;
    var pos;
    var infowindow;
    function initMap() {    
      $.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?')
            .done(function(location) {
                pos = {
                    lat: location.latitude,
                    lng: location.longitude
                }        
                console.log(location)
        map = new google.maps.Map(document.getElementById('map'), {
            center: pos,
            zoom: 15
        });
        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: pos,
            radius: 1000,
            type: 'atm'
        }, callback);
       });
    }
    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }
    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }