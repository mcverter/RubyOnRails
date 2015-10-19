var app = angular.module("superhero", []);

app.directive("superman", function() {
    return {
        restrict: "E",
        template: "<div>Here I am to save</div>"
    }
});
app.directive("duperman", function() {
    return {
        restrict: "A",
        link: function () {
            alert("I'm werking");
        }
    }
});
app.directive("flash", function() {
    return {
        restrict: "A",
        link: function () {
            alert("I'm fast");
        }
    }
})