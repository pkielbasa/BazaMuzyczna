import React from 'react';

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";


import './App.css';
import Layout from './components/Layout';
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Details from "./pages/Details";
import Signup from "./pages/Signup";
import Add from "./pages/Add";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";

import {isExpired} from "react-jwt";
import * as PropTypes from "prop-types";


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
        <Router>
            <Layout>
                <Routes>
                    <Route  path='/artists' element={<Artists/>}/>
                    <Route  path='/albums' element={<Albums/>}/>
                    <Route  path='/' element={<Home/>}/>
                    <Route  path='/signin' element={!isNotLogged ? <Navigate to='/'/> : <Signin/>} />
                    <Route  path='/movies/:id' element={<Details/>}/>
                    <Route  path='/signup' element={!isNotLogged ? <Navigate to='/'/> : <Signup/>} />
                    <Route  path='/add' element={isNotLogged ? <Navigate to='/signin'/> : <Add/>} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
