fetch("https://icanhazdadjoke.com")
    .then(function(response){
        console.log(response)
        if(response.status == 200){
            return response.json();
        } else{
            throw new Error("Server do a doodoo");
        }
    })