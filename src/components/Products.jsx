import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchProducts } from "../api/api";
import ProductItem from "./ProductItem";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      setProducts(data);
    })();
  }, []);

  return (
    <ProductsWrapper>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductsWrapper>
  );
}

export default Products;

const ProductsWrapper = styled.div``;
