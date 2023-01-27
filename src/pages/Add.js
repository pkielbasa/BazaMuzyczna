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
            alert('Please Enter source');
            return;
        }
        if (!formValue.image.trim()) {
            alert('Please Enter name');

        }
        if (!formValue.content.trim()) {
            alert('Please Enter writer');

        }
    };


    const handleSubmit = (event) => {
        checkTextInput();
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3000/newSong',
            data: {
                src: formValue.title,
                name: formValue.image,
                writer: formValue.content,
            }
        }).then(() => {
                HandleChangeRoute();
            }).catch((error) => {
            alert("Podane dane są błędne!")
            console.log(error);
            console.log(formValue.title);
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
            <h1>Source</h1>
            <input
                type="text"
                name="title"
                placeholder="source"
                value={formValue.title}
                onChange={handleChange}
            />
            <br/><br/>
            <h1>Name</h1>
            <input
                type="text"
                name="image"
                placeholder="name"
                value={formValue.image}
                onChange={handleChange}
            />
            <br/><br/>
            <h1>Writer</h1>
            <input
                type="text"
                name="content"
                placeholder="writer"
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
