import React from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';

function ProductCarousel(props) {
    return (
        <Carousel effect="fade" style={props.style}>
            {props.product.images.map((image, index) => (
                <img src={ image } width="100%" alt="" key={index} />
            ))}
        </Carousel>
    );
}

ProductCarousel.propTypes = {
    style:PropTypes.object
}

export default ProductCarousel;