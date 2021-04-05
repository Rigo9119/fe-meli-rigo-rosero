import React from "react";
import PropTypes from "prop-types";
// Styles
import './styles.css'

const ProductDetail = ({
    productImg,
    productAlt,
    productPrice,
    productTitle,
    productDescription,
    quantitySold,
}) => {
    return (
        <div className="detail">
            <div className="detail__top">
                <div className="detail__top__img-wrap">
                    <img 
                        className="detail__top__img-wrap__img"
                        src={productImg} 
                        alt={productAlt} 
                    />
                </div>
                <div className="detail__top__data">
                    <h3 className="detail__top__data__status">
                        vendidos: {quantitySold}
                    </h3>
                    <h3 className="detail__top__data__title">
                        {productTitle}
                    </h3>
                    <h4 className="detail__top__data__price">
                        $ {productPrice}
                    </h4>
                    <button 
                        className="btn"
                        onClick={() => alert("product added :)")}
                    >
                        Comprar
                    </button>
                </div>
            </div>

            <div className="detail__bottom">
                <h6 className="detail__bottom__title">
                    Descripción del producto
                </h6>
                <p className="detail__bottom__description">
                    {productDescription}
                </p>
            </div>
        </div>
    );
};

ProductDetail.propTypes = {
    productImg: PropTypes.string,
    productAlt: PropTypes.string,
    productPrice: PropTypes.number,
    productTitle: PropTypes.string,
    productDescription: PropTypes.string,
    quantitySold: PropTypes.number,
};

export default ProductDetail;
