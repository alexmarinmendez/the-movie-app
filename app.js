const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?page=3&api_key=b11a474a2fd87941a8936c55c3cd38d7')
        
        if (respuesta.status === 200) {
            const datos = await respuesta.json()
            console.log(datos)
        } else if (respuesta.status === 401) {
            console.log('You don\'t have access to this resource')
        } else if (respuesta.status === 404) {
            console.log('The película que solicitaste no pudo ser encontrada')
        } else {
            console.log('Algo malo ocurrió...')
        }
    }
    catch (err) {
        console.log('Error => ' , err)
    }
}

cargarPeliculas()