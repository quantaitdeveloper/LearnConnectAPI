fetch("https://ctechworks.com/api/categories")
    .then(function(respone){
        return respone.json();
    })
    .then(function(data){
        console.log(data);
        

    })