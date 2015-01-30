$(document).ready(function() {
     
        var seccions = ['div','div','ul',['li','li','li']];
        var classes = ['row col-xs-6','row city',''];
    
          $.getJSON('js/dades.json', function(jd) {
              
               divconta = document.createElement('div');
              
               divconta.setAttribute('id','my');
               var co = document.getElementsByClassName('container');
               co[0].appendChild(divconta);
               $("#my").append('<h1>Benvinguts a viatges Gil</h1>');
              
              $(jd.continents).each(function(i,d) {
                  $('#menu').append('<li><a href="#" id="'+ d.nom +'" > ' + d.nom + '</a></li>');
                  
                  $("#inici").on('click',function(){
                       $('#my').html(" ");
                       var divprimer = document.createElement('div');
                       divprimer.setAttribute('id','inici');
                       divconta.appendChild(divprimer);
                       var co = document.getElementsByClassName('container');
                       co[0].appendChild(divconta);
                       $("#my").append('<h1>Benvinguts a viatges Gil</h1>');
                  
                    });
                  
                  $("#" + d.nom).on('click',function(){
                      $('#my').html(" ");
                      var divprimer = document.createElement('div');
                      divprimer.setAttribute('id',d.nom);
                      divconta.appendChild(divprimer);
                      var co = document.getElementsByClassName('container');
                      
                      co[0].appendChild(divconta);
                      
                      
                          
                    for(var cn=0;cn<d.ofertes.length;cn++) {
                      var divanterior= divprimer;
                     
                      for(var e=0;e<seccions.length;e++){

                          if(Array.isArray(seccions[e])){
                            for (var cont=0;cont<seccions[e].length; cont ++){
                                var contingut;
                                var a = document.createElement(seccions[e][cont]);
                                switch(cont) {
                                     case 0:
                                        a.setAttribute('class','nomcity');
                                       
                                        contingut = d.ofertes[cn].nom+'('+d.ofertes[cn].pais+')';
                                        break;
                                     case 1:
                                        a.setAttribute('class','preu');
                                        contingut = d.ofertes[cn].preu+' '+d.ofertes[cn].divisa+' '+'per'+' '+d.ofertes[cn].nits+' '+"nits";
                                        break;
                                     case 2:
                                        a.setAttribute('class',' btn-success');
                                        contingut = "Reserva";
                                        break;
                                }
                                
                                
                                a.setAttribute('style','list-style:none;text-align:center');
                                a.innerHTML = contingut;
                                divanterior.appendChild(a);   
                            }

                          }
                            else{
                                var a = document.createElement(seccions[e]);
                                
                                a.setAttribute('class',classes[e]);
                                divanterior.appendChild(a);
                                divanterior = a;
                            }

                       } 
                  
                    } 
                      
                      
                      
                  });
                      
              });
              
              
          });    
});