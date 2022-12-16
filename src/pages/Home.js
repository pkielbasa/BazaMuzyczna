import React, {useContext, useState} from "react";

import { Link } from "react-router-dom";

import { ArtistContext } from "../context/ArtistContext";
import Card from "../components/Card";
import "../styles/Home.css";
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import image6 from "../images/image6.jpg"
import image7 from "../images/image7.jpg"
import image8 from "../images/image8.jpeg"
import Albums from "./Albums";
import Details from "./Details";
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
                  {/*  {
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

                            })}*/}
                <Link
                to = {Details}
                className="text-link"
>
<Card
               image = {image1}
               title = {"Test1"}
/>
            </Link>
                <Card

                    image = {image2}
                    title = {"Test2"}
                />

                <Card

                    image = {image3}
                    title = {"Test3"}
                />
                <Card

                    image = {image4}
                    title = {"Test4"}
                />
                <Card

                    image = {image5}
                    title = {"Test5"}
                />
                <Card

                    image = {image6}
                    title = {"Test6"}
                />
                <Card

                    image = {image7}
                    title = {"Test7"}
                />
                <Card

                    image = {image8}
                    title = {"Test8"}
                />



                        </div>

            <button type="button" onClick={incrementCounter}>Show more
            </button>
                        </div>
                        );

                    };
export default Home;
