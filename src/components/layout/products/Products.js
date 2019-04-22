import React, { Component } from 'react';
import { Row, Col, Divider, Spin } from 'antd';
import axios from 'axios';

import './Products.css';

import ListingHeader from './ListingHeader';
import Filters from './filters/Filters';
import ProductCard from './ProductCard';
import ProductPagination from './ProductPagination';


class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            current: 1,
            isLoading: true
        }

        this.handlePagination = this.handlePagination.bind(this);
        this.getProducts = this.getProducts.bind(this);
    }
    
    componentDidMount() {
        this.getProducts();
        
    }

    getProducts(page=1) {
        axios.get('/products', {
            params: {
                limit: 2,
                page: page,
                gender: this.props.match.params.gender,
                category: this.props.match.params.category
            }
        }).then((result) => {
            console.log(result);
            this.setState({ data: result.data, isLoading: false, current: result.data.page });
        });
    }

    handlePagination(page) {

        this.setState({ isLoading: true });
        this.getProducts(page);
    }

    render() {
        
        return (
            <div className="page">
                <div className="container">
                    <div className="products">
                        <ListingHeader data={this.state.data} location={this.props.location} />
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
                                <Row gutter={12}>
                                    {this.getContent()}
                                </Row>
                                <ProductPagination
                                    current={this.state.current}
                                    data={this.state.data}
                                    handlePagination={this.handlePagination}
                                />
                            </Col>                   
                        </Row>
                    </div>
                </div>
            </div>
        );
    }

    getContent() {
        if(this.state.isLoading) {
            return(
                <div className="loading">
                    <Spin size="large" />
                </div>
            );
        } else {
            return(
                this.state.data.docs.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))
            );
        }
    }
}

export default Products;