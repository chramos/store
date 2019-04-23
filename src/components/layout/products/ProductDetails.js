import React, { Component } from 'react';
import { Spin, Row, Col, InputNumber} from 'antd';

import axios from 'axios';

import ProductPrice from './ProductPrice';
import ProductCarousel from './ProductCarousel';
import ProductHeader from './ProductHeader';

class ProductDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: {},
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get('/products/' + this.props.match.params.id).then((product) => {
            this.setState({ product: product.data, isLoading: false });
        })
    }

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        if (this.state.isLoading) {
            return(
                <div className="page">
                    <div className="loading">
                        <Spin size="large" />
                    </div>
                </div>
            );
        }

        return (
            <div className="page">
                <div className="container products">
                    <ProductHeader match={this.props.match} product={this.state.product} />
                    
                    <div className="product-details">
                    <Row>
                        <Col className="" xl={10} lg={10} md={10} sm={24} xs={24}>
                            <ProductCarousel product={this.state.product} style={{ height: 400 }} />
                        </Col>
                        <Col className="" xl={14} lg={14} md={14} sm={24} xs={24}>
                            <div className="">
                                <h1 style={{ fontSize: 36 }} className="desktop">{this.state.product.name}</h1>
                                <ProductPrice style={{ fontSize: 28 }} product={this.state.product} />

                                <InputNumber min={1} max={this.state.product.stock} defaultValue={1} onChange={() => {}} />
                            </div>
                        </Col>
                    </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;