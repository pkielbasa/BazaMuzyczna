import React, {useContext, useState} from "react";

import { Link } from "react-router-dom";

import { ArtistContext } from "../context/ArtistContext";
import Artist from "../components/Artist";
import "../styles/Home.css";

const Artists = () => {
    const { artists} = useContext(ArtistContext);
    const [query, setQuery] = useState("")


    return (
        <div className="home-container">
            <div className="navbar-search">
                <input placeholder="Enter Artist Title" onChange={event => setQuery(event.target.value)} />

            </div>
            <div className="movies">
                {artists? artists.filter((item) => {
                if (query === '') {
                return item;
            } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
                return item;

            }
            }).map((item) => {
                        return (
                            <Link
                                to={`../artist/${item.id}`}
                                className="text-link"
                                key={item.id}
                            >
                                <Artist
                                    key={item.id}
                                    image={item.image}
                                    title={item.name}
                                />
                            </Link>
                        );
                    }) : <p> </p>}
            </div>
        </div>
    );
};
export default Artists;
