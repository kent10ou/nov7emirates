// Declare application & add dependencies
var app = angular.module('HenryPrecisionMachining', [
	'angulartics', // Google Analytics
	'angularVideoBg', // Background video player
	'bootstrapLightbox', // Lightbox
	'ngFileUpload', // Angular file upload
	'ngTouch', // Allow for Angular Touch
	'templates', // Allow for templates
	'toastr', // Allow for notifications
	'ui.bootstrap', // Bootrap JS functions built for Angular
	'ui.router' // Router
])

app.config(['LightboxProvider', function (LightboxProvider) {
	LightboxProvider.templateUrl = 'lightbox.html'
}])