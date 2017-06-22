	// create the module and name it mcPort
	var mcPort = angular.module('mcPort', ['ngRoute']);

	// configure our routes
	mcPort.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'app/components/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'app/components/about.html',
				controller  : 'aboutController'
			})

			// route for the portfolio page
			.when('/portfolio', {
				templateUrl : 'app/components/portfolio.html',
				controller  : 'portfolioController',
				// resolve: {
		  //         // I will cause a 1 second delay
		  //         delay: function($q, $timeout) {
		  //           var delay = $q.defer();
		  //           $timeout(delay.resolve, 1000);
		  //           return delay.promise;
		  //       	}
		  //       }
			})

			// route for the blog page
			.when('/blog', {
				templateUrl : 'app/components/blog.html',
				controller  : 'blogController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'app/components/contact.html',
				controller  : 'contactController'
			})

			// call function to route project pages
			// route for the project page
			.when('/portfolio/ant100', {
				templateUrl : 'app/components/portfolio/ant100.html',
				controller  : 'ant100Controller'
			})
			.when('/portfolio/avcon', {
				templateUrl : 'app/components/portfolio/avcon.html',
				controller  : 'avconwwController'
			})
			.when('/portfolio/twiin', {
				templateUrl : 'app/components/portfolio/twiin.html',
				controller  : 'twiinController'
			})
			.when('/portfolio/zeynep', {
				templateUrl : 'app/components/portfolio/zeynep.html',
				controller  : 'zeynepController'
			})
			.when('/portfolio/bfc', {
				templateUrl : 'app/components/portfolio/bfc.html',
				controller  : 'bfcController'
			})
			.when('/portfolio/whoknew', {
				templateUrl : 'app/components/portfolio/whoknew.html',
				controller  : 'whoknewController'
			})
			.when('/portfolio/salon', {
				templateUrl : 'app/components/portfolio/salon.html',
				controller  : 'salonController'
			})

			// route for 404 (otherwise)
			.otherwise({
		        templateUrl : "app/components/404.html",
		        controller  : 'portfolioController'
		    });
			
	});

	// create the controller and inject Angular's $scope
	mcPort.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
			  function($scope, $location, $anchorScroll) {
			    $scope.gotoTop = function() {
			      // set the location.hash to the id of
			      // the element you wish to scroll to.
			      $location.hash('top');

			      // call $anchorScroll()
			      $anchorScroll();
			    };
			  }]);

	mcPort.controller('mainController', ['$location', function($scope, $location) {
		$scope.message = 'Put things here';
		// Set nav button to active when on this page
		// $scope.isActive = function (viewLocation) {
		//      var active = (viewLocation === $location.path());
		//      return active;
		// };
		// console.log($location);
	}]);

	mcPort.controller('aboutController', ['$location', function($scope) {
	}]);

	mcPort.directive('mixItUp', function(){
	    return{
	      restrict: 'AEC',
	      templateUrl: 'app/components/mixitup.html',
	      link: function(scope){
	      	var $j = jQuery.noConflict();
	      	$j(function() {
			    $j('.magic').mixItUp();
			});
	      }
	    }
	  });

	mcPort.controller('portfolioController', ['$scope',
	    function PortfolioController($scope) {
	        $scope.categories = ['Web', 'Process', 'Graphic', 'Wireframing', 'Print', 'Copywriting'];

	        $scope.works = [{
	            name: 'ANT100 Course Website',
	            code: 'ant100',
	            client: 'University of Toronto',
	            categories: ['Web', 'Copywriting', 'Process', 'Wireframing'],
	            mix: 'Web Copywriting Process Wireframing',
	            description: 'A course website with intuitive organization and interactive features to engage students.',
	            date: '1'
	        }, 
	        {
	            name: 'AVCON WW',
	            code: 'avcon',
	            client: 'AVCON.WW inc.',
	            categories: ['Web', 'Copywriting', 'Graphic'],
	            mix: 'Web Copywriting Graphic',
	            description: 'Wordpress website, flowchart, and corporate brochure for AVCON.WW inc., an aviation consultancy.',
	            date: '2'
	        }, 
	        {
	            name: 'Twiin',
	            code: 'twiin',
	            client: 'Chartreuse Media',
	            categories: ['Web', 'Graphic', 'Print', 'Copywriting'],
	            mix: 'Web Graphic Print Copywriting',
	            description: 'Website, press kit, and business card for local lovers rock musician, Twiin Jesse.',
	            date: '3'
	        }, {
	            name: 'Zeynep Ozbilen',
	            code: 'zeynep',
	            client: 'Chartreuse Media',
	            categories: ['Web', 'Print'],
	            mix: 'Web Print',
	            description: 'Wordpress website and marketing collateral for Toronto WorldJazz sensation, Zeynep Ozbilen.',
	            date: '4'
	        }, {
	            name: 'Bright Futures Conference',
	            code: 'bfc',
	            client: 'BFYM Canada',
	            categories: ['Grahpic', 'Print', 'Copywriting'],
	            mix: 'Graphic Print Copywriting',
	            description: 'Fundraising conference, graphics, brochures, and WordPress website management for a nonprofit international development organization.',
	            date: '5'
	        }, {
	            name: 'Who Knew?',
	            code: 'whoknew',
	            client: 'Toronto Public Library',
	            categories: ['Graphic', 'Copywriting'],
	            mix: 'Graphic Copywriting',
	            description: 'Design and copy for the winning advertisement in a case competition run by UDesign, a student-run design agency at the University of Toronto.',
	            date: '6'
	        }, {
	        	name: 'Salon Series',
	            code: 'salon',
	            client: 'Chartreuse Media',
	            categories: ['Web', 'Print', 'Copywriting'],
	            mix: 'Web Print Copywriting',
	            description: 'Website and  event-planning for Chartreuse Media\'s Salon Series.',
	            date: '7'
	        }
	        // {
	        // 	name: 'Health Promotion Programs',
	        //     code: 'health',
	        //     client: 'University of Toronto',
	        //     category: 'Print, Graphics, Copywriting',
	        //     description: 'Posters for health promotion programs, and packaging for a hypothetical consumer packaged good.',
	        //     date: '8'
	        // }
	        ];
	    }]
	);

	mcPort.filter("nl2br", function($filter) {
	 return function(data) {
	   if (!data) return data;
	   return data.replace(/\n\r?/g, '<br />');
	 };
	});

	mcPort.controller('blogController', function($scope) {
		$scope.message = 'Put things here';

		$scope.excerpts = [
			{
				title: 'SLOG: Recursive Rhythms in Computing and Biology',
				date: 'March 3, 2016',
				img: ' ',
				imgalt: ' ',
				ifhidden: 'display:none;',
				excerpt: 'It seems ceaselessly salient to find parallels between programming constructs, biology, and cognition. Where recursion and algorithms allow programmers (Algorithm alchemists? Mathemagicians?) to weave much more complex patterns and lattices than the basic binary encoding suggests, biology builds self-exapting brains capable of composing recursive language from simple self-organizing algorithms.',
				link: 'https://dreamspindle.wordpress.com/2016/03/03/slog-recursive-rhythms-in-computing-and-biology/'
			},
			{
				title: 'Kindness Kills',
				date: 'April 1, 2015',
				img: '../assets/img/blog/winter.jpg',
				imgalt: 'Winter',
				ifhidden: '',
				excerpt: 'Kindness kills with the calm of winter.\
							\nIt freezes my fist in its fetal form,\
							\nit steals the heat from my words, vapour ghosts gone mid-air,\
							\nit gathers my thoughts under its gracious light\
							\nand reveals the skeletal bark I have donned\
							\nin the mirror-pools of your frozen lake-face.',
				link: 'https://dreamspindle.wordpress.com/2015/04/01/kindness-kills/'
			},			
			{
				title: 'Colossus Winter',
				date: 'February 1, 2014',
				img: ' ',
				imgalt: ' ',
				ifhidden: 'display:none;',
				excerpt: 'Shannon tells me she thinks it is the ghosts of them that trail my mind, turning over stones to unveil the squirming doubts and insecurities beneath. She’s right. My mind is a coin caught in a carnival collector’s bowl, circling the sides in a circadian spiral that never seems to cease.',
				link: 'https://dreamspindle.wordpress.com/2014/02/01/colossus-winter/'
				}
			];
	});

	mcPort.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});