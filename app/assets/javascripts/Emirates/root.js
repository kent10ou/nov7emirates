app.controller('RootCtrl', ['$document', '$scope',
	function ($document, $scope) {

	$scope.openMap = function() {
		window.open('https://www.google.com/maps?ll=40.668451,-74.280348&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=10245295106732961418')
	}

}])