import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Row, Col, Divider, Spin, Empty } from 'antd';
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
            isLoading: true,
            min: 30,
            max: 200,
            category: undefined,
            gender: "todos",
        }

        this.handlePagination = this.handlePagination.bind(this);
        this.getProducts = this.getProducts.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handeCategory = this.handeCategory.bind(this);
        
    }
    
    componentDidMount() {
        
        if (this.props.match.params.gender !== undefined) {
            this.setState({ gender: this.props.match.params.gender })
        }
        if (this.props.match.params.category !== undefined) {
            this.setState({ category: this.props.match.params.category })
        }

        setTimeout(() => {
            this.getProducts();
        }, 1500)
    }

    getProducts(data={}) {

        axios.get('/products', {
            params: {
                limit: 2,
                page: data.page || 1,
                gender: this.state.gender,
                category: this.state.category,
                min: this.state.min,
                max: this.state.max,

            }
        }).then((result) => {
            if(Object.keys(result.data).length === 0) {
                result.data = [];
            } 
            this.setState({ data: result.data, isLoading: false, current: result.data.page });
        });
    }

    handlePagination(page) {
        this.setState({ isLoading: true });
        this.getProducts({page: page});
    }

    handlePrice(value) {
        this.setState({ min: value[0], max: value[1], isLoading: true },() => {
            this.getProducts();
        });
    }

    handleGender(gender) {
        
        this.setState({ gender: gender }, () => {
            let category = (this.state.category !== undefined) ?  '/' + this.state.category : '';

            window.history.pushState('', '', ['/produtos/' + gender + category])
            this.getProducts();
        })
    }

    handeCategory(category) {
        if(this.state.gender !== "todos") {
            window.history.pushState('', '', ['/produtos/' + this.state.gender + '/' + category.name.toLowerCase()])
        } else {
            window.history.pushState('', '', [
                '/produtos/' + 
                category.gender.toLowerCase() + '/' + 
                category.name.toLowerCase()])
        }
        
        this.setState({ isLoading: true, category: category.name.toLowerCase() }, () => {
            this.getProducts();
        })

    }

    render() {
        
        return (
            <div className="page">
                <div className="container">
                    <div className="products">
                        <ListingHeader 
                            data={this.state.data} 
                            location={this.props.location}
                            match={this.props.match}
                            onPriceChange={this.handlePrice}
                            onGenderChange={this.handleGender}
                            onCategoryChange={this.handeCategory} />
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

                                <Filters 
                                    match={this.props.match}
                                    onGenderChange={this.handleGender}
                                    onPriceChange={this.handlePrice} 
                                    onCategoryChange={this.handeCategory} />
                            </Col>
                            <Col lg={20} md={24}>
                                <Row gutter={12}>
                                    {this.getContent()}
                                </Row>
                                <ProductPagination
                                    current={this.state.current}
                                    isLoading={this.state.isLoading}
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

            if(Object.keys(this.state.data.docs).length === 0) {
                return(
                    
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />

                );
            }
            return(
                this.state.data.docs.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))
            );
        }
    }
}

export default withRouter(Products);