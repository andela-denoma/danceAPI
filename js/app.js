
var app = angular.module('dances', []);

app.controller('mainController', function($scope, $http){
  $scope.getData = function (){
  $http.get('https://valentine-gift.herokuapp.com/users/gifts').success(function(response) {$scope.gifts = response}
  );
};
  $scope.getData();
  
 $scope.getGift = function () {
      
      $http({
        method  : 'POST',
        url     : 'https://valentine-gift.herokuapp.com/users/gifts',
        data    : $.param({name: $scope.name, description: $scope.description, price: $scope.price}),  
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
       }
      ).success(function () {
        console.log('Item Added');
        $scope.name ='';
        $scope.description = '';
        $scope.price = '';

        $scope.getData();
      })
      .error(function () {
        console.log('Error occured');
      });
    };

});
