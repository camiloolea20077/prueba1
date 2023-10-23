import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ArticulosList=({articuloslist=[]})=>{

    const [carrito, setCarrito] = useState([]);
    const agregarAlCarrito = (item) => {
        setCarrito([...carrito, item]); 
        console.log("Artículo agregado al carrito:", item);
};
    return(
        <div className='row'>
            {
                articuloslist.map((item,index)=>(
                    <div key={index} className='col mb-4'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} width='350' height='350'/>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                               Precio: {item.price}
                            </Card.Text>
                            <Button variant="primary" onClick={() => agregarAlCarrito(item)}>Añadir al carrito</Button>
                            <Link to={`/product/${item.id}`}>Ver detalles</Link>
                        </Card.Body>
                        </Card>   
            </div>
                ))
            }
        </div>
    )

}

export default ArticulosList