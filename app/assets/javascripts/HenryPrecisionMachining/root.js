app.controller('RootCtrl', ['$document', '$http', '$scope',
	function ($document, $http, $scope) {

	var coordinates = { lat: 40.66837400000001, lng: -74.27831400000002 }

	var map = new google.maps.Map(document.getElementById('map'), {
		center: coordinates,
		zoom: 17
	})

	var infowindow = new google.maps.InfoWindow({
		content: '<b>Henry Precision Machining</b><br>345 Market Street<br>Kenilworth, NJ 07033'
	})

	var marker = new google.maps.Marker({
		position: coordinates,
		map: map,
		title: 'Henry Precision Machining'
	})

	
		infowindow.open(map, marker)
	
	
}])