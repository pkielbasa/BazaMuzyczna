import React, {useContext, useState} from "react";

import { Link } from "react-router-dom";

import { ArtistContext } from "../context/ArtistContext";
import Card from "../components/Card";
import "../styles/Home.css";


const Home = () => {
    const { movies} = useContext(ArtistContext);
    const [counter, setCounter] = useState(5);

    const incrementCounter = () => {
        setCounter(counter + 100);
        console.log('I was triggered during componentDidMount')

    }


    return (
        <div className="home-container">
            <h4>Wybrane albumy</h4>

            <div className="movies">
                    {
                        movies.filter((movie,index) => index < counter).map((movie) => {
                                return (
                                    <Link
                                        to={`movies/${movie.id}`}
                                        className="text-link"
                                        key={movie.id}
                                    >
                                        <Card
                                            key={movie.id}
                                            image={movie.image}
                                            title={movie.title}
                                        />
                                    </Link>

                                );

                            })}

                        </div>
            <button type="button" onClick={incrementCounter}>Pokaż więcej
            </button>
                        </div>
                        );

                    };
export default Home;
