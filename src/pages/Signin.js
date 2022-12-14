import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import '../styles/Form.css'
import '../styles/Input.css';

const Signin = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate();

    const HandleChangeRoute = () => {
        navigate('/')
        window.location.reload();
    };



    const HandleSubmit = (event) => {
        checkTextInput();
        event.preventDefault();
        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/auth',
            data: {
                login: name,
                password: password,
            }
        }).then((response) => {
            localStorage.setItem('token', response.data.token);
            console.log(response.data.token)
            HandleChangeRoute();
        }).catch((error) => {
            alert("Podany email lub login są błędne!")
            console.log(error);
        });

    };
    const checkTextInput = () => {
        if (!name.trim()) {
            alert('Please Enter Name');
            return;
        }
        if (!password.trim()) {
            alert('Please Enter password');

        }
    };


    return (
        <div id="signUpBackground">
            <div id="signinForm">
            </div>
            <h1>Sign In</h1>
            <div id="signForm">
                <form id="formSign" onSubmit={HandleSubmit}>
                    <input className="formInput" placeholder="First Name" size="lg"
                           onChange={e => setName(e.target.value)}/><br />
                    <input id="password1"
                           pr="4.5rem"
                           type={"password"}
                           placeholder="Password"
                           onChange={e => setPassword(e.target.value)}
                    />

                    <br/>
                    <button id="createAccountButton" type="submit">Zaloguj!</button>
                </form>
            </div>
        </div>
)
}


export default Signin;
