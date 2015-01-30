$(document).ready(function() {
     
        $.getJSON('js/dades.json', function(jd) {
            
            var Lloguer = $('<div class="llistadereserves"><div class="col-xs-offset-10">Heu Reservat:</div></div>');
            var a = $('<div class="content col-xs-10"></div>');
            var inici = $('<div class="inici col-xs-10"><h1>Benvinguts a Viatges Gil</h1></div>');
            $('.container').append(a);
            $('.container').append(Lloguer);
            $('.container').append(inici);
            
          $(jd.continents).each(function(i,d) {
                  $('#menu').append('<li><a href="#" id="'+ d.nom +'" > ' + d.nom + '</a></li>');
                  
                  $('#inici').on('click',function(){
                      $('.container').html(" ");
                      var Lloguer = $('<div class="llistadereserves"><div class="col-xs-offset-10">Heu Reservat:</div></div>');
                      var a = $('<div class="content col-xs-10"></div>');
                      var inici = $('<div class="inici col-xs-10"><h1>Benvinguts a Viatges Gil</h1></div>');
                      $('.container').append(a);
                      $('.container').append(Lloguer);
                      $('.container').append(inici);
                      
                  });
                   
                  $("#" + d.nom).on('click',function(){
                      
                       $('.imgs').remove();
                      var im = $('<div class="imgs col-xs-9" style="margin-top:30px;"></div>');
                      
                      $('.content').html(" ");
                     
                      $('.inici').html(" ");
                        
                        
                      
                     
                      $('.container').append(im);
                      
                      $(d.ofertes).each(function(i,d){
                          
                           var b =$('<div class="principal'+i+' '+'text-center row col-xs-5 col-xs-offset-1"><div class="text-center row col-xs-12 city'+i+'"></div><div class="text-center row col-xs-12 preu'+i+'"></div><div class="row col-xs-12 btn'+i+' btn-success"></div></div>');

                           $('.content').append(b);

                          // $('li').setAttribute('style','list-style:none');  
                           $('.city'+i).html(d.nom+"("+d.pais+")"); 
                           $('.preu'+i).append('<span>'+ d.preu +' '+ d.divisa+' '+'per'+' '+d.nits+' '+'nits'+'</span>'); 
                           $('.btn'+i).html("RSERVA");
                          
                       $('.principal'+i).mouseover(function(){
                           
                          $('.imgs').html(" ");
                          $(d.imatges).each(function(i,d){
                              
                              var im =$('<div class="col-xs-3"><img src="'+d+'"</div>');
                              $('.imgs').append(im);
                              
                          });  
                          $('.principal'+i).mouseout(function(){
                              
                              $('.imgs').html(" ");
                              
                          });
                       
                       $('.btn'+i).on('click',function(){
                           
                           var preunou = d.preu * 0.85;
                           var boto = $('.btn'+i);
                           boto.html(" ");
                           boto.append('<div><strong>RESERVAT</strong><span class="glyphicon glyphicon-ok-circle"></span></div>');
                           boto.removeClass('btn'+i);
                           boto.removeClass('btn-success');
                                                      
                           $('.preu'+i).html(" ");                           
                           $('.preu'+i).append('<span>'+ preunou +' '+ d.divisa+' '+'per'+' '+d.nits+' '+'nits'+'</span>');
                           
                          
                           var Llistalloguer = $('<div class="col-xs-offset-10">'+d.nom+' '+'per'+' '+d.nits+' '+'nits'+'</div>');
                           
                           $('.llistadereserves').append(Llistalloguer);
                           
                       });
                           
                       });
                      });  
                    });
                  });             
                });
});            
      