import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import { Route } from 'react-router-dom';

import './Posts.css'

//Single post component
const Posts = (props) => {

    
    const [ posts, setPosts ] = useState([]);
    const [ error, setError] = useState(false)

    const selectcClickHandler = (id) => {
        props.history.push('/' + id)
    }

    //Get dummy posts
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(res => {
                 const posts = res.data.slice(0, 6)
                 const updatedPosts = posts.map( post => {
                     return {
                         ...post,
                         author: 'Mike'
                     }
                 })
                 setPosts(updatedPosts)
             }).catch(err => {
                 setError(true);
             })
    },[])

    let postList = <p className='firstLine'>Something went wrong!!!</p>
    if(!error){
        postList = posts.map( post => {
            return <Post key={post.id}             
                    title={post.title} 
                    author={post.author} 
                    clicked={() => selectcClickHandler(post.id)}/>
        })
    }

    return(
        <div>
            <section className="Posts">
            { postList }
            </section>
            <Route exact path='/:id' component={FullPost} />
        </div>
    )
}

export default Posts;