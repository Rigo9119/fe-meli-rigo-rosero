import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { getItems, getItem } from './utils/data';
// Components
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
//Styles
import './App.css';

function App() {
  const [inputValue, setinputValue] = useState('');
  const [id, setId] = useState('');
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  
  useEffect(() => {
    function fetchItems() {      
      getItems(inputValue)
        .then(data => {
          const itemsArr = [...data?.items.slice(0, 4)];
          setProducts(itemsArr);
        })
        .catch(error => console.log(`error client list::=> ${error}`))
    }
      fetchItems()
  }, [inputValue]);

  useEffect(() => {      
      getItem(id)
        .then(data => setProduct(data.item))
        .catch(error => console.log(`error client item::=> ${error}`))
  }, [id]);
  
  const onHandleSubmit = (event) => {
    event.preventDefault();
    window.location = `/items?search=${inputValue}`;
  }

  const inputHandler = (event) => {
    setinputValue(event.target.value);
  }

  const onClickHandler = (itemClicked) => {
    setId(itemClicked);
  }

  return (
    <div>
      <Router>
        <div>
          <Route exact path="/">
            <Header 
              formSubmit={onHandleSubmit}
              inputValue={inputValue}
              inputChange={inputHandler}
            /> 
          </Route>

          <Route exact path={`/items`}>
            <Header 
              formSubmit={onHandleSubmit}
              inputValue={inputValue}
              inputChange={inputHandler}
            /> 
            <ProductList 
              productsList={products} 
              onClick={onClickHandler}
            />
          </Route>

          <Route path={`/items/:id`}>
            <Header 
              formSubmit={onHandleSubmit}
              inputValue={inputValue}
              inputChange={inputHandler}
            /> 
            <div className="details">
                  <ProductDetail 
                    productImg={product?.picture}
                    productAlt={product?.title}
                    productPrice={product?.price?.amount}
                    productTitle={product?.title}
                    productStatus={product?.sold_quantity}
                    productDescription={product?.description}
                    productCondition={product?.condition}
                    quantitySold={product?.sold_quantity}
                  />   
            </div>
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
