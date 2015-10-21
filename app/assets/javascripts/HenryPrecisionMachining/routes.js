app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
	function ($locationProvider, $stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/')


	// ==========================================================================
	// ================================== ROOT ==================================
	// ==========================================================================
	$stateProvider
	.state('root', {
		url: '/',
		templateUrl: 'root.html',
		controller: 'RootCtrl'
	})

	$locationProvider.html5Mode(true)
}])