import React from 'react'
import { useNavigate } from "react-router-dom";
import { Card,Button } from 'react-bootstrap';
const User = ({el}) => {
    const navigate = useNavigate();
    return (
      <div>
        <Card className="card">
          <Card.Header as="h5">{el.username}</Card.Header>
          <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Text>email : {el.email}</Card.Text>
            <Button variant="dark" onClick={() => navigate(`/users/${el.id}`)}>
              Go To Profil
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
}

export default User