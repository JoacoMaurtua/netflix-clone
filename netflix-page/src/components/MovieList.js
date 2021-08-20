import React, { useContext } from 'react';
import { MyContext } from '../App';


export default function MovieList() {

  const {data} = useContext(MyContext);

  return (
    <div className="movie-list">
      {
        data?data.map((item,index)=>(
          <div key={index}>
            <h2>{item.titulo}</h2>
          </div>
        )):null
      }
    </div>
  )
}

