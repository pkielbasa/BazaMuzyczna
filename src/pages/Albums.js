import React, {useContext, useState} from "react";

import { Link } from "react-router-dom";

import { AlbumContext } from "../context/AlbumContext";
import Album from "../components/Album";
import "../styles/Home.css";


const Albums = () => {
    const { albums} = useContext(AlbumContext);
    const [query, setQuery] = useState("")


    console.log(albums);
    return (
        <div className="home-container">
            <div className="navbar-search">
                <input placeholder="Enter Album Title" onChange={event => setQuery(event.target.value)} />

            </div>
            <div className="movies">
                {albums? albums.filter((item) => {
                        if (query === '') {
                            return item;
                        } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
                            return item;

                        }
                    }).map((item) => {
                        return (
                            <Link
                                to={`../album/${item.id}`}
                                className="text-link"
                                key={item.id}
                            >
                                <Album
                                    key={item.id}
                                    image={item.image}
                                    title={item.title}
                                />
                            </Link>
                        );
                    }) : <p> </p>}

            </div>
        </div>
    );
};
export default Albums;
