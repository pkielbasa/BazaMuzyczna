import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import '../styles/Form.css'
import '../styles/Input.css';

const Signup = () => {

    const [email, setEmail] = useState('')
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
            url: 'https://pr-movies.herokuapp.com/api/user/create',
            data: {
                email: email,
                name: name,
                password: password,
            }
        }).then((response) => {
            HandleChangeRoute();
        }).catch((error) => {
            alert("Podany email lub login są już używane!")
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
            return;
        }
        if (!email.trim()) {
            alert('Please Enter email');

        }
    };
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={HandleSubmit}>
                    <div className="form-group">
                        <input className="formInput" placeholder="First Name" size="lg"
                               onChange={e => setName(e.target.value)}/><br />
                    </div>
                    <div className="form-group">
                        <input className="formInput" placeholder="Email" size="lg" type={"email"}
                               onChange={e => setEmail(e.currentTarget.value)}/><br />
                    </div>
                    <div className="form-group">
                        <input id="password1"
                               pr="4.5rem"
                               type={"password"}
                               placeholder="Password"
                               onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">SignUp</button>
                </form>

            </div>
        );
}

export default Signup;
