import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { ArtistContext } from "../context/ArtistContext";

import "../styles/Details.css";

const Detail = () => {
    let { id } = useParams();
    const { showDetail, selectedMovie } = useContext(ArtistContext);
    useEffect(() => {
        showDetail(id);
    });

    return (
        <div className="detail-container">
            <div className="poster">
                    <img src={selectedMovie.image} alt={selectedMovie.title} />
            </div>
            <div className="info">
                <div className="field">
                    <div className="label">
                        <p className="title label-p">{selectedMovie.title}</p>
                    </div>
                </div>
                <div className="field">
                    <div className="label">
                        <p className="label-p">{selectedMovie.content}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Detail;
