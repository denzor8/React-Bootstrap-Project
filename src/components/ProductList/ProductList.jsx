import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products, getOneProduct,deleteProduct }) => {
    return (
        <>
            <center style={{ fontSize: '30px', margin: '20px' }}>Products</center>
            <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
                {products?.map(item => (
                    <ProductCard key={item.id} item={item} getOneProduct={getOneProduct} deleteProduct={deleteProduct} />
                ))}
            </div>
        </>
    )
};

export default ProductList;