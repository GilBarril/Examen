angular.module("appLearn",["ngResource"]),angular.module("appLearn").controller("ProductesController",["$scope","ProductesServei",function(e,o){o.query(function(o){e.productes=o}),e.refresh=function(){o.query(function(o){e.productes=o})},e.afegirproducte=function(){o.save({codi:e.codi,nom:e.nom,seccio:e.seccio,preu:e.preu},function(){e.refresh(),e.nom="",e.codi="",e.seccio="",e.preu=""})},e.editarproducte=function(o){e.codiE=o.codi,e.nomE=o.nom,e.seccioE=o.seccio,e.preuE=o.preu,e.productepereditar=o},e.modificarproducte=function(){o.update({id:e.productepereditar.codi},{codi:e.codiE,nom:e.nomE,seccio:e.seccioE,preu:e.preuE},function(o){e.productepereditar=o,e.refresh(),e.codiE="",e.nomE="",e.seccioE="",e.preuE=""})},e.borrarproducte=function(r){o.remove({id:r.codi}),e.refresh()}}]),angular.module("appLearn").service("ProductesServei",["$resource",function(e){return e("/api/productes/:id",null,{update:{method:"PUT"}})}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInByb2R1Y3Rlcy5jdHJsLmpzIiwicHJvZHVjdGVzLnN2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIlByb2R1Y3Rlc1NlcnZlaSIsInF1ZXJ5IiwicHJvZHVjdGVzIiwicmVmcmVzaCIsImFmZWdpcnByb2R1Y3RlIiwic2F2ZSIsImNvZGkiLCJub20iLCJzZWNjaW8iLCJwcmV1IiwiZWRpdGFycHJvZHVjdGUiLCJwcm9kdWN0ZSIsImNvZGlFIiwibm9tRSIsInNlY2Npb0UiLCJwcmV1RSIsInByb2R1Y3RlcGVyZWRpdGFyIiwibW9kaWZpY2FycHJvZHVjdGUiLCJ1cGRhdGUiLCJpZCIsImJvcnJhcnByb2R1Y3RlIiwicmVtb3ZlIiwic2VydmljZSIsIiRyZXNvdXJjZSIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQUFDLE9BQUEsWUFBQSxlQ0FBRCxRQUFBQyxPQUFBLFlBQ0FDLFdBQUEsdUJBQUEsU0FBQSxrQkFBQSxTQUFBQyxFQUFBQyxHQUVBQSxFQUFBQyxNQUFBLFNBQUFDLEdBQ0FILEVBQUFHLFVBQUFBLElBRUFILEVBQUFJLFFBQUEsV0FDQUgsRUFBQUMsTUFBQSxTQUFBQyxHQUNBSCxFQUFBRyxVQUFBQSxLQUdBSCxFQUFBSyxlQUFBLFdBQ0FKLEVBQUFLLE1BQ0FDLEtBQUFQLEVBQUFPLEtBQ0FDLElBQUFSLEVBQUFRLElBQ0FDLE9BQUFULEVBQUFTLE9BQ0FDLEtBQUFWLEVBQUFVLE1BRUEsV0FDQVYsRUFBQUksVUFDQUosRUFBQVEsSUFBQSxHQUNBUixFQUFBTyxLQUFBLEdBQ0FQLEVBQUFTLE9BQUEsR0FDQVQsRUFBQVUsS0FBQSxNQUdBVixFQUFBVyxlQUFBLFNBQUFDLEdBQ0FaLEVBQUFhLE1BQUFELEVBQUFMLEtBQ0FQLEVBQUFjLEtBQUFGLEVBQUFKLElBQ0FSLEVBQUFlLFFBQUFILEVBQUFILE9BQ0FULEVBQUFnQixNQUFBSixFQUFBRixLQUNBVixFQUFBaUIsa0JBQUFMLEdBRUFaLEVBQUFrQixrQkFBQSxXQUNBakIsRUFBQWtCLFFBQUFDLEdBQUFwQixFQUFBaUIsa0JBQUFWLE9BQ0FBLEtBQUFQLEVBQUFhLE1BQ0FMLElBQUFSLEVBQUFjLEtBQ0FMLE9BQUFULEVBQUFlLFFBQ0FMLEtBQUFWLEVBQUFnQixPQUNBLFNBQUFKLEdBQ0FaLEVBQUFpQixrQkFBQUwsRUFDQVosRUFBQUksVUFDQUosRUFBQWEsTUFBQSxHQUNBYixFQUFBYyxLQUFBLEdBQ0FkLEVBQUFlLFFBQUEsR0FDQWYsRUFBQWdCLE1BQUEsTUFHQWhCLEVBQUFxQixlQUFBLFNBQUFULEdBQ0FYLEVBQUFxQixRQUFBRixHQUFBUixFQUFBTCxPQUNBUCxFQUFBSSxjQ2xEQVAsUUFBQUMsT0FBQSxZQUNBeUIsUUFBQSxtQkFBQSxZQUFBLFNBQUFDLEdBQ0EsTUFBQUEsR0FBQSxxQkFBQSxNQUNBTCxRQUNBTSxPQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHBMZWFybicsIFsnbmdSZXNvdXJjZSddKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwTGVhcm4nKVxuLmNvbnRyb2xsZXIoJ1Byb2R1Y3Rlc0NvbnRyb2xsZXInLCBmdW5jdGlvbigkc2NvcGUsIFByb2R1Y3Rlc1NlcnZlaSkge1xuICAgICAgdmFyIGlkO1xuICAgICAgUHJvZHVjdGVzU2VydmVpLnF1ZXJ5KGZ1bmN0aW9uKHByb2R1Y3Rlcykge1xuICAgICAgICAgICRzY29wZS5wcm9kdWN0ZXMgPSBwcm9kdWN0ZXM7XG4gICAgICB9KTtcbiAgICAgICRzY29wZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgUHJvZHVjdGVzU2VydmVpLnF1ZXJ5KGZ1bmN0aW9uKHByb2R1Y3Rlcykge1xuICAgICAgICAgICAgICAkc2NvcGUucHJvZHVjdGVzID0gcHJvZHVjdGVzO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgJHNjb3BlLmFmZWdpcnByb2R1Y3RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgUHJvZHVjdGVzU2VydmVpLnNhdmUoe1xuICAgICAgICAgICAgICBjb2RpOiAkc2NvcGUuY29kaSxcbiAgICAgICAgICAgICAgbm9tOiAkc2NvcGUubm9tLFxuICAgICAgICAgICAgICBzZWNjaW86ICRzY29wZS5zZWNjaW8sXG4gICAgICAgICAgICAgIHByZXU6ICRzY29wZS5wcmV1LFxuICAgICAgICAgICAgIFxuICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkc2NvcGUucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAkc2NvcGUubm9tID0gXCJcIjtcbiAgICAgICAgICAgICAgJHNjb3BlLmNvZGk9XCJcIjtcbiAgICAgICAgICAgICAgJHNjb3BlLnNlY2Npbz1cIlwiO1xuICAgICAgICAgICAgICAkc2NvcGUucHJldSA9IFwiXCI7ICAgICAgICAgICAgXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAkc2NvcGUuZWRpdGFycHJvZHVjdGUgPSBmdW5jdGlvbihwcm9kdWN0ZSkge1xuICAgICAgICAgICRzY29wZS5jb2RpRSA9IHByb2R1Y3RlLmNvZGk7XG4gICAgICAgICAgJHNjb3BlLm5vbUUgPSBwcm9kdWN0ZS5ub207XG4gICAgICAgICAgJHNjb3BlLnNlY2Npb0UgPSBwcm9kdWN0ZS5zZWNjaW87XG4gICAgICAgICAgJHNjb3BlLnByZXVFID0gcHJvZHVjdGUucHJldTtcbiAgICAgICAgICAkc2NvcGUucHJvZHVjdGVwZXJlZGl0YXIgPSBwcm9kdWN0ZTtcbiAgICAgIH1cbiAgICAgICRzY29wZS5tb2RpZmljYXJwcm9kdWN0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIFByb2R1Y3Rlc1NlcnZlaS51cGRhdGUoe2lkOiRzY29wZS5wcm9kdWN0ZXBlcmVkaXRhci5jb2RpfSwge1xuICAgICAgICAgICAgICBjb2RpOiAkc2NvcGUuY29kaUUsXG4gICAgICAgICAgICAgIG5vbTogJHNjb3BlLm5vbUUsXG4gICAgICAgICAgICAgIHNlY2NpbzogJHNjb3BlLnNlY2Npb0UsXG4gICAgICAgICAgICAgIHByZXU6ICRzY29wZS5wcmV1RVxuICAgICAgICAgIH0sIGZ1bmN0aW9uKHByb2R1Y3RlKSB7XG4gICAgICAgICAgICAgICRzY29wZS5wcm9kdWN0ZXBlcmVkaXRhciA9IHByb2R1Y3RlO1xuICAgICAgICAgICAgICAkc2NvcGUucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAkc2NvcGUuY29kaUU9XCJcIjtcbiAgICAgICAgICAgICAgJHNjb3BlLm5vbUUgPSBcIlwiO1xuICAgICAgICAgICAgICAkc2NvcGUuc2VjY2lvRSA9IFwiXCI7XG4gICAgICAgICAgICAgICRzY29wZS5wcmV1RSA9IFwiXCJcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgICRzY29wZS5ib3JyYXJwcm9kdWN0ZSA9IGZ1bmN0aW9uKHByb2R1Y3RlKSB7XG4gICAgICAgICAgUHJvZHVjdGVzU2VydmVpLnJlbW92ZSh7aWQ6cHJvZHVjdGUuY29kaX0pO1xuICAgICAgICAgICRzY29wZS5yZWZyZXNoKCk7XG4gICAgICB9XG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHBMZWFybicpXG4uc2VydmljZShcIlByb2R1Y3Rlc1NlcnZlaVwiLCBmdW5jdGlvbigkcmVzb3VyY2UpIHtcbiAgICAgIHJldHVybiAkcmVzb3VyY2UoJy9hcGkvcHJvZHVjdGVzLzppZCcsIG51bGwsIHtcbiAgICAgICAgICAndXBkYXRlJzoge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnXG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gIH0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=