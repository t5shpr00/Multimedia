window.onload = function() {
 
    // Get the canvas and context
    var canvas = document.getElementById("viewport"); 
    var context = canvas.getContext("2d");
    
  
    var lastframe = 0;
    var fpstime = 0;
    var framecount = 0;
    var fps = 0;
    
    // Level
    var level = {
        x: 1,
        y: 69,
        width: canvas.width - 2,
        height: canvas.height - 59
    };
    
    var square = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        xdir: 0,
        ydir: 0,
        speed: 0
    }
    
    var score = 0;

    function init() {
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", onMouseDown);
        canvas.addEventListener("mouseup", onMouseUp);
        canvas.addEventListener("mouseout", onMouseOut);

        square.width = 40;
        square.height = 40;
        square.x = level.x + (level.width - square.width) / 2;
        square.y = level.y + (level.height - square.height) / 2;
      
        
      
        score = 0;
    
        main(0);
    }
    
   
    

    function update(tframe) {
        var dt = (tframe - lastframe) / 1000;
        lastframe = tframe;
        
    
        updateFps(dt);
        
        // Move the square
        square.x += dt * square.speed * square.xdir;
        square.y += dt * square.speed * square.ydir;
        

        if (square.x <= level.x) {
            // Left 
            square.xdir = 1;
            square.x = level.x;
        } else if (square.x + square.width >= level.x + level.width) {
            // Right 
            square.xdir = -1;
            square.x = level.x + level.width - square.width;
        }
        
  
        if (square.y <= level.y) {
            // Top 
            square.ydir = 1;
            square.y = level.y;
        } else if (square.y + square.height >= level.y + level.height) {
            // Bottom 
            square.ydir = -1;
            square.y = level.y + level.height - square.height;
        }
    }
    
    function updateFps(dt) {
        if (fpstime > 0.25) {
            fps = Math.round(framecount / fpstime);
            
    
            fpstime = 0;
            framecount = 0;
        }
        
        fpstime += dt;
        framecount++;
    }
    
    function render() {
        drawFrame();
        

        context.fillStyle = "#ff4d4d";
        context.fillRect(square.x, square.y, square.width, square.height);
        
        
    }
     function main(tframe) {
 
        window.requestAnimationFrame(main);
    
        update(tframe);
        render();
    }
    function drawFrame() {
        //Dealing with background and a border
        context.fillStyle = "#ffcccc";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "##e600e6";
        context.fillRect(1, 1, canvas.width-2, canvas.height-2);
    }
    
    // Mouse event handlers
    function onMouseMove(e) {}
    
    function onMouseDown(e) {
        // mouse position
        var pos = getMousePos(canvas, e);
        
        // Check to click the square
        if (pos.x >= square.x && pos.x < square.x + square.width &&
            pos.y >= square.y && pos.y < square.y + square.height) {
            
            // score increase
                        score += 1;
            span = document.getElementById("score1");
            span.innerHTML = score+ " points";
            square.speed *= 2.5;
            
            
            square.x = Math.floor(Math.random()*(level.x+level.width-square.width));
            square.y = Math.floor(Math.random()*(level.y+level.height-square.height));
            
        }
    }
    
   
    
    
    init();
       (function(){
  var counter = 24;

  setInterval(function() {
    counter--;
    if (counter >= 0) {
      spane = document.getElementById("count");
      spane.innerHTML = "Time left " + counter + " sec" ;
    }
    
    if (counter === 0) {
        spane.innerHTML = "The game's over! Please click to start again.";
        span.innerHTML = "Your final score = " + score;
        clearInterval(counter);

    }

  }, 1000);

})();
};
function myFunction() {
    location.reload();
}
 function onMouseUp(e) {}
    function onMouseOut(e) {}
    
    // mouse position
    function getMousePos(canvas, e) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: Math.round((e.clientX - rect.left)/(rect.right - rect.left)*canvas.width),
            y: Math.round((e.clientY - rect.top)/(rect.bottom - rect.top)*canvas.height)
        };
    }

