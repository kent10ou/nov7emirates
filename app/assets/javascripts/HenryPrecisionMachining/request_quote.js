app.controller('RequestQuoteCtrl', ['$scope',
	function ($scope) {

	$scope.request = { name: null, company: null, email: null, phone: null, message: null, urgent: false }

	$scope.toggleUrgent = function() {
		$scope.request.urgent = !$scope.request.urgent
	}

}])