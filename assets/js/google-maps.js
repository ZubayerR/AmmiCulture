function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 39.952874182412494, lng: -75.16738984135816};

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '1319 Market St #25 Philadelphia, PA 19107 USA' // Title Location
    });
}
