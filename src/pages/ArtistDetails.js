import React, {useEffect, useContext, useState} from "react";
import { useParams } from "react-router-dom";

import { ArtistContext } from "../context/ArtistContext";
import { Link } from "react-router-dom";


import "../styles/Artist.css";
import Album from "../components/Album";

const Detail = () => {
    let { id } = useParams();
    const { showDetail, selectedArtist } = useContext(ArtistContext);
   const {showAlbums, selectedAlbum} = useContext(ArtistContext);



    useEffect(() => {
        showDetail(id);
        showAlbums(selectedArtist.albumId);
        console.log(selectedAlbum.id);
    },[selectedArtist.albumId]);
    if (id !== undefined) {
    return (

        <div className="detail-container">
            <div className="details">
            <div className="artist">
                <img src={selectedArtist.image}   alt={"test"}/>
            </div>
            <div className="info">
                <div className="field">
                    <div className="label">
                        <p className="title label-p">{selectedArtist.name}</p>
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
                <Link
                    to={`../album/${selectedAlbum.id}`}
                    className="text-link"
                    key={selectedAlbum.id}
                >
                <Album
                    image = {selectedAlbum.image}
                    title = {selectedAlbum.title}
                />
                </Link>
                    </div>
        </div>

    )
}


};

export default Detail;
