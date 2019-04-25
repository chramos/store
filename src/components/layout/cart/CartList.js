import React, { Component } from 'react';
import { List, InputNumber, Button, Popconfirm } from 'antd';

class CartList extends Component {

    
    render() {
        return (
            <div>
                <h2 style={{ fontSize: 28 }}>Meu carrinho</h2>
                <div style={{ overflowY: 'auto', maxHeight: 400 }}>
                    <List
                        style={{ minHeight: 400 }}
                        dataSource={this.props.cart}
                        itemLayout="horizontal"
                        renderItem={(item, index) => (
                            <List.Item key={item.id}>
                                <List.Item.Meta
                                    avatar={<img alt="" width="62" src={item.images[0]} />}
                                    title={ <strong style={{ fontSize: 18 }}>{item.name}</strong> }
                                    description={
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span>Tamanho: {item.size}</span>
                                                <span className="text-muted">Quantidade em estoque: { item.stock }</span>
                                        </div>}
                                />

                                <div className="cart-list-action">
                                    <div>
                                        <InputNumber min={1} max={item.stock} defaultValue={item.quantity} size="large" onChange={(quantity) => this.props.onQuantityChange(index, quantity)  } />
                                    </div>
                                    <span style={{ margin: 0, fontSize: 24 }} className="product-price">{ item.price.toFixed(2).replace('.', ',') }</span>
                                    <Popconfirm title="Deseja remover este item do carrinho?" onConfirm={() => this.props.onRemove(index)} onCancel={() => {}} okText="Remover" cancelText="Cancelar">
                                        <Button className="btn-clean" shape="circle" icon="close" />
                                    </Popconfirm>
                                </div>
                                
                        
                            </List.Item>
                        )}>
                    </List>
                </div>
            </div>
        );
    }
}

export default CartList;