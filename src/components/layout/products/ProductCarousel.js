import React from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';

function ProductCarousel(props) {
    return (
        <Carousel effect="fade" style={props.style}>
            <div><img src={ props.product.images[0] } width="100%" alt="" /></div>
            <div><img src="https://cea.vteximg.com.br/arquivos/ids/7332892-1000-1200/Camiseta-Masculina-Os-Vingadores-Metalizada-Manga-Curta-Gola-Careca-Cinza-Mescla-Escuro-9385097-Cinza_Mescla_Escuro_1.jpg?v=636843072066370000" width="100%" alt="" className=""/></div>
        </Carousel>
    );
}

ProductCarousel.propTypes = {
    style:PropTypes.object
}

export default ProductCarousel;