const listadoReserva = document.querySelector('#table');


const obtenerTareas = async () => {
    const res = await fetch('http://localhost:45635/api/tarea', {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });

    if(res.status === 404 ) {
        return [];
    }

    const data = await res.json();
    return data;
}
