import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, ListGroup , ListGroupItem ,Spinner} from "react-bootstrap";
const Post = ({el}) => {
    const [comment, setComment] = useState()
    const [error, setError] = useState();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${el.id}`)
        .then(coment=>setComment(coment.data))
        .catch(err=>setError(err))
        }, [])
    console.log(comment)
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>{el.body}</Card.Text>
          </Card.Body>
          <ListGroup>
            <h5>Commentaires :</h5>
          </ListGroup>
          <ListGroup className="list-group-flush">
            {error ? (
              <h3>error</h3>
            ) : comment ? (
              comment.map((el) => (
                <ul>
                  {" "}
                  <li>{el.name}</li>
                  {/* <hr /> */}
                </ul>
              ))
            ) : (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </ListGroup>
        </Card>
      </div>
    );
}

export default Post