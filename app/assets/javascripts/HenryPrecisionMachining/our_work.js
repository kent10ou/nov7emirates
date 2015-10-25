app.controller('OurWorkCtrl', ['Lightbox', '$scope',
	function (Lightbox, $scope) {

	$scope.pics = []
	var images = []
	for (var count = 1; count <= 21; count++) {
		images.push('https://d2oku4nz4qgjsk.cloudfront.net/' + count + '.JPG')
		$scope.pics.push({ 'background-image': 'url("' + 'https://d2oku4nz4qgjsk.cloudfront.net/' + count + '.JPG' + '")' })
	}

	$scope.openLightboxModal = function (index) {
		if(window.innerWidth > 989) {
			Lightbox.openModal(images, index)
		}
	}

}])