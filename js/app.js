var app = angular.module('myApp', []);
app.controller('myController', function($scope){
  $scope.students = [
  {
    name : 'Angie',
    lastname : 'Barrantes',
    age : 22
  },
  {
    name : 'Yuto',
    lastname : 'Nakajima',
    age : 23
  },
  {
    name : 'Ryosuke',
    lastname : 'Yamada',
    age : 24
  },
  {
    name : 'Kei',
    lastname : 'Inoo',
    age : 26
  },
  {
    name : 'Joseph',
    lastname : 'Insil',
    age : 24
  }
  ];
  $scope.studentsToAdd = [
  {
    name : '',
    lastname : '',
    age : null
  }];
  $scope.studentToEdit = [
  {
    name : '',
    lastname : '',
    age : null
  }];
  $scope.deleteStudent = function(x){
    var indexStudent = $scope.students.indexOf(x);
    $scope.students.splice(indexStudent, 1);

  }
  $scope.addStudent = function(){
    document.getElementById("js-form").className="visible";
    $scope.studentsToAdd.push(
    {
      name : '',
      lastname : '',
      age : null
    }
    )
  }
  $scope.submitNewStudent= function(x){
    var index = $scope.studentsToAdd.indexOf(x);
    $scope.studentsToAdd.splice(index, 1);
    $scope.studentsToAdd.push(angular.copy(x));
    $scope.students.push(x);
  }
  $scope.updateStudent = function(x){
    document.getElementById("js-update").className="visible";
    /*$scope.studentToEdit.name = $scope.x.name;
    $scope.studentToEdit.lastname = $scope.x.lastname;
    $scope.studentToEdit.age = $scope.x.age;*/
    $scope.studentsToAdd.push({
      name : '',
      lastname : '',
      age : null
    })
  }
});




