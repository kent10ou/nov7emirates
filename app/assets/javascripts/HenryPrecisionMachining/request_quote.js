app.controller('RequestQuoteCtrl', ['$scope', '$state', 'toastr', 'Upload',
	function ($scope, $state, toastr, Upload) {

	// Make sure min-height covers full screen
	document.getElementById('requestQuote').style.minHeight = window.innerHeight - 75 - 48 + 'px'

	$scope.request = { name: null, company: null, email: null, phone: null, message: null, urgent: false, files: null }

	$scope.toggleUrgent = function() {
		$scope.request.urgent = !$scope.request.urgent
	}

	$scope.submit = function(request, files) {
		$scope.disabled = true
		var emailMsg = '<b>Company</b>: ' + request.company + '<br><br><b>Name</b>: ' + request.name + '<br><br><b>Email</b>: ' + request.email + '<br><br><b>Phone</b>: ' + request.phone + '<br><br><b>Message</b>: ' + request.message + '<br><br>'
		var emailSubject = 'New Request'

		if(request.urgent) {
			emailMsg = '<b>URGENT</b><br><br>' + emailMsg
			emailSubject += ' [URGENT]'
		}

		Upload.upload({
			url: '/api/requests',
			method: 'POST',
			data: {
				to: request.email,
				name: request.name,
				message: emailMsg,
				subject: emailSubject
			},
			file: files
		})
		.then(function(result) {
			toastr.success('We will get back to you shortly', 'Email sent successfully')
			$state.go('root')
		}, function(response) {
			toastr.warning('Please give us a call or send us an email directly', 'Email could not be sent')
			$state.go('root')
		})
	}

}])