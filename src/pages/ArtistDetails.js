import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { ArtistContext } from "../context/ArtistContext";
import artist1 from "../images/artist1.jpg"
import image1 from "../images/image1.jpg"
import Album from "../components/Album";

import "../styles/Details.css";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";

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
            <div className="details">
            <div className="poster">
                <img src={artist1} alt={selectedMovie.title} />
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
            <h2>Popularne wydawnictwa</h2>
            <div className="details">
                <Album
                    image = {image1}
                    title = {"Test1"}
                />
                <Album

                    image = {image2}
                    title = {"Test2"}
                />
                <Album

                    image = {image3}
                    title = {"Test8"}
                />
                <Album

                    image = {image4}
                    title = {"Test8"}
                />
                    </div>
        </div>




    );
};

export default Detail;
