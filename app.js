var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
  $scope.title = "";
  $scope.body = "";
 $scope.UserId = ''
 $scope.bulkData = [];
 $scope.getUpdate = () =>{
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        $scope.bulkData = response.data;
    });
 }

 $scope.SubmitForm = ()=>
 {
    $http.post("https://jsonplaceholder.typicode.com/posts",
    {        
        title: $scope.title,
        body: $scope.body,
        UserId: $scope.UserId
    }).then(function (response) {        
        $scope.getUpdate();

        }, function (response) {
        
        // this function handles error
        });

 }

});