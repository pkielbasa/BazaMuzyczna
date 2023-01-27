import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
export const AlbumContext = createContext();


const AlbumApp = ({ children }) => {

    const [albums, setAlbums] = useState();
    const [selectedAlbum, setSelectedAlbum] = useState('');
    const [selectedArtist, setSelectedArtist] = useState('');

    const fetchAlbums = async () => {
        const response = await axios.get(
            `http://localhost:3000/albums`
        );
        const data = response.data;
        console.log(data);
        setAlbums(data);
    };


    const showDetail = async (id) => {
        const response = await axios(
            `http://localhost:3000/album/${id}`
        );
        const data = response.data;
        setSelectedAlbum(data);

    };

    const showArtist = async (id) => {
        const response = await axios.get(
            `http://localhost:3000/artist/${id}`
        );
        const data = response.data;
        console.log(data);
        setSelectedArtist(data);

    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    return (
        <AlbumContext.Provider
            value={{
                albums,
                showDetail,
                showArtist,
                selectedArtist,
                selectedAlbum,
            }}
        >
            {children}
        </AlbumContext.Provider>
    );
};

export default AlbumApp;
