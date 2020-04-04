import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './NewPost.css';

const NewPost = (props) => {

    const [ submited, setSubmited ] = useState(false)
    const [ post, setPost ] = useState({
        title: '',
        content: '',
        author: ''
    })

    const { title, content, author } = post;

    const changeHandler = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => { 
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', post)
             .then(res => {
                 console.log(res);
                 //props.history.push('/');
                 setSubmited(true)
             })
    }

    let redirect = null;
    if( submited ){
        redirect = <Redirect to='/' />
    }
   
    return (
        <div className="NewPost">   
            {redirect}      
            <h1>Add a Post</h1>
            <label>Title</label>
            <input type="text" name='title' value={title} onChange={changeHandler} />
            <label>Content</label>
            <textarea rows="4" name='content' value={content} onChange={changeHandler} />
            <label>Author</label>
            <select value={author} name='author' onChange={changeHandler}>
                <option value="Mike">Mike</option>
                <option value="Nick">Nick</option>
            </select>
            <button onClick={submitHandler}>Add Post</button>
        </div>
    );
}

export default NewPost;