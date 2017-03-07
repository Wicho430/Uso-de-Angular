var numero1 = 5
var numero2 = 5
var Luis = angular.module('Luis', []);
Luis.controller('Operacion', function($scope) {
  $scope.suma = numero1 + numero2;
  $scope.multiplicacion = numero1 * numero2;
}); 


