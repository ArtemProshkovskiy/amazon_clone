import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

function ProductPage() {
    const { id } = useParams();
    const product = products[id]; // Access the product using the 'id' as the key

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductPage;
