var xStart, yStart, yEnd, xEnd;
var tolerance = 50;

window.addEventListener("touchstart", function(event){
    xStart = event.changedTouches[0].pageX;
    yStart = event.changedTouches[0].pageY;
});

window.addEventListener("touchend", function(event){
    xEnd = event.changedTouches[0].pageX;
    yEnd = event.changedTouches[0].pageY;

    if(xEnd > (xStart + tolerance)){
        console.log("Right, dude")
    } 

    if(xEnd < (xStart - tolerance)){
       console.log("Left, bruh");
    }
});