function eliminar(id){
    var endPoint = 'http://127.0.0.1:8000/api/students/' + id;

    fetch (endPoint, {
        method:
            'DELETE'
    })
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        window.location.reload()
    })
    
}

function consumo_datos(){
    var endPoint = 'http://127.0.0.1:8000/api/students';
    var body_table = document.getElementById('body');

    fetch(endPoint)
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        data.forEach(element => {
            body_table.innerHTML += 
            `
                <tr>
                    <td>
                        ${element.id}
                    </td>
                    <td>
                        ${element.name}
                    </td>
                    <td>
                        <button onclick='eliminar(${element.id})'> Eliminar </button>
                    </td>
                </tr>
            `
        });
    })
}