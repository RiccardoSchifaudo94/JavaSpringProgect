var app = angular.module("myApp",['ui.router']);
	app.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/home');
	    $stateProvider
	    	.state('home', {
	            url: '/home',
	            templateUrl: 'views/home.html',
	            controller:'home'
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
	        .state('registra',{
	        	url:"/registrati",
	        	templateUrl:"views/registra.html",
	        	controller:'registra'
	        })
		    .state('lista_utenti',{
	        	url:"/lista_utenti",
	        	templateUrl:"views/lista_utenti.html",
	        	controller:'lista_utenti'
	        });
	});