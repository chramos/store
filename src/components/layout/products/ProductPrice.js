import React from 'react';

function ProductPrice(props) {
    
    if(props.product.offers) {
        return(
            <div>
                <span className="product-old-price">R$ {props.product.old_price}</span>
                <span className="product-price">R$ {props.product.price}</span>
            </div>
        );
    }
    return(
        <span className="product-price">R$ {props.product.price}</span>
    );
}

export default ProductPrice