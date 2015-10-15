(function() {
  'use strict';

  angular
    .module('aptop')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $http, $scope, $colorThief, $sce) {

    $http.get('http://ap25.s3-website-us-east-1.amazonaws.com/data/data2.json').success(function(data) {
      //var stringed = JSON.stringify(data.results);
      //var newStringed = stringed.replace(/team_link_2\/_text/g, 'team_text');
      //var newRanks = JSON.parse(newStringed);


      var goodteams = [];
      //$scope.teams = newRanks;
      angular.forEach(data.data, function (team) {
      team.rank = parseFloat(team.rank.toString());
      team.team_name = team.team_name[0].toString();
      team.logo = team.logo[0].replace(/\&h\=150\&w\=150/i, '');
      var localLogo = team.logo.substring(team.logo.lastIndexOf('/')+1);
      team.logo = "/assets/images/"+localLogo;
      team.bad = false;



      if(team.rank===86){
        team.bad=true;
      }
      else {
        $scope.circleOfTrust = function(){
          return $sce.trustAsHtml(team.schedule);
        };
        goodteams.push(team);
      }


      });

      $scope.teams = goodteams;
      return goodteams;
    });


  }
})();
