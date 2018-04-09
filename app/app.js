var pomoClock = angular.module('pomoClock',[]);


pomoClock.controller('clockController',['$scope',function($scope){

 $scope.num = 25;


  $scope.ascend = function(num){
    $scope.num += 1 ;
    $scope.startIf = false;
    $scope.count = 1;
    $scope.clickNumber = 0 ;
    document.getElementById('time').innerHTML = $scope.num.toString() +':'+ '00';
    //console.log($scope.num);
  };

  $scope.descend = function(num){
    $scope.num -= 1 ;
    $scope.startIf = false;
    $scope.count = 1;
    $scope.clickNumber = 0 ;
    document.getElementById('time').innerHTML = $scope.num.toString() +':'+ '00';
    //console.log($scope.num);
  };

  $scope.startIf = true;
  $scope.reverseSeconds =  $scope.num*60 ;
  $scope.count = 1;

 $scope.startTime = function() {

     if($scope.startIf){
     $scope.reverseSeconds = 60*($scope.num) - $scope.count ;
     $scope.minute = Math.floor($scope.reverseSeconds / 60);
     //console.log($scope.minute);
     $scope.second = $scope.reverseSeconds % 60 ;
     //console.log($scope.second);

     document.getElementById('time').innerHTML = $scope.minute.toString() +':'+ $scope.second.toString();
     $scope.count += 1;
     setTimeout($scope.startTime, 1000);
     }
 };

 $scope.clickNumber = 0 ;

 $scope.clockActivate = function(){

     $scope.clickNumber = $scope.clickNumber+1;
     //console.log($scope.clickNumber);
     if ($scope.clickNumber % 2 == 1){
         $scope.startIf = true;
         $scope.startTime();
     } else {
         $scope.startIf = false;
     }
 };








  }]);
