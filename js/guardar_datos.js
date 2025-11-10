function guardar_datos(){
    var nombre = document.getElementById('name').value;

    var endPoint = 'http://127.0.0.1:8000/api/students';

    fetch(endPoint, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            name: nombre, 
        })
    })
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        alert(data);
    })
}