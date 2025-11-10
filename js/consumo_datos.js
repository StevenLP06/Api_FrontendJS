function consumo_datos(){
    var endPoint = 'http://127.0.0.1:8000/api/students';

    fetch(endPoint)
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        console.log(data)
    })
}