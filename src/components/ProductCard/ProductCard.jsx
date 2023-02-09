import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ item, getOneProduct }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    Price: {item.price}$ <br/>
                    Description: {item.desc}
                </Card.Text>
                <Button variant="danger">Delete</Button>
                <Button variant="success" className="mx-1" onClick={() => getOneProduct(item.id)}>Edit</Button>
            </Card.Body>
        </Card>
    )
};

export default ProductCard;