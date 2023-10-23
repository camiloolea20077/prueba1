import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Modal, Button } from 'react-bootstrap';

function CartModal({ cart = [], removeFromCart, updateCart, onHide, show }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.image} width="350" height="350" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
              </Card.Body>
            </Card>
            <p>Cantidad: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>
            <button onClick={() => updateCart(item, 1)}>+</button>
            <button onClick={() => updateCart(item, -1)}>-</button>
            <button onClick={() => removeFromCart(item)}>Eliminar del carrito</button>
          </div>
        ))}
        <p>Total de la compra: ${calculateTotal()}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
