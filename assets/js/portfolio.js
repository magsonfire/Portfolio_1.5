var app = angular.module('portApp', []);

app.controller('DrawingsController',

    function DrawingsController($scope) {
        $scope.categories = ['Soft', 'Elements'];

        $scope.drawings = [{
            name: 'Water',
            category: 'Elements',
            value: '2'
        }, {
            name: 'Fire',
            category: 'Elements',
            value: '1'
        }, {
            name: 'Air',
            category: 'Elements',
            value: '4'
        }, {
            name: 'Coton',
            category: 'Soft',
            value: '3'
        }, {
            name: 'Whool',
            category: 'Soft',
            value: '5'
        }];
    }
);

app.controller('myController',
    
    function myController($scope) {
        $scope.users = [
          {
              name:"Mahesh",
              description:"A geek",
              age:"22"
          },
          {
              name:"Ganesh",
              description:"A nerd",
              age:"25"
          },
          {
              name:"Ramesh",
              description:"A noob",
              age:"27"
          },
          {
              name:"Ketan",
              description:"A psychopath",
              age:"26"
          },
          {
              name:"Niraj",
              description:"Intellectual badass",
              age:"29"
          }];
    }
);

    $(function () {
        $('#MixItUpContainer1').mixItUp();
    });