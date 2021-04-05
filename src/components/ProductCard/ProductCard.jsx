import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
// Styles 
import './styles.css'

const ProductCard = ({
    productHref, 
    productImg, 
    productAlt, 
    productPrice, 
    productTitle, 
    productLocation,
}) => {
    
    return (
        <Link
            className="card"
            to={`/items/${productHref}`}
        >
            <div className="card__left">
                <div className="card__left__img-wrap">  
                    <img 
                        className="card__left__img-wrap__img"
                        src={productImg} 
                        alt={productAlt} 
                    />
                </div>
                <div className="card__left__text">
                    <h3 className="card__left__text__price">
                        $ {productPrice}
                    </h3>
                    <p className="card__left__text__title">
                        {productTitle}
                    </p>
                </div>
            </div>
            <div className="card__right">
                <h5 className="card__right__location"> 
                    {productLocation}
                </h5>
            </div>
        </Link>
    );
};


ProductCard.propTypes = {
    productHref: PropTypes.string,
    productImg: PropTypes.string,
    productAlt: PropTypes.string,
    productPrice: PropTypes.number,
    productTitle: PropTypes.string,
    productLocation: PropTypes.string,
    onClickHandler: PropTypes.func,
};


export default ProductCard;
