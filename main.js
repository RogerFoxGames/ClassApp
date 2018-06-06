var app = angular.module("ClassApp", [])

app.controller("ControllerPrincipale",function($scope){
    $scope.cesare = {
        "nome": "Cesare",
        "cognome": "Vianello",
        "eta": 17
    }//JSON

    $scope.saluto = function(){
        console.log("Ciao "+$scope.cesare.nome+" di anni "+$scope.cesare.eta);
    }
})