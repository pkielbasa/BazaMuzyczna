import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { ArtistContext } from "../context/ArtistContext";
import image1 from "../images/image1.jpg"
import "../styles/Details.css";

const Detail = () => {
    let { id } = useParams();
    const { showDetail, selectedMovie } = useContext(ArtistContext);
    useEffect(() => {
        showDetail(id);
    });

    return (
     /*   <div className="detail-container">
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
        </div>*/
        <div className="detail-container">
            <div className="poster">
                <img src={image1} alt={selectedMovie.title} />
            </div>
            <div className="info">
                <div className="field">
                    <div className="label">
                        <p className="title label-p">Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div className="field">
                    <div className="label">
                        <p className="label-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam architecto consectetur, dicta dolor dolore dolorem exercitationem facere harum laboriosam mollitia nisi non obcaecati officia quas ratione temporibus ullam veniam</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Detail;
