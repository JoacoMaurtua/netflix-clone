import React from 'react';
import './MovieRow.css';

export default function MovieRow({title,list}) {
  //https://image.tmdb.org/t/p/w300/mzQf0QAs4jz0fDMrzFlZxQvC9KT.jpg
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listArea">
        <div className="movieRow--list">
          {
            list.data.results?list.data.results.map((item,index)=>(
              <div key={index} className="movieRow--item">
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name}/>
              </div>
            )):null
          }
        </div>
      </div>
      
    </div>
  )
}
