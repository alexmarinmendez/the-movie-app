const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b11a474a2fd87941a8936c55c3cd38d7')
        
        if (respuesta.status === 200) {
            const datos = await respuesta.json()

            console.log(datos)
            
            let peliculas = ''
            datos.results.forEach(pelicula => {
                peliculas += `<div class="pelicula">
                <img class="poster" src="http://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <h3 class="titulo">${pelicula.title}</h3>
                </div>`
            })
            document.getElementById('contenedor').innerHTML = peliculas

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