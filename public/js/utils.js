'use strict';
/**
* Created with M06 DAW UF3.
* User: xavigimenezsanchez
* Date: 2014-12-10
* Time: 11:41 PM
*/

function heretar(pare,fill) {
    fill.prototype = Object.create(pare.prototype);
    fill.prototype.constructor = fill;
}

function isTouchDevice() {
return ((window.ontouchstart) ||
     		(navigator.maxTouchPoints > 0) ||
     		(navigator.msMaxTouchPoints > 0)) 
}

/*++++++++   QUESTIONARI UNA PREGUNTA++++++++++++++++++++
 var answers,desti;
        
    answers = document.querySelectorAll('#respostes > div');
    
    desti = document.getElementById('resposta');
    desti.addEventListener('dragenter', entrant , false);
    desti.addEventListener('dragleave', sortint, false);
    desti.addEventListener('dragover', function(e){ e.preventDefault()}, false);
    desti.addEventListener('drop',deixarAnar,false);
    
    for (var i=0; i<answers.length; i++) {
        answers[i].addEventListener('dragstart',arrossegar, false);
        answers[i].setAttribute("draggable","true");
        
    }
    
     function entrant(e) {
        e.preventDefault();
        e.target.style.background = 'lightgrey';
    }
    
    function sortint(e) {
        e.preventDefault();
        e.target.style.background = 'white';
    }
   
    
    function arrossegar(e) {
        e.dataTransfer.setData('Text', e.target.getAttribute('id'));
    }
    
    function comprova(e) {  
        
        if (e.target.getAttribute('resposta')=="resposta1") {
            desti.innerHTML=" ";
            var res = document.createElement("div");
            res.setAttribute('class','btn btn-success col-lg-12');
            res.innerHTML ='RESPOSTA CORRECTE';
            //desti.innerHTML += '<img src="http://media.her.ie/wp-content/uploads/2014/11/Im_winning.gif"/>';
            desti.appendChild(res);
            
        } else {
            desti.innerHTML=" ";
            var res = document.createElement("div");
            res.setAttribute('class','btn btn-danger col-lg-12');
            res.innerHTML ='RESPOSTA INCORRECTE';
            //desti.innerHTML += '<img src="http://www.tadtop.com/wp-content/uploads/2014/03/delhi_guy_reaction_7.gif"/>';
            desti.appendChild(res);
        }
    }
     function deixarAnar(e) {
        desti.innerHTML=" ";
        var res = e.dataTransfer.getData('Text');
        e.preventDefault();
        var divres = document.createElement('div');
        var resp = document.getElementById(res).textContent;
        divres.innerHTML = resp;
        divres.setAttribute('class',document.getElementById('resposta1').className);
        desti.appendChild(divres);
        e.target.innerHTML += '<button id="com" resposta = "'+res+'" class="btn btn-info col-lg-12">Comrpoba</button>';
        var boto = document.getElementById('com');
        boto.addEventListener('click',comprova,'false');          
    }
 *******************************************************************************/




var answers,destins,contenidor,valid;

var preguntes = [{pregunta:"Qui és l'imprescindible en aquesta vida?",
                  opcions:
                  [{resposta:1,text:"El caganer del pesebre."},
                  {resposta:2,text:"La morritus (alcaldesa de figueres)."},
                  {resposta:3,text:"Els dolents (policia)."},
                  {resposta:4,text:" El papa de Roma."},
                  {resposta:5,text:"Un guardia civil maricón.",}],
                  correcte:1,
                  codi:0},


                 {pregunta:"Quin plat t'agrada més?",
                  opcions:
                  [{resposta:1,text:"Kebab wambala."},
                  {resposta:2,text:"Plat de patates braves."},
                  {resposta:3,text:"Xoricets."},
                  {resposta:4,text:" Galta de porc."},
                  {resposta:5,text:"Formatge de cabra."}],
                  correcte:2,
                 codi:1},
                 
                 
                 
                 {pregunta:"Quin esport t'agrada més?",
                  opcions:
                  [{resposta:1,text:"Futbol."},
                  {resposta:2,text:"Basquet."},
                  {resposta:3,text:"Handbol."},
                  {resposta:4,text:" Rugby."},
                  {resposta:5,text:"Tennis."}],
                  correcte:4,
                 codi:2},
                 
                 {pregunta:"Quin gos t'agrada més?",
                  opcions:
                  [{resposta:1,text:"Rotwailer."},
                  {resposta:2,text:"Chow chow."},
                  {resposta:3,text:"Pitbull."},
                  {resposta:4,text:"Bulldog."},
                  {resposta:5,text:"Pastor alemany."}],
                  correcte:5,
                 codi:3}
                 
                ]


contenidor = document.getElementById('container');    
var a = document.createElement('h2');
a.innerHTML = "QUESTIONARI";
contenidor.appendChild(a);
 for(var i=0;i<preguntes.length;i++){
     
     
     var preg = document.createElement('div');
     preg.setAttribute("class","col-lg-12");
     preg.innerHTML=preguntes[i].pregunta;
     
     var sec = document.createElement('section');
     sec.setAttribute("class","col-lg-6");
     sec.setAttribute("id",i);
     var caixaresposta = document.createElement('section');
     caixaresposta.setAttribute("class","col-lg-6 resposta caixares");
     caixaresposta.setAttribute("codipregunta",i);
     caixaresposta.innerHTML = "POSA LA TEVA RESPOSTA AQUI"
     
          
     for(var e=0;e<preguntes[i].opcions.length;e++){
         var b = document.createElement('div');
         b.innerHTML=preguntes[i].opcions[e].text;
         b.setAttribute("class","iddiv");
         b.setAttribute("id",preguntes[i].codi+""+preguntes[i].opcions[e].resposta);
         b.setAttribute("idpreg",preguntes[i].codi);
         b.setAttribute("draggable","true");
         sec.appendChild(b);
         
      
     }
      contenidor.appendChild(preg);
      contenidor.appendChild(sec);
      contenidor.appendChild(caixaresposta);
     
     
 }
           
        
    answers = document.querySelectorAll('section > div');
    destins = document.querySelectorAll('.resposta');
    
    
    for (var i=0; i<destins.length; i++) {
        destins[i].addEventListener('dragenter', entrant , false);
        destins[i].addEventListener('dragleave', sortint, false);
        destins[i].addEventListener('dragover', function(e){ e.preventDefault()}, false);
        destins[i].addEventListener('drop',deixarAnar,false);
        
    }
    for (var a=0; a<answers.length; a++) {
        answers[a].addEventListener('dragstart',arrossegar, false);
        answers[a].setAttribute("draggable","true");
        
    }
    
     function entrant(e) {
        if(valid == e.target.getAttribute('codipregunta')){
            e.preventDefault();
            e.target.style.background = 'lightgrey';
      }
    }
    
    function sortint(e) {
        e.preventDefault();
        e.target.style.background = 'white';
    }
   
    
    function arrossegar(e) {
        valid = e.target.getAttribute('idpreg');
        e.dataTransfer.setData('IDPREG', e.target.getAttribute('idpreg'))
        e.dataTransfer.setData('Text', e.target.getAttribute('id'));
    }
   
function correcte(e){
            destins[e].innerHTML=" ";
            var res = document.createElement("div");
            res.setAttribute('class','btn btn-success col-lg-12');
            res.innerHTML ='RESPOSTA CORRECTE';
            destins[e].appendChild(res);
    
}

function incorrecte(e){
            destins[e].innerHTML=" ";
            var res = document.createElement("div");
            res.setAttribute('class','btn btn-danger col-lg-12');
            res.innerHTML ='RESPOSTA INCORRECTE';
            destins[e].appendChild(res);
}
    
    function comprova(e) { 
       
       
        
        var resposta = e.target.getAttribute('resposta');
        var pregunta = e.target.getAttribute('pregunta')+""+preguntes[e.target.getAttribute('pregunta')].correcte;
        
        if(resposta==pregunta){
                
            correcte(e.target.getAttribute('pregunta'));
            
        }else{
            
            incorrecte(e.target.getAttribute('pregunta'));
            
        }
           
        
    }   
     function deixarAnar(e) {
       
        
        var codipregunta = e.dataTransfer.getData('IDPREG');
        var codiresposta = e.dataTransfer.getData('Text');
        var idboto = "boto"+codipregunta;
         
         e.target.style.background = 'white'; 
         
       if(codipregunta == e.target.getAttribute('codipregunta')){
        destins[codipregunta].innerHTML=" ";
        e.preventDefault();
        var divres = document.createElement('div');
        var resp = document.getElementById(codiresposta).textContent;
        divres.innerHTML = resp;
        divres.setAttribute('class','iddiv');
        destins[codipregunta].appendChild(divres);
        e.target.innerHTML += '<button id="'+idboto+'" pregunta="'+codipregunta+'" resposta = "'+codiresposta+'" class="btn btn-info col-lg-12">Comproba</button>';
        var boto = document.getElementById(idboto);
        boto.addEventListener('click',comprova,'false');   
       
       } 
    }
