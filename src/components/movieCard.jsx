import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import styles from "../styles/card.module.css";
import data from '../data/movies.json';

const Card = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };
    fetchData();
}, []);


const pF = data.entries.filter(entry => entry.programType === "movie" && entry.releaseYear >= 2010);
    pF.sort((a, b) => a.title.localeCompare(b.title));
    const p20 = pF.slice(0, 20);
    const dA = agruparData(p20, 3);

    const handleMovieClick = (movie) => {
      setSelectedMovie(movie);
  };


  if (isLoading) {
    return (
        <div>
            <p className={styles.price}>Loading...</p>
        </div>
    );
}


if (error) {
  return (
      <div>
          <p>Oops, something went wrong...</p>
      </div>
  );
}


function agruparData(array, tamañoGrupo) {
  const agruparArray = [];
  let index = 0;
  while (index < array.length) {
      agruparArray.push(array.slice(index, index + tamañoGrupo));
      index += tamañoGrupo;
  }
  return agruparArray;
}




  return (
    <main> 
    {dA.map((item, index) => (
    <div key={index} className={styles.row}>
        {item.map((entry) => (
            <button
                key={entry.title}
                onClick={() => handleMovieClick(entry)}
            >
                <img src={entry.images['Poster Art'].url} alt={entry.title} style={{width:300}}/>
                <p className={styles.price}>{entry.title}</p>
            </button>
        ))}
    </div>
))}
     {selectedMovie && (
        <Popup defaultOpen modal>
          <div style={{ width: 400, textAlign: 'center', backgroundColor:'white', padding:10, borderRadius:15 }}>
            <h1 className={styles.price}>{selectedMovie.title}</h1>
            <p>
              <p className={styles.textos}>Año de Lanzamiento:</p>
              {selectedMovie.releaseYear}
            </p>
            <img
              src={selectedMovie.images['Poster Art'].url}
              alt={selectedMovie.title}
              style={{ width: 200, borderRadius:15}}
            />
            <p>
              <p className={styles.textos}>Descripción:</p>
              {selectedMovie.description}
            </p>
           
           
            <br />
            <button onClick={() => setSelectedMovie(null)} className={styles.button}>Cerrar</button>
          </div>
        </Popup>
      )}
    </main>
  );
};

export default Card;
