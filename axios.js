const obtenerPeliculas = async () => {
    try {
        const respuesta = await axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                // api_key: 'b11a474a2fd87941a8936c55c3cd38d7',
                language: 'es-CL'
            },
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTFhNDc0YTJmZDg3OTQxYTg5MzZjNTVjM2NkMzhkNyIsInN1YiI6IjYzNGZiYTNiMzU4MThmMDA3OTkxZTMzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._2is3YHv2rcrDkYzoSdvxodp_Q8FnnL9WdDONVy7o5s'
            }
        })
        console.log(respuesta.data)
    } catch(err) {
        console.log(err)
    }
}

obtenerPeliculas()
