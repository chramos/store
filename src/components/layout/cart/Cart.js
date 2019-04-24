import React, { Component } from 'react';
import { Breadcrumb, Icon, Divider, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

import './Cart.css';
import CartList from './CartList';

class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            total: 0
        }

        this.handleTotal = this.handleTotal.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
    }

    componentDidMount() {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if(cart !== null) {
            this.setState({ cart: cart }, () => {
                this.handleTotal();
            })
        }
        
    }

    handleTotal() {
        let total = 0;
        this.state.cart.forEach((element) => {
            total += (element.quantity * element.price);
        })

        this.setState({ total: parseInt(total) });
    }

    handleRemove(index) {
        let cart = this.state.cart;
        cart.splice(index, 1);

        this.setState({ cart: cart }, () => {

            this.props.store.dispatch({
                type: 'CHANGE_CART',
                payload: Object.keys(cart).length
            });
            
            this.handleTotal();

            localStorage.removeItem('cart');

            localStorage.setItem('cart', JSON.stringify(cart));
        });
    }

    handleQuantity(index, value) {
        if(value > 0) {
            let cart = this.state.cart;

            cart[index].quantity = value;

            this.setState({ cart: cart }, () => {
                this.handleTotal();

                localStorage.removeItem('cart');

                localStorage.setItem('cart', JSON.stringify(cart));
            });
        }
        
    }

    render() {
        return (
            <div className="page">
                <div className="container">
                    <div className="cart">
                        <Breadcrumb >
                            <Breadcrumb.Item><Link to="/"><Icon type="home" /></Link></Breadcrumb.Item>
                            <Breadcrumb.Item>Carrinho</Breadcrumb.Item>
                        </Breadcrumb>
                        <Row gutter={12} justify="center">
                            <Divider />
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <CartList cart={this.state.cart} onRemove={this.handleRemove} onQuantityChange={this.handleQuantity} />
                            </Col>
                            <Col xl={12} lg={12} md={12}>
                                <div className="cart-finish">
                                    <div className="flex">
                                        <h2 className="grow"><strong>TOTAL</strong></h2>
                                        <div style={{ textAlign: 'right' }}>
                                            <h2 style={{ margin: 0, fontSize: 32 }} className="product-price">{ this.state.total.toFixed(2).replace('.', ',') }</h2>
                                            <span className="text-muted" >ou 12x de <span className="product-price">{ (this.state.total / 12).toFixed(2).replace('.', ',') }</span> </span>
                                        </div>
                                    </div>
                                    <Button type="default" size="large" block><strong>FECHAR PEDIDO</strong></Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;