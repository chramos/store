import React, { Component } from 'react';
import { Empty, List } from 'antd';
import { Link } from 'react-router-dom';
import ProductPrice from '../layout/products/ProductPrice';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            total: 0
        }

        this.handleTotal = this.handleTotal.bind(this);
    }
    componentDidMount() {
        if(this.props.count > 0) {
            this.setState({ cart: JSON.parse(localStorage.getItem('cart')) }, () => {
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

    render() {
        if(this.props.count <= 0) {
            return(
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            );
    
        }
        return(
            <div style={{ minWidth: 350 }}>
                <List
                    dataSource={this.state.cart}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                avatar={<img alt="" width="62" src={item.images[0]} />}
                                title={
                                    <div className="flex">
                                        <h3 className="grow">{item.name}</h3>
                                        <span style={{ marginLeft: 12, fontSize: 22 }}><ProductPrice product={item} /></span>
                                    </div>
                                }
                                description={
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span>Tamanho: {item.size}</span>
                                            <span>Quantidade: {item.quantity}</span>
                                    </div>}
                            />
                    
                        </List.Item>
                    )}>
                    <List.Item>
                        <div style={{ width: '100%' }}>
                            <p style={{ textAlign: 'center' }}>
                                <strong>TOTAL:&nbsp;</strong>
                                <span className="product-price" style={{ fontSize: 22 }}>{this.state.total}</span>
                            </p>
                        </div>
                    </List.Item>
                    <Link to={{ pathname: "/carrinho", state: { total: this.state.total } }} className="ant-btn ant-btn-primary ant-btn-lg ant-btn-block"><strong>VER MINHA COMPRA</strong></Link>
                </List>
            </div>
        );
    }
}

export default Cart;