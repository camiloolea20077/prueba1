import React from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductDetail({ articuloslist=[], addToCart }) {
  const { id } = useParams();
  const item = articuloslist.find((item) => item.id === id);

  return (
    <div>
      {item && (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} width="350" height="350" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              Precio: {item.price}
            </Card.Text>
            <Card.Text>
              Descripción: {item.description}
            </Card.Text>
            <Card.Text>
              Categoría: {item.category}
            </Card.Text>
            <Card.Text>
              Ratings: {item.ratings}
            </Card.Text>
            <Button variant="primary" onClick={() => addToCart(item)}>
              Añadir al carrito
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default ProductDetail;
