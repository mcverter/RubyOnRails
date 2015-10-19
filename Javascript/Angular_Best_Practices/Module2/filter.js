var app=angular.module('app',[]);
app.filter("ratings", function(){
  return function(input){
    var rating = parseInt(input);
    var result = "";
    for (var i=0;i<rating;i++){
      result += "*";
    }
    return result;
  }
});

app.controller('classCtrl', function($scope, ratingsFilter){
  $scope.classes = [
    {name:"chemistry", rating:2},
    {name:"math", rating:3},
    {name:"bio", rating:2},


  ]
})