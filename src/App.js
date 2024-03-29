import React from 'react';

import {BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter} from "react-router-dom";


import './App.css';
import Layout from './components/Layout';
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Add from "./pages/Add";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import Songs from "./pages/Songs";
import {isExpired} from "react-jwt";
import * as PropTypes from "prop-types";
import ArtistDetails from "./pages/ArtistDetails";
import AlbumDetails from "./pages/AlbumDetails";


function Redirect(props) {
    return null;
}

Redirect.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node
};

function App() {
    const isNotLogged = isExpired(localStorage.getItem('token'));

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route  path='/artists' element={<Artists/>}/>
                    <Route  path='/albums' element={<Albums/>}/>
                    <Route  path='/songs' element={isNotLogged ? <Navigate to='/signin'/> : <Songs/>} />
                    <Route  path='/' element={<Home/>}/>
                    <Route  path='/signin' element={!isNotLogged ? <Navigate to='/'/> : <Signin/>} />
                    <Route  path='/artist/:id' element={<ArtistDetails/>}/>
                    <Route  path='/album/:id' element={<AlbumDetails/>}/>
                    <Route  path='/signup' element={!isNotLogged ? <Navigate to='/'/> : <Signup/>} />
                    <Route  path='/add' element={isNotLogged ? <Navigate to='/signin'/> : <Add/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
