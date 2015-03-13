angular.module('appLearn')
.service("ProductesServei", function($resource) {
      return $resource('/api/productes/:id', null, {
          'update': {
              method: 'PUT'
          }
      });
  })