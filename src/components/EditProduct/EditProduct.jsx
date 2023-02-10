import React, { useState } from 'react';
import { Button, Modal, FormControl } from 'react-bootstrap';

const EditProduct = ({ showEditModal, handleEditClose, editedProduct , saveChanges}) => {
    const [product, setProduct] = useState(editedProduct);

    const handleInput = e => {
        let newObj = {
            ...product,
            [e.target.name]: e.target.value
        };
        setProduct(newObj);
    };


    function saveEditedProduct() {
        for (let key in product) {
            if (product[key] === '') {
                alert('Some inputs are empty')
                return 
            }
        }
        saveChanges(product)
    }
    return (
        <>
            <Modal show={showEditModal} onHide={handleEditClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form">
                        <FormControl size="lg" className="my-3" placeholder="Title" value={product.title} name="title" onChange={handleInput} />

                        <FormControl size="lg" className="my-3" placeholder="Description" value={product.desc} name="desc" onChange={handleInput} />

                        <FormControl size="lg" className="my-3" placeholder="Price" value={product.price} name="price" onChange={handleInput} />

                        <FormControl size="lg" className="my-3" placeholder="Image" value={product.image} name="image" onChange={handleInput} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleEditClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveEditedProduct}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default EditProduct;