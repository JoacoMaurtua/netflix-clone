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
          lista:[]
        },
        {
          tipo:'trending',
          titulo: 'Series Recomendadas de Netflix',
          lista:[]
        },
        {
          tipo:'toprated',
          titulo: 'Las mas vistas',
          lista:[]
        },
        {
          tipo:'action',
          titulo: 'Acción',
          lista:[]
        }
      ]
    )
  }


}

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