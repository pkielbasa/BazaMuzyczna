import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
export const SongContext = createContext();


const SongApp = ({ children }) => {
    const [songs, setSongs] = useState();
    let {id} = useParams();

    const fetchSongs = async () => {
        const response = await axios.get(
            `http://localhost:3000/songs`
        );
        const data = await response.data;
        setSongs(data);
        console.log(data);

    };



    useEffect(() => {
        fetchSongs();
    }, [id]);

    return (
        <SongContext.Provider
            value={{
                songs
            }}
        >
            {children}
        </SongContext.Provider>
    );
};

export default SongApp;
