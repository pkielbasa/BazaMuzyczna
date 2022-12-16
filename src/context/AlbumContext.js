import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const ArtistContext = createContext();


const MovieApp = ({ children }) => {
    const [movies, setMovies] = useState();
    const [selectedMovie, setSelectedMovie] = useState('');

    const fetchMovies = async () => {
        const response = await axios.get(
            `https://pr-movies.herokuapp.com/api/movies`
        );
        const data = response.data;
        setMovies(data);
    };


    const showDetail = async (id) => {
        const response = await axios(
            `https://pr-movies.herokuapp.com/api/movies/${id}`
        );
        const data = response.data;
        setSelectedMovie(data);

    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <ArtistContext.Provider
            value={{
                movies,
                showDetail,
                selectedMovie,
            }}
        >
            {children}
        </ArtistContext.Provider>
    );
};

export default MovieApp;
