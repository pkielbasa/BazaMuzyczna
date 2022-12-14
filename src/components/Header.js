import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/Header.css';
import {decodeToken, isExpired} from "react-jwt";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Header = () => {

    const isNotLogged = isExpired(localStorage.getItem('token'));

    const Player = () => (
        <AudioPlayer
            autoPlay
            src="http://biblia-mp3.pl/Ksiega_Rodzaju_1-8.mp3"
            onPlay={e => console.log("onPlay")}
        />
    );
        return (

            <header>
                <nav>
                    <div className='logo2'>
                        <ul>
                            <li><Link to='/artists'  className='link'> Artists</Link></li>
                            <li><Link to='/albums'  className='link'> Albums</Link></li>
                    </ul>
                    </div>
                    <div className='logo'><Link to='/' className='link'>Home</Link>
                    </div>
                    <div >
                        <div className='logo1'>
                            <ul>
                            {!isNotLogged && <li>
                                <Link to ="/add" className='link'>Add film</Link>
                            </li>}
                            {isNotLogged && <li>
                                <Link to="/signin" className='link' >Login</Link>
                            </li>}
                            {isNotLogged && <li>
                                <Link to="/signup" className='link'>SignUp</Link>
                            </li>}
                            {!isNotLogged && <li >
                                <a href="/" className='link' onClick={() => localStorage.removeItem('token')}>LogOut</a>
                            </li>}
                            </ul>
                        </div>
                        <div className="player">
                            <Player></Player>
                        </div>
                    </div>

                </nav>

            </header>
        );
    };

export default Header;
