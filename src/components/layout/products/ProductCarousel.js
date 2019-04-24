import React from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';

function ProductCarousel(props) {
    return (
        <Carousel effect="fade" style={props.style}>
            {props.product.images.map((image, index) => (
                <div><img src={ image } width="100%" alt="" key={index} /></div>
            ))}
        </Carousel>
    );
}

ProductCarousel.propTypes = {
    style:PropTypes.object
}

export default ProductCarousel;