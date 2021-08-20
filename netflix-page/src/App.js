import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import peliculas from './moviesdb/moviesdb';

export const MyContext = createContext();

function App() {

  const [data,setData] = useState([]);

  useEffect(()=>{
    const dataLoading = async() =>{
      const datos = await peliculas.getPeliculasList()
      setData(datos)
    }
    dataLoading();
  },[]);

  console.log(data);

  return (
    <div className="App">
      <MyContext.Provider value={{data,setData}}>
        <MovieList/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
