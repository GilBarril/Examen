function init() {
    var canvas = initFullScreenCanvas("mainCanvas");
    var ctx = canvas.getContext("2d");
    
    if (isTouchDevice()) {
        canvas.addEventListener("touchstart", function(e) {
            for(var i = 0; i < e.targetTouches.length; i++) {
                drawBullet(e.targetTouches[i].pageX, e.targetTouches[i].pageY, ctx);
            }
            e.stopPropagation();
            e.preventDefault();
        }, false);
    } else {
        canvas.addEventListener('mousedown', function(e) {
            drawBullet(e.pageX-banda(canvas),e.pageY,ctx);
            
            e.stopPropagation();
            e.preventDefault();
        });
    }
    
}
        
        
        
function banda(objecte){

  var band =  objecte.offsetLeft;
  return band;
}     
    

function drawBullet(x, y, ctx) {
    ctx.fillStyle = "darkred";
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
}

function initFullScreenCanvas(canvasId) {
    var canvas = document.getElementById(canvasId);
    resizeCanvas(canvas);
    window.addEventListener("resize", function() {
        resizeCanvas(canvas);
    });
    return canvas;
}

function resizeCanvas(canvas) {
    canvas.width = document.width/2 || document.body.clientWidth/2;
    canvas.height = window.innerHeight/2 || document.body.clientHeight/2;
}
window.addEventListener('load',init);