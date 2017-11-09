var app = angular.module("myApp",['ui.router']);
	app.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/home');
	    $stateProvider
	    	.state('home', {
	            url: '/home',
	            templateUrl: 'views/home.html'
	        })
	        .state('about', {
	        	url: '/about',
	            templateUrl: 'views/about.html'  
	        })
	        .state('contatti', {
	        	url: '/contatti',
	            templateUrl: 'views/contatti.html',
	            controller:'contatti'
	        })
	        .state('registrati',{
	        	url:"/registrati",
	        	templateUrl:"views/registra.html",
	        	controller:'registrati'
	        });
	});