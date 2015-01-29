$(document).ready(function() {
      $('#tabs').tab();
      var seccions = ['div','div','div','div','ul',['li','li','li']];
      var llista = ['nomcity','preu','btn'];
    
          $.getJSON('js/dades.json', function(jd) {
              
               var divconta = document.createElement('div');
               divconta.setAttribute('class','tab-content');
               divconta.setAttribute('id','myTabContent');
              
              $(jd.continents).each(function(i,d) {
                  $('#menu').append('<li><a href="#" id="'+ d.nom +'" data-toggle="tab"> ' + d.nom + '</a></li>');
                         
                      var divprimer = document.createElement(seccions[0]);
                      divconta.appendChild(divprimer);
                  for(var contcity=0;contcity<d.ofertes.length;contcity++){ 
                      divprimer.setAttribute('class','tab-pane fade');
                      divprimer.setAttribute('id',d.nom);
                      var co = document.getElementsByClassName('container');
                      co[0].appendChild(divconta);
                      var divanterior= divprimer;
                     
                      for(var e=1;e<seccions.length;e++){

                          if(Array.isArray(seccions[e])){
                            for (var cont=0;cont<seccions[e].length; cont ++){

                                var a = document.createElement(seccions[e][cont]);
                                a.setAttribute('class',llista[cont]);
                               // $('.llista[cont]').html('<p>'+d.ofertes[0]+'</p>');
                                a.innerHTML = d.ofertes[0].nom;
                                divanterior.appendChild(a);   
                            }

                          }
                            else{
                                var a = document.createElement(seccions[e]);   
                                divanterior.appendChild(a);
                                divanterior = a;
                            }

                       } 
                  }
              });
              
              /*for(var i=0;i<jd.continents.length;i++){
                $('#menu').append('<li><a href="#" id="'+ jd.continents[i].nom +'"> ' + jd.continents[i].nom + '</a></li>');
                for(var e=0;e<seccions.length;e++){
                    
                    
                }    
                var e = document.createElement('div');
                e.setAttribute('class','tab-pane fade');
                e.setAttribute('id',jd.continents[i].nom);
                var a
                e.appendChild();
                $('.container').appendChild(e);
                  
                  
              }*/
              
    
 
          });    
});