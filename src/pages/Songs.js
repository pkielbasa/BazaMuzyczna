import React, {useContext, useState} from "react";

import { Link } from "react-router-dom";

import { SongContext } from "../context/SongContext";
import Album from "../components/Album";
import "../styles/Home.css";
import Song from "../components/Song";


const Songs = () => {
    const { songs} = useContext(SongContext);
    const [query, setQuery] = useState("")


    console.log(songs);
    return (
        <div className="home-container">
            <div className="navbar-search">
                <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />

            </div>
            <div className="movies">
                {songs? songs.filter((item) => {
                    if (query === '') {
                        return item;
                    } else if (item.writer.toLowerCase().includes(query.toLowerCase())) {
                        return item;

                    }
                }).map((item) => {
                    return (
                            <Song
                                name={item.name}
                                title={item.writer}
                            />
                    );
                }) : <p> </p>}

            </div>
        </div>
    );
};
export default Songs;
