app.controller('RequestQuoteCtrl', ['$scope',
	function ($scope) {

	$scope.request = { name: null, company: null, email: null, phone: null, message: null, urgent: false }

	$scope.toggleUrgent = function() {
		$scope.request.urgent = !$scope.request.urgent
	}

	// Make sure min-height covers full screen
	document.getElementById('requestQuote').style.minHeight = window.innerHeight - 75 - 48 + 'px'

}])