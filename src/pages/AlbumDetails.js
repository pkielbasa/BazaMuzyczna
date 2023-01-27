import React, {useEffect, useContext, useState} from "react";
import {useParams} from "react-router-dom";


import "../styles/Details.css";
import Album from "../components/Album";
import {AlbumContext} from "../context/AlbumContext";
import { Link } from "react-router-dom";

const Detail = () => {
    let {id} = useParams();
    const {showDetail, selectedAlbum} = useContext(AlbumContext);
    const {showArtist, selectedArtist} = useContext(AlbumContext);

    const content = selectedAlbum.tracklist?.map((post) => {
        <ul>{post} </ul>
    })

    console.log(selectedAlbum.tracklist?.length);
    useEffect(() => {
        showDetail(id);
        showArtist(selectedAlbum.artistId);
    }, [selectedAlbum.artistId]);
    if (id !== undefined) {
        return(
            <div className="detail-container">
                <div className="details">
                    <Album
                        image={selectedAlbum.image}
                        title={selectedAlbum.title}
                    />
                    <div className="info">
                        <div className="field">
                            <div className="label">
                                <p className="title label-p">{selectedAlbum.title}</p>
                                <Link
                                    to={`../artist/${selectedArtist.id}`}
                                    className="text-link"
                                    key={selectedArtist.id}
                                >
                                 <p className="label-p">{selectedArtist.name} </p>
                                </Link>
                            </div>
                        </div>
                        <div className="field">
                            <div className="label">
                                <p className="label-p">
                                    Ocena albumu: {selectedAlbum.rating}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trackdetails">
                    <h3>Utwory</h3>
                    <div className="tracklist">
                        {selectedAlbum.tracklist?.map((item, index) => (
                           <ul>{index+1} {item}</ul>
                        ))}




                    </div>
                </div>
            </div>)
    }






};

export default Detail;
