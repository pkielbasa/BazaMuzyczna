import React, {useContext, useState} from "react";

import { Link } from "react-router-dom";

import { ArtistContext } from "../context/ArtistContext";
import Card from "../components/Card";
import "../styles/Home.css";


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
                <h5>Test</h5>
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
                }
            </div>
        </div>
    );
};
export default Albums;
