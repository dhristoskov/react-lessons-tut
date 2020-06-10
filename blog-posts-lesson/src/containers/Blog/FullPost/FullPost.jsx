import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FullPost.css';


//Full posts container
const FullPost = (props) => {

    const [ selectedData, setSelectedData] = useState(null)

        //Get dummy posts
        useEffect(() => {
            if(props.match.params.id){
                if(!selectedData || (selectedData && selectedData.id !== +props.match.params.id)){
                    axios.get('https://jsonplaceholder.typicode.com/posts/' + props.match.params.id)
                         .then(res => {
                             console.log(res);
                             setSelectedData(res.data)
                         })
                }
            }
        })

        //Delete post
        const deletePostHandler = () => {
            axios.delete('https://jsonplaceholder.typicode.com/posts/' + props.match.params.id)
                 .then(res => {
                     console.log(res);
                 })
        }


        let post = <p className='firstLine'>Please select a Post!</p>;
        if(props.match.params.id){
            post = <p className='firstLine'>Loaded....</p>;
        }
        if(selectedData) {
            post = (
                <div className="FullPost">
                    <h1>{selectedData.title}</h1>
                    <p>{selectedData.body}</p>
                    <div className="Edit">
                        <button onClick={deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
}

export default FullPost;