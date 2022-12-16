import React, {useContext, useState} from "react";

import { Link } from "react-router-dom";

import { ArtistContext } from "../context/ArtistContext";
import Card from "../components/Card";
import "../styles/Home.css";
import Details from "./Details";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpeg";


const Albums = () => {
    const { movies} = useContext(ArtistContext);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = movies.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(movies)
        }
    }
    return (
        <div className="home-container">
            <div className="navbar-search">
                <input className="navbar-search-input" placeholder="szukaj albumów"
                       onChange={(e) => searchItems(e.target.value)}/>
            </div>
            <div className="movies">
            {/*    <h5>Test</h5>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <Link
                                to={`movies/${item.id}`}
                                className="text-link"
                                key={item.id}
                            >
                                <Card
                                    key={item.id}
                                    image={item.image}
                                    title={item.title}
                                />
                            </Link>
                        );
                    })
                ) : false
                }*/}
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
        </div>
    );
};
export default Albums;
