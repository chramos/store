import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';

import './Products.css';

import ListingHeader from './ListingHeader';
import Filters from './filters/Filters';
import ProductCard from './ProductCard';


class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    _id: 0,
                    name: 'Camiseta Manga Curta',
                    images: [
                        'https://images2.marisa.com.br/medias/sys_master/images/images/h31/h22/9819006238750/Camiseta-Masculina-Manga-Curta-Inoffensive-Marisa-null-10031805629-C1.jpg'
                    ],
                    price: 39,
                    category_id: 3,
                    offers: false,
                    old_price: null,
                    created_at: Date.now(),
                    updated_at: null
                    
                },
                {
                    _id: 1,
                    name: 'Camiseta Estampada',
                    images: [
                        'https://cea.vteximg.com.br/arquivos/ids/6281952-1000-1200/Camiseta-Masculina-com-Estampa-de-Flamingo-Manga-Curta-Gola-Careca-Rosa-Claro-9317557-Rosa_Claro_1.jpg?v=636794756973800000'
                    ],
                    price: 29,
                    category_id: 3,
                    offers: true,
                    old_price: 39,
                    created_at: Date.now(),
                    updated_at: null
                    
                },{
                    _id: 2,
                    name: 'Camiseta Homem de Ferro',
                    images: [
                        'https://images2.marisa.com.br/medias/sys_master/images/images/h44/hf1/10382795898910/CAMISETA-MC-TSHIRT-IRON-MAN-PTO-M-null-10033652009-C1.jpg'
                    ],
                    price: 39,
                    category_id: 3,
                    offers: false,
                    old_price: null,
                    created_at: Date.now(),
                    updated_at: null
                    
                },
            ]
        }
    }
    render() {
        return (
            <div className="page">
                <div className="container">
                    <div className="products">
                        <ListingHeader location={this.props.location} />
                    </div>
                    <div className="content">
                        <Row gutter={12} justify="center">
                            <Divider />
                            <Col lg={4} className="desktop">
                                <h3 style={{ 
                                    textTransform: 'uppercase',
                                    fontWeight: 'bold'
                                    }}
                                >Filtros de busca</h3>

                                <Filters />
                            </Col>
                            <Col lg={20} md={24}>
                                
                                {
                                    this.state.products.map((product, index) => (
                                        <ProductCard product={product} key={index} />
                                    ))
                                }
                                
                            </Col>                   
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;