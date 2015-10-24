app.controller('OurWorkCtrl', ['$scope',
	function ($scope) {

	$scope.pics = []
	for (var count = 1; count <= 21; count++) {
		$scope.pics.push({ 'background-image': 'url("' + 'https://d2oku4nz4qgjsk.cloudfront.net/' + count + '.JPG' + '")' })
	}

}])