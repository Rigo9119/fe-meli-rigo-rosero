import React from "react";
import PropTypes from "prop-types";

const ProductDetail = ({
    productImg,
    productAlt,
    productPrice,
    productTitle,
    productDescription,
    productStatus,
    quantitySold,
}) => {
    return (
        <div>
            <div>
                <div>
                    <img src={productImg} alt={productAlt} />
                </div>
                <div>
                    <h4>Descripción del producto</h4>
                    <p>{productDescription}</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>
                        {productStatus} - {quantitySold}
                    </h3>
                    <h3>{productTitle}</h3>
                    <h4>$ {productPrice}</h4>
                </div>
                <button onClick={() => alert("product added :)")}>Comprar</button>
            </div>
        </div>
    );
};

ProductDetail.propTypes = {
    productImg: PropTypes.string,
    productAlt: PropTypes.string,
    productPrice: PropTypes.string,
    productTitle: PropTypes.string,
    productDescription: PropTypes.string,
    productStatus: PropTypes.string,
    quantitySold: PropTypes.string,
};

export default ProductDetail;
