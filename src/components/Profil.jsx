import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import { Spinner } from 'react-bootstrap'
import { useMatch } from 'react-router-dom'
import '../style/Profil.css'
const Profil = () => {
    const match=useMatch('/users/:id')
    const [post, setPost] = useState()
    const [error, setError] = useState(null)
    
    useEffect(() => {
            axios
            .get(`https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`)
            .then((post) => setPost(post.data))
            .catch((err) => setError(err));
        }, [])
      
    console.log(match.params.id);
    
        return (
        <div className="posts">
            {error ? (
            <h1>desolé il ya un erreur </h1>
            ) : post ? (
            post.map((el) => <Post key={el.id} el={el} />)
            ) : (
            <Spinner animation="border" variant="dark" />
            )}
        </div>
        );
}

export default Profil