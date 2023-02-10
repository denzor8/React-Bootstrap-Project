import React, { useState } from 'react';
import Header from './components/Header/Header';
import AddProduct from './components/AddProduct/AddProduct';
import ProductList from './components/ProductList/ProductList';
import EditProduct from './components/EditProduct/EditProduct';

const App = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const [products, setProducts] = useState([]);

  const [editedProduct, setEditedProduct] = useState({});


  function addProduct(newObj) {
    let newProducts = [...products];
    newProducts.push(newObj);
    setProducts(newProducts);

    // setProducts([...products, newObj]);
  };

  function getOneProduct(id) {
    let obj = products.find(item => item.id === id);
    setEditedProduct(obj);
    setShowEditModal(true);
  };

  function saveChanges(newObj) {
    let newProducts = products.map(item => {
      if (item.id === newObj.id) {
        return newObj
      }
      return item
    })
    setProducts(newProducts)
    setShowEditModal(false)
  }

  function deleteProduct(id) {
    let newProducts = products.filter(item => item.id!== id);
    setProducts(newProducts);
  }; 

  return (
    <>
      <Header handleShow={handleShow} />
      <AddProduct show={show} handleClose={handleClose} addProduct={addProduct} />
      <ProductList products={products} getOneProduct={getOneProduct} deleteProduct={deleteProduct} />
      {showEditModal && <EditProduct showEditModal={showEditModal} handleEditClose={handleEditClose} editedProduct={editedProduct} saveChanges={saveChanges}/>}
    </>
  )
}

export default App;