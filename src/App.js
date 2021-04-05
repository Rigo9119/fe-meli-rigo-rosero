import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import getItems from './utils/data';
// Components
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
//Styles
import './App.css';

function App() {
  const [inputValue, setinputValue] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function fetchItems() {      
      getItems(inputValue)
        .then(data => {
          const itemsArr = data.map(item => item.items);
          setProducts(itemsArr);
        })
        .catch(error => console.log(`error client ::=> ${error}`))
    }
      fetchItems()
  }, [inputValue]);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    window.location = `/items?search=${inputValue}`;
  }

  const inputHandler = (event) => {
    setinputValue(event.target.value);
  }

  const onClickHandler = (itemClicked) => {
    console.log(itemClicked)
  }

  const productsList = products[0];

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
              productsList={productsList} 
              onClick={onClickHandler}
            />
          </Route>
          <Route path={`/items/:id`}>
            <Header 
              formSubmit={onHandleSubmit}
              inputValue={inputValue}
              inputChange={inputHandler}
            /> 
            <ProductDetail />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
