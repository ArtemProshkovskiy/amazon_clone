import React, { useEffect, useState } from 'react';
import { callAPI } from "../api/getProducts";
import { useParams } from "react-router-dom";

function ProductPage(props) {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // Assuming callAPI retrieves a JSON array
    callAPI('data/products.json').then((res) => {
      // Find the product with the matching id
      const foundProduct = res.find((item) => item.id === id);

      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        // Handle the case where the product is not found
        console.error(`Product with id ${id} not found.`);
      }
    });
  }, [id]);

  console.log(product);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {/* Add more product details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductPage;
