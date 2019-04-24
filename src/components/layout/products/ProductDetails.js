import React, { Component } from 'react';
import { Spin, Row, Col, InputNumber, Divider, Button, message } from 'antd';

import axios from 'axios';

import ProductPrice from './ProductPrice';
import ProductCarousel from './ProductCarousel';
import ProductHeader from './ProductHeader';
import ProductSizes from './ProductSizes';

class ProductDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: {},
            isLoading: true,

            size: undefined,
            quantity: 1
        }

        this.handleSize = this.handleSize.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        axios.get('/products/' + this.props.match.params.id).then((product) => {
            this.setState({ product: product.data, isLoading: false });
        })
    }

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    handleSize(value) {
        this.setState({ size: value });
    }

    handleQuantity(number) {
        this.setState({ quantity: number });
    }

    alreadyInCart(cart) {

        var result = false;

        if (Object.keys(cart).length <= 0) {
            result = false;
        }

        cart.forEach(element => {
            if(element._id === this.state.product._id) {
                console.log('iqual');
                result = true;
            }
        });

        return result;
    }

    addToCart() {
        var cart = (JSON.parse(localStorage.getItem('cart')) === null) ? [] : (JSON.parse(localStorage.getItem('cart')))

        if (this.state.size === undefined) {
            return message.error('Oops! Você esqueceu de selecionar um tamanho.');
        }

        else if (this.alreadyInCart(cart)) {
            return message.error('Oops! Este produto já está no seu carrinho.');
        }
        
        else if (this.state.quantity > this.state.product.stock) {
            return message.error('Oops! A quantidade seleciona excede a quantidade em estoque.');
        }

        else {
            let value = Object.assign(this.state.product);
            value['size'] = this.state.size;
            value['quantity'] = this.state.quantity;

            if (Object.keys(cart).length > 0) {
                localStorage.removeItem('cart')
            }

            cart.push(Object.assign(value));
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        // this.props.onCartChange(Object.keys(cart).length);

        return message.success('Produto adicionado ao seu carrinho :)');
        
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
                            <div className="product-details-info">
                                <h1 style={{ fontSize: 36 }} className="desktop">{this.state.product.name}</h1>
                                <ProductPrice style={{ fontSize: 36 }} product={this.state.product} />

                                <section className="product-details-section">
                                    <p className="product-details-label">Tamanho</p>
                                    <ProductSizes onSelected={this.handleSize} value={this.state.product.sizes} />
                                </section>

                                <section className="product-details-section">
                                    <div className="flex">
                                        <div>
                                            <InputNumber min={1} max={this.state.product.stock} defaultValue={1} size="large" onChange={this.handleQuantity} />
                                        </div>
                                        <div style={{ marginLeft: 18 }}>
                                            <Button  type="default" icon="shopping-cart" size="large" onClick={this.addToCart}>ADICIONAR AO CARRINHO</Button>
                                        </div>   
                                    </div>
                                    
                                </section>

                                <Divider />
                                
                                <section className="product-details-section">
                                    <p className="product-details-label">Descrição</p>
                                    <p className="">{this.state.product.description}</p>
                                </section>
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