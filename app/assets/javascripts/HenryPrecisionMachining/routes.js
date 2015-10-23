app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
	function ($locationProvider, $stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/')

	$stateProvider
	.state('root', {
		url: '/',
		templateUrl: 'root.html',
		controller: 'RootCtrl'
	})
	.state('our_work', {
		url: '/our_work',
		templateUrl: 'our_work.html',
		controller: 'OurWorkCtrl'
	})
	.state('request_quote', {
		url: '/request_quote',
		templateUrl: 'request_quote.html',
		controller: 'RequestQuoteCtrl'
	})

	$locationProvider.html5Mode(true)
}])