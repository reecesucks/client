import { Container, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import Header from "./Header";

function App() {
  const[products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])
 
  function addProduct() {
    setProducts(prevSate => [...products, {
      id: prevSate.length + 101,
      name: 'product' + (prevSate.length + 1), 
      price: 300.00,
      brand: 'some',
      description: 'desc',
      pictureUrl: 'http://picsum.photos/200'
    }])
  }

  return (
    < >
      <CssBaseline />
      <Header />
      <Container> 
          <Catalog products = {products} addProduct={addProduct}/>
      </Container>
     </>
  );
}

export default App;
