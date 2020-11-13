var main = document.getElementsByTagName("main")[0];

var observer = new IntersectionObserver(function(entries){
    if(entries[0].intersectionRatio == 0) return; //hvis elementet ikke er inde i viewport, så skal der ikke ske noget
    
    entries[0].target.querySelector("h1").style.opacity = "1";
    entries[0].target.querySelector("h1").style.transform = "scale(1)";
}, {
    threshold: 0.1 //hvor langt inde i viewport elementet er
});

observer.observe(main);