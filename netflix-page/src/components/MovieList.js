import React, { useContext } from 'react';
import { MyContext } from '../App';
import MovieRow from './MovieRow';

export default function MovieList() {

  const {data} = useContext(MyContext);

  return (
    <div className="movieList">
      {
        data?data.map((item,index)=>(
          <MovieRow key={index} title={item.titulo} list={item.lista}/>
        )):null
      }
    </div>
  )
}

