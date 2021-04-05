import React from 'react';
import PropTypes from 'prop-types';
// Components
import ProductCard from '../ProductCard/ProductCard';
// Styles
import './styles.css';

const ProductList = ({productsList, onClick}) => {
    
    return (
        <div className="list">
            {productsList?.map(item => 
                <ProductCard 
                    key={item.id}
                    productHref={item.id}
                    productImg={item.thumbnail}
                    productAlt={item.title}
                    productLocation={item.address.state_name}
                    productPrice={item.price}
                    productTitle={item.title}
                    onClick={onClick}
                />
            )}
        </div>
    );
};


ProductList.propTypes = {
    productsList: PropTypes.array,
    onClick: PropTypes.func
};


export default ProductList;
