var app=angular.module('app', []);
angular.module('app').controller('scheduleCtrl', function($scope, registration){
  $scope.title=registration.title;
});

app.service('registration', function() {
  return {title: 'Service from Service'};
});

app.value('myValSvc', 'someVal');
app.factory('registration', {title: 'Service from factory'});

var Registration = function() {
  this.title = 'Service from service';
}
Registration.prototype.name = function() {
  return this.title;
}

app.service('registration', Registration);

app.config(function($provide){
  $provide.provider('registration2', function(){
      var type;
      return {
        setType: function (value) {
          type = value
        },
        $get: function () {
          return {
            title: "service from provider " + type
          }
        }
      }
  })
});
app.config(function(registration2provider){
  registration2provider.setType("moo");
});

angular.module('app').service('classRegistration', function($http, policies){
  return {
    register: function(newCourse, student){
      if (policies.canRegisterStudent(newCourse, student)) {

      }
    }
  }
});

function Course(title, credits, instrcutorIds){
  this.title = title;
  this.credits = credits;
  this.instructorIds = instrcutorIds;
}


Course.prototype.displayName = function() {}

/* service */
app.value('courseFactory', {
  createCourse: function(title, credits, instructors) {
    var instructorIds = _.pluck(instructors, 'id');
    return new Course(title, credits, instructorIds)
;
  }
});

app.controller('newCourseCtrl', function($scope, catalog, courseFactory){
  $scope.register = function() {
    var newCourse = courseFactory.createCourse($scope.title, $scope.credits, $scope.instructors);
    catalog.add(newCourse);
  }
});

/**
 * Service as facotry: make other objects
 */

/** stateful singleton
 * holds data and state
 *
 *
 * */

app.value('schedule', {
  courses:  [],
  addCourse : function(course){
    if (!_.find(courses, course)){
      this.courses.push(course);
    }
  },
  removeCourse : function(course) {
    var droppable = _.find(courses, course);
    remove(droppable);
  }
});

app.controller('regist3', function($scope, schedule){
  $scope.courses = [{name: "chem"}, {name: "bio"}];
  $scope.schedule = schedule;
})


/**
 Service as Function
 */

app.value('grades', []);

app.value('calculateGPA',  function(grades){
  return "4.9";
});

app.controller('userCtrl', function($scope, grades, calculateGPA){
  $scope.GPA = calculateGPA(grades);
})

