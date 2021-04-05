import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  //Link
} from "react-router-dom";
import getItems from './utils/data';
// Components
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
//Styles
import './App.css';

function App() {
  const [inputValue, setinputValue] = useState('');
  const [products, setProducts] = useState([]);
  
  const inputHandler = (event) => {
    setinputValue(event.target.value);
  }

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
  
  const productsList = products[0];

  return (
    <div>  
      <Router>
        <div>
          <Route path="/" component={Header}/>
          <Route 
            path={`/items?search=${inputValue}`} 
          />
          <Route path={`/items/id`} />
          <ProductList productsList={productsList} />
        </div>
      </Router>
    </div>
  );
}

export default App;
