angular.module("appLearn", ["ngResource"]), angular.module("appLearn").controller("ProductesController", ["$scope", "ProductesServei",
    function(e, r) {
        r.query(function(r) {
            e.productes = r
        }), e.refresh = function() {
            r.query(function(r) {
                e.productes = r
            })
        }, e.afegirproducte = function() {
            r.save({
                nom: e.nom,
                preu: e.preu,
                existencies: e.existencies
            }, function() {
                e.refresh(), e.nom = "", e.preu = "", e.existencies = ""
            })
        }, e.editarproducte = function(r) {
            e.nomE = r.nom, e.preuE = r.preu, e.productepereditar = r
        }, e.modificarproducte = function() {
            r.update({
                id: e.productepereditar.nom
            }, {
                nom: e.nomE,
                preu: e.preuE
            }, function(r) {
                e.productepereditar = r, e.refresh(), e.nomE = "", e.preuE = ""
            })
        }, e.borrarproducte = function(o) {
            r.remove({
                id: o.nom
            }), e.refresh()
        }
    }
]), angular.module("appLearn").service("ProductesServei", ["$resource",
    function(e) {
        return e("/api/productes/:id", null, {
            update: {
                method: "PUT"
            }
        })
    }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInByb2R1Y3Rlcy5jdHJsLmpzIiwicHJvZHVjdGVzLnN2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIlByb2R1Y3Rlc1NlcnZlaSIsInF1ZXJ5IiwicHJvZHVjdGVzIiwicmVmcmVzaCIsImFmZWdpcnByb2R1Y3RlIiwic2F2ZSIsIm5vbSIsInByZXUiLCJleGlzdGVuY2llcyIsImVkaXRhcnByb2R1Y3RlIiwicHJvZHVjdGUiLCJub21FIiwicHJldUUiLCJwcm9kdWN0ZXBlcmVkaXRhciIsIm1vZGlmaWNhcnByb2R1Y3RlIiwidXBkYXRlIiwiaWQiLCJib3JyYXJwcm9kdWN0ZSIsInJlbW92ZSIsInNlcnZpY2UiLCIkcmVzb3VyY2UiLCJtZXRob2QiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFBQyxPQUFBLFlBQUEsZUNBQUQsUUFBQUMsT0FBQSxZQUNBQyxXQUFBLHVCQUFBLFNBQUEsa0JBQUEsU0FBQUMsRUFBQUMsR0FFQUEsRUFBQUMsTUFBQSxTQUFBQyxHQUNBSCxFQUFBRyxVQUFBQSxJQUVBSCxFQUFBSSxRQUFBLFdBQ0FILEVBQUFDLE1BQUEsU0FBQUMsR0FDQUgsRUFBQUcsVUFBQUEsS0FHQUgsRUFBQUssZUFBQSxXQUNBSixFQUFBSyxNQUNBQyxJQUFBUCxFQUFBTyxJQUNBQyxLQUFBUixFQUFBUSxLQUNBQyxZQUFBVCxFQUFBUyxhQUNBLFdBQ0FULEVBQUFJLFVBQ0FKLEVBQUFPLElBQUEsR0FDQVAsRUFBQVEsS0FBQSxHQUNBUixFQUFBUyxZQUFBLE1BR0FULEVBQUFVLGVBQUEsU0FBQUMsR0FDQVgsRUFBQVksS0FBQUQsRUFBQUosSUFDQVAsRUFBQWEsTUFBQUYsRUFBQUgsS0FDQVIsRUFBQWMsa0JBQUFILEdBRUFYLEVBQUFlLGtCQUFBLFdBQ0FkLEVBQUFlLFFBQUFDLEdBQUFqQixFQUFBYyxrQkFBQVAsTUFDQUEsSUFBQVAsRUFBQVksS0FDQUosS0FBQVIsRUFBQWEsT0FDQSxTQUFBRixHQUNBWCxFQUFBYyxrQkFBQUgsRUFDQVgsRUFBQUksVUFDQUosRUFBQVksS0FBQSxHQUNBWixFQUFBYSxNQUFBLE1BR0FiLEVBQUFrQixlQUFBLFNBQUFQLEdBQ0FWLEVBQUFrQixRQUFBRixHQUFBTixFQUFBSixNQUNBUCxFQUFBSSxjQ3pDQVAsUUFBQUMsT0FBQSxZQUNBc0IsUUFBQSxtQkFBQSxZQUFBLFNBQUFDLEdBQ0EsTUFBQUEsR0FBQSxxQkFBQSxNQUNBTCxRQUNBTSxPQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHBMZWFybicsIFsnbmdSZXNvdXJjZSddKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwTGVhcm4nKVxuLmNvbnRyb2xsZXIoJ1Byb2R1Y3Rlc0NvbnRyb2xsZXInLCBmdW5jdGlvbigkc2NvcGUsIFByb2R1Y3Rlc1NlcnZlaSkge1xuICAgICAgdmFyIGlkO1xuICAgICAgUHJvZHVjdGVzU2VydmVpLnF1ZXJ5KGZ1bmN0aW9uKHByb2R1Y3Rlcykge1xuICAgICAgICAgICRzY29wZS5wcm9kdWN0ZXMgPSBwcm9kdWN0ZXM7XG4gICAgICB9KTtcbiAgICAgICRzY29wZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgUHJvZHVjdGVzU2VydmVpLnF1ZXJ5KGZ1bmN0aW9uKHByb2R1Y3Rlcykge1xuICAgICAgICAgICAgICAkc2NvcGUucHJvZHVjdGVzID0gcHJvZHVjdGVzO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgJHNjb3BlLmFmZWdpcnByb2R1Y3RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgUHJvZHVjdGVzU2VydmVpLnNhdmUoe1xuICAgICAgICAgICAgICBub206ICRzY29wZS5ub20sXG4gICAgICAgICAgICAgIHByZXU6ICRzY29wZS5wcmV1LFxuICAgICAgICAgICAgICBleGlzdGVuY2llczogJHNjb3BlLmV4aXN0ZW5jaWVzXG4gICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICRzY29wZS5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICRzY29wZS5ub20gPSBcIlwiO1xuICAgICAgICAgICAgICAkc2NvcGUucHJldSA9IFwiXCI7XG4gICAgICAgICAgICAgICRzY29wZS5leGlzdGVuY2llcyA9IFwiXCI7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAkc2NvcGUuZWRpdGFycHJvZHVjdGUgPSBmdW5jdGlvbihwcm9kdWN0ZSkge1xuICAgICAgICAgICRzY29wZS5ub21FID0gcHJvZHVjdGUubm9tO1xuICAgICAgICAgICRzY29wZS5wcmV1RSA9IHByb2R1Y3RlLnByZXU7XG4gICAgICAgICAgJHNjb3BlLnByb2R1Y3RlcGVyZWRpdGFyID0gcHJvZHVjdGU7XG4gICAgICB9XG4gICAgICAkc2NvcGUubW9kaWZpY2FycHJvZHVjdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBQcm9kdWN0ZXNTZXJ2ZWkudXBkYXRlKHtpZDokc2NvcGUucHJvZHVjdGVwZXJlZGl0YXIubm9tfSwge1xuICAgICAgICAgICAgICBub206ICRzY29wZS5ub21FLFxuICAgICAgICAgICAgICBwcmV1OiAkc2NvcGUucHJldUVcbiAgICAgICAgICB9LCBmdW5jdGlvbihwcm9kdWN0ZSkge1xuICAgICAgICAgICAgICAkc2NvcGUucHJvZHVjdGVwZXJlZGl0YXIgPSBwcm9kdWN0ZTtcbiAgICAgICAgICAgICAgJHNjb3BlLnJlZnJlc2goKTtcbiAgICAgICAgICAgICAgJHNjb3BlLm5vbUUgPSBcIlwiO1xuICAgICAgICAgICAgICAkc2NvcGUucHJldUUgPSBcIlwiXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAkc2NvcGUuYm9ycmFycHJvZHVjdGUgPSBmdW5jdGlvbihwcm9kdWN0ZSkge1xuICAgICAgICAgIFByb2R1Y3Rlc1NlcnZlaS5yZW1vdmUoe2lkOnByb2R1Y3RlLm5vbX0pO1xuICAgICAgICAgICRzY29wZS5yZWZyZXNoKCk7XG4gICAgICB9XG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHBMZWFybicpXG4uc2VydmljZShcIlByb2R1Y3Rlc1NlcnZlaVwiLCBmdW5jdGlvbigkcmVzb3VyY2UpIHtcbiAgICAgIHJldHVybiAkcmVzb3VyY2UoJy9hcGkvcHJvZHVjdGVzLzppZCcsIG51bGwsIHtcbiAgICAgICAgICAndXBkYXRlJzoge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnXG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gIH0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=