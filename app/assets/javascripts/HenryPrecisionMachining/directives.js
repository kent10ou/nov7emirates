app.directive('emailLink', function() {
	return {
		restrict: 'A',
		link: function($scope, element, attrs) {
			// Open email client on click
			element.bind('click', function() {
				window.location.href = 'mailto:inquiry@henryprecision.com'
			})

			// Add class for formatting
			element.addClass('emailLink')
		}
	}
})