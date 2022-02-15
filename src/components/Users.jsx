import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Spinner} from 'react-bootstrap'
import '../style/Users.css'
import User from './User'
const Users = () => {
    const [error, setError] = useState(null)
    const [users, setUsers] = useState()
    useEffect(() => {
            axios.get("https://jsonplaceholder.typicode.com/users")
            // .then((response) => response.json())
            .then((res) => setUsers(res.data))
            .catch((err) => setError(err));
    },[])
    console.log(users)
    return (
        <div className="users">
            {users ? (
            users.map((el) => (
                <User el={el} key={el.id} />
            ))
            ) : (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            )}
        </div>
    );
}

export default Users