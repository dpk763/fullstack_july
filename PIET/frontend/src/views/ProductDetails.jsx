import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function ProductDetails() {
    const { id } = useParams('id');
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((res) => setProduct(res.data.products.find((item) => item.id === Number(id))))
            .catch((err) => console.log(err));

    }, []);

    console.log(product);
    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt="" />
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDetails
