import React from 'react';
import PropTypes from 'prop-types';

function ProductPrice(props) {
    
    if(props.product.offers) {
        return(
            <div>
                <span style={props.style} className="product-old-price">R$ {props.product.old_price}</span>
                <span style={props.style} className="product-price">R$ {props.product.price}</span>
            </div>
        );
    }
    return(
        <span style={props.style} className="product-price">R$ {props.product.price}</span>
    );
}

ProductPrice.propTypes = {
    style:PropTypes.object
}

export default ProductPrice