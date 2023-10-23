import React from 'react';
import { useEffect , useState} from "react";
import ArticulosList from '../components/ArticulosList'; 


function Home() {
    const [articulos,setArticulos]=useState([]);

    const urlInicial="https://fakestoreapi.com/products"
    const fetchArticuls =(url)=>{
  
      fetch(url)
      .then(response=> response.json())
      .then(data=> setArticulos(data))
      .catch(error => console.log(error))
    };
  
    useEffect(()=>{
      fetchArticuls(urlInicial);
    }, [])

  return (
    <>
  
    <div className="container mt-5">
      <ArticulosList articuloslist={articulos}/>
    </div>
  </>
  );
}

export default Home;