import React, {useContext, useState} from 'react';

import { Link } from 'react-router-dom';

import '../styles/Header.css';
import {decodeToken, isExpired} from "react-jwt";
//import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {SongContext} from "../context/SongContext";
import AudioPlayer from 'react-modern-audio-player';

const Header = () => {

    const isNotLogged = isExpired(localStorage.getItem('token'));

    const {songs} = useContext(SongContext);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    if (songs !== 'undefined') {
        const random = getRandomInt(2);

        console.log(songs?.[random].src)
        const playList = [
            {
               name: songs?.[random].name,
                id:1,
                writer:songs?.[random].writer,
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
            },
            {
                name: songs?.[random].name,
                id:2,
                writer:songs?.[random].writer,
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
            },
        ]
        return (

            <header>
                <nav>
                    <div className='logo2'>
                        <ul>
                            <li><Link to='/artists' className='link'> Artists</Link></li>
                            <li><Link to='/albums' className='link'> Albums</Link></li>
                            {!isNotLogged && <li>
                                <Link to="/songs" className='link'>Songs</Link>
                            </li>}
                        </ul>
                    </div>
                    <div className='logo'><Link to='/' className='link'>Baza Muzyczna</Link>
                    </div>
                    <div>
                        <div className='logo1'>
                            <ul>
                                {!isNotLogged && <li>
                                    <Link to="/add" className='link'>Add song</Link>
                                </li>}
                                {isNotLogged && <li>
                                    <Link to="/signin" className='link'>Login</Link>
                                </li>}
                                {isNotLogged && <li>
                                    <Link to="/signup" className='link'>SignUp</Link>
                                </li>}
                                {!isNotLogged && <li>
                                    <a href="/" className='link'
                                       onClick={() => localStorage.removeItem('token')}>LogOut</a>
                                </li>}
                            </ul>
                        </div>
                        <div className="player">
                            <AudioPlayer
                                playList={playList}
                                audioInitialState={{
                                    muted: true,
                                    volume: 0.2,
                                    curPlayId: 1,
                                }}
                                placement={{
                                    interface: {
                                        templateArea: {
                                            trackTimeDuration: "row1-5",
                                            progress: "row1-4",
                                            playButton: "row1-6",
                                            repeatType: "row1-7",
                                            volume: "row1-8",
                                        },
                                    },
                                    player: "bottom-right",
                                }}
                                activeUI={{
                                    all: true,
                                    progress: "bar",
                                    playList: false,
                                }}
                            />
                        </div>
                    </div>

                </nav>

            </header>
        );

        ;
    }
}
export default Header;
