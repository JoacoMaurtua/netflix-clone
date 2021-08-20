import axios from 'axios';

const apiKey = '7b7f65b6b54e997297a4bf50784df37f';

const url = 'https://api.themoviedb.org/3';

const funcionAsincrona = async(urlRest)=>{
  try{
    const data = await axios.get(`${url}${urlRest}`)
    return data;

  }catch(error){
      console.log(error);
  }
}

const peliculas = {
  getPeliculasList: async()=>{
    return(
      [
        {
          tipo:'originals',
          titulo: 'Series Originales de Netflix',
          lista:await funcionAsincrona(`/discover/tv?api_key=${apiKey}&with_networks=213&language=es-ES`)
        },
        {
          tipo:'trending',
          titulo: 'Series Recomendadas de Netflix',
          lista:await funcionAsincrona(`/trending/all/week?api_key=${apiKey}&with_networks=213&language=es-ES`)
        },
        {
          tipo:'toprated',
          titulo: 'Las mas vistas',
          lista:await funcionAsincrona(`/movie/top_rated?api_key=${apiKey}&with_networks=213&language=es-ES`)
        },
        {
          tipo:'action',
          titulo: 'Acción',
          lista:await funcionAsincrona(`/discover/movie?api_key=${apiKey}&with_networks=213&language=es-ES&with_genres=28`)
        },

        {
          tipo:'comedy',
          titulo: 'Comedia',
          lista:await funcionAsincrona(`/discover/movie?api_key=${apiKey}&with_networks=213&language=es-ES&with_genres=35`)
        },

        {
          tipo:'horror',
          titulo: 'Terror',
          lista:await funcionAsincrona(`/discover/movie?api_key=${apiKey}&with_networks=213&language=es-ES&with_genres=27`)
        },

        {
          tipo:'romance',
          titulo: 'Romance',
          lista:await funcionAsincrona(`/discover/movie?api_key=${apiKey}&with_networks=213&language=es-ES&with_genres= 10749`)
        },

        {
          tipo:'documentary',
          titulo: 'Documentales',
          lista:await funcionAsincrona(`/discover/movie?api_key=${apiKey}&with_networks=213&language=es-ES&with_genres=99`)
        }
      ]
    )
  }


}

export default peliculas;

/*
  SERIES ORIGINALES NETFLIX

  SERIES RECOMENDADAS DE NETFLIX

  LOS MAS VISTOS

  GENEROS:

      Accion
      Comedia
      Terror
      Romance
      Documentales


*/