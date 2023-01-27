import React, {useContext, useState} from "react";

import { Link } from "react-router-dom";
import { AlbumContext } from "../context/AlbumContext";
import { ArtistContext } from "../context/ArtistContext";
import Artist from "../components/Artist";
import Album from "../components/Album";
import "../styles/Home.css";


const Home = () => {
    const { artists} = useContext(ArtistContext);
    const { albums } = useContext(AlbumContext);

    const [counter, setCounter] = useState(5);
    const [counter1, setCounter1] = useState(5);

    const incrementCounter = () => {
        setCounter(counter + 100);
    }
    const incrementCounter1 = () => {
        setCounter1(counter1 + 100);
    }

    return (
        <div className="home-container">
            <h4>Popularni artyści</h4>
            <div className="movies">

                {artists&&  artists.filter((artist,index) => index < counter).map((artist) => {
                          console.log(artists)

                          return (
                                    <Link
                                        to={`artist/${artist.id}`}
                                        className="text-link"
                                        key={artist.id}
                                    >
                                        <Artist
                                            key={artist.id}
                                            image={artist.image}
                                            title={artist.name}
                                        />
                                    </Link>
                                );
                            })  }

                        </div>
            <div className="przycisk1">
                <button className="przycisk" onClick={incrementCounter}>Pokaż wszystko
                </button>
            </div>
            <h4>Popularne albumy</h4>
            <div className ="movies">
                {albums&&  albums.filter((albums,index) => index < counter1).map((albums) => {
                    return (
                        <Link
                            to={`album/${albums.id}`}
                            className="text-link"
                            key={albums.id}
                        >
                            <Album
                                key={albums.id}
                                image={albums.image}
                                title={albums.title}
                            />
                        </Link>
                    );
                })  }
            </div>
            <div className="przycisk1">
                <button className="przycisk" onClick={incrementCounter1}>Pokaż wszystko
                </button>
            </div>

        </div>

                        );

                    };
export default Home;
