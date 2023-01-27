import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const ArtistContext = createContext();


const ArtistApp = ({ children }) => {
    const [artists, setArtists] = useState();
    const [selectedArtist, setSelectedArtist] = useState('');
    const [selectedAlbum, setSelectedAlbum] = useState('');

    const fetchArtist = async () => {
        const response = await axios.get(
            `http://localhost:3000/artists`
        );
        const data = response.data;
        setArtists(data);
    };

    const showDetail = async (id) => {
        const response = await axios.get(
            `http://localhost:3000/artist/${id}`
        );
        const data = response.data;
        setSelectedArtist(data);

    };

    const showAlbums = async (id) => {
        const response = await axios.get(
            `http://localhost:3000/album/${id}`
        );
        const data = response.data;
        console.log(data);
        setSelectedAlbum(data);

    };

    useEffect(() => {
        fetchArtist();
    }, []);

    return (
        <ArtistContext.Provider
            value={{
                artists,
                showDetail,
                showAlbums,
                selectedAlbum,
                selectedArtist,
            }}
        >
            {children}
        </ArtistContext.Provider>
    );
};

export default ArtistApp;
