import React, {useContext, useState} from "react";

import { Link } from "react-router-dom";

import { ArtistContext } from "../context/ArtistContext";
import Card from "../components/Card";
import "../styles/Home.css";
import artist1 from "../images/artist1.jpg"
import artist2 from "../images/artist2.jpg"
import artist3 from "../images/artist3.jpg"
import artist4 from "../images/artist4.jpg"
import artist5 from "../images/artist5.jpg"
import artist6 from "../images/artist6.png"
import artist7 from "../images/artist7.png"
import artist8 from "../images/artist8.jpg"

const Artists = () => {
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
                <input className="navbar-search-input" placeholder="szukaj artystów"
                       onChange={(e) => searchItems(e.target.value)}/>
            </div>
            <div className="movies">
          {/*      {searchInput.length > 1 ? (
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

                <Card
                 image = {artist1}
                 title = {"test1"}
                />
                <Card
                    image = {artist2}
                    title = {"test2"}
                />
                <Card
                    image = {artist3}
                    title = {"test3"}
                />
                <Card
                    image = {artist4}
                    title = {"test4"}
                />
                <Card
                    image = {artist5}
                    title = {"test4"}
                />
                <Card
                    image = {artist6}
                    title = {"test4"}
                />
                <Card
                    image = {artist7}
                    title = {"test4"}
                />
                <Card
                    image = {artist8}
                    title = {"test4"}
                />
            </div>
        </div>
    );
};
export default Artists;
