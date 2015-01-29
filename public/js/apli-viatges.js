$(document).ready(function() {
     
      var seccions = ['div','div','div','div','ul',['li','li','li']];
      var llista = ['nomcity','preu','btn'];
    
          $.getJSON('js/dades.json', function(jd) {
              
               divconta = document.createElement('div');
              // divconta.setAttribute('class','tab-content');
               divconta.setAttribute('id','my');
              
              $(jd.continents).each(function(i,d) {
                  $('#menu').append('<li><a href="#" id="'+ d.nom +'" > ' + d.nom + '</a></li>');
                  $("#" + d.nom).on('click',function(){
                      $('#my').html(" ");
                      var divprimer = document.createElement(seccions[0]);
                      divconta.appendChild(divprimer);
                      for(var contcity=0;contcity<d.ofertes.length;contcity++){ 
                      //divprimer.setAttribute('class','tab-pane fade');
                      //divprimer.setAttribute('id',d.nom);
                      var co = document.getElementsByClassName('container');
                      co[0].appendChild(divconta);
                      var divanterior= divprimer;
                     
                      for(var e=1;e<seccions.length;e++){

                          if(Array.isArray(seccions[e])){
                            for (var cont=0;cont<seccions[e].length; cont ++){

                                var a = document.createElement(seccions[e][cont]);
                                a.setAttribute('class',llista[cont]);
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
                      
              });
              
              
          });    
});