fetch("https://icanhazdadjoke.com", {
    headers: {
        "accept": "application/json"
    }
 })
    .then(function(response){
        if(response.status == 200){
            return response.json();
        } else{
            throw new Error("Server do a doodoo, boo boo :(");
        }
    })
    .then(function(data){
        var h2 = document.createElement("h2");
        h2.innerText = data.joke;
        document.body.appendChild(h2);
    })
    .catch(function(error){
        console.error(error);
        var p = document.createElement("p");
        p.innerText = "Server do a doodoo, boo boo :(";
        document.body.appendChild(p);
    })