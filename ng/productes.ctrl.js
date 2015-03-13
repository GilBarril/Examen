angular.module('appLearn')
.controller('ProductesController', function($scope, ProductesServei) {
      var id;
      ProductesServei.query(function(productes) {
          $scope.productes = productes;
      });
      $scope.refresh = function() {
          ProductesServei.query(function(productes) {
              $scope.productes = productes;
          });
      }
      $scope.afegirproducte = function() {
          ProductesServei.save({
              codi: $scope.codi,
              nom: $scope.nom,
              seccio: $scope.seccio,
              preu: $scope.preu,
             
          }, function() {
              $scope.refresh();
              $scope.nom = "";
              $scope.codi="";
              $scope.seccio="";
              $scope.preu = "";            
          });
      }
      $scope.editarproducte = function(producte) {
          $scope.codiE = producte.codi;
          $scope.nomE = producte.nom;
          $scope.seccioE = producte.seccio;
          $scope.preuE = producte.preu;
          $scope.productepereditar = producte;
      }
      $scope.modificarproducte = function() {
          ProductesServei.update({id:$scope.productepereditar.codi}, {
              codi: $scope.codiE,
              nom: $scope.nomE,
              seccio: $scope.seccioE,
              preu: $scope.preuE
          }, function(producte) {
              $scope.productepereditar = producte;
              $scope.refresh();
              $scope.codiE="";
              $scope.nomE = "";
              $scope.seccioE = "";
              $scope.preuE = ""
          });
      }
      $scope.borrarproducte = function(producte) {
          ProductesServei.remove({id:producte.codi});
          $scope.refresh();
      }
  });