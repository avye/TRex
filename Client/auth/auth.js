angular.module('app.auth', [])

.controller('AuthController', function ($scope, $location, servicesFactory) {
  $scope.username = '';

  $scope.racename = '';

  $scope.ctrlSignIn = function () {
    console.log("signIn on controller working");
    servicesFactory.factorySignIn($scope.username, $scope.racename)
    .then(function (token) {
      $location.path('/raceView/' + $scope.racename);
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  // $scope.signup = function () {
  //   Auth.signup($scope.user)
  //     .then(function () {
  //       $location.path('/');
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };
});