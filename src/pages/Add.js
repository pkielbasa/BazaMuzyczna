import React, {useState} from "react";
import "../styles/Form.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const App = () => {

    const [formValue, setFormValue] = React.useState({
        title: '',
        image: '',
        content: ''
    });
    const navigate = useNavigate();

    const HandleChangeRoute = () => {
        navigate('/')
        window.location.reload();
    };
    const checkTextInput = () => {
        if (!formValue.title.trim()) {
            alert('Please Enter title');
            return;
        }
        if (!formValue.image.trim()) {
            alert('Please Enter image');

        }
        if (!formValue.content.trim()) {
            alert('Please Enter content');

        }
    };


    const handleSubmit = (event) => {
        checkTextInput();
        event.preventDefault();
        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/movies',
            data: {
                title: formValue.title,
                image: formValue.image,
                content: formValue.content
            }
        }).then(() => {
                HandleChangeRoute();
            }).catch((error) => {
            alert("Podane dane są błędne!")
            console.log(error);
        });
    }

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });

    }

    return (
        <div className="form">
        <form onSubmit={handleSubmit}>
            <h1>Title</h1>
            <input
                type="text"
                name="title"
                placeholder="title"
                value={formValue.test}
                onChange={handleChange}
            />
            <br/><br/>
            <h1>Image</h1>
            <input
                type="text"
                name="image"
                placeholder="image"
                value={formValue.image}
                onChange={handleChange}
            />
            <br/><br/>
            <h1>Content</h1>
            <input
                type="text"
                name="content"
                placeholder="content"
                value={formValue.content}
                onChange={handleChange}
            />
            <br/><br/>
            <button
                type="submit"
            >
                Add
            </button>
        </form>
        </div>
    )
};

export default App;
