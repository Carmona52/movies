import React, { useState, useEffect } from 'react';
import data from '../data/movies.json';

export default function Peliculas() {
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

    const peliculasFiltradas = data.entries.filter(entry => entry.programType === "movie" && entry.releaseYear >= 2010);
    peliculasFiltradas.sort((a, b) => a.title.localeCompare(b.title));
    const primeras20Peliculas = peliculasFiltradas.slice(0, 20);
    const dataAgrupada = agruparData(primeras20Peliculas, 3);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
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
        <div>
            {dataAgrupada.map((item, index) => (
                <div key={index}>
                    {item.map((entry) => (
                        <button
                            key={entry.title}
                            onClick={() => handleMovieClick(entry)}
                        >
                            <img src={entry.images['Poster Art'].url} alt={entry.title} />
                            <p>{entry.title}</p>
                        </button>
                    ))}
                </div>
            ))}

            {selectedMovie && (
                <div>
                    <div>
                        <h1>{selectedMovie.title}</h1>
                        <p>{selectedMovie.description}</p>
                        <p>{selectedMovie.releaseYear}</p>
                        <img src={selectedMovie.images['Poster Art'].url} alt={selectedMovie.title} />
                        <button onClick={() => setSelectedMovie(null)}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}


