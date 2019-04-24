import React, { Component } from 'react';
import { List, InputNumber, Button, Popconfirm } from 'antd';
import ProductPrice from '../products/ProductPrice';

class CartList extends Component {

    
    render() {
        return (
            <List
                style={{ minHeight: 400 }}
                dataSource={this.props.cart}
                itemLayout="horizontal"
                renderItem={(item, index) => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            avatar={<img alt="" width="62" src={item.images[0]} />}
                            title={<h3 className="grow">{item.name}</h3>}
                            description={
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span>Tamanho: {item.size}</span>
                                        <span className="text-muted">Produto em estoque</span>
                                </div>}
                        />

                        <div className="cart-list-action">
                            <div>
                                <InputNumber min={1} max={item.stock} defaultValue={item.quantity} size="large" onChange={() => {}} />
                            </div>
                            <p style={{ marginLeft: 12, fontSize: 22 }}><ProductPrice product={item} /></p>
                            <Popconfirm title="Deseja remover este item do carrinho?" onConfirm={() => this.props.onRemove(index)} onCancel={() => {}} okText="Remover" cancelText="Cancelar">
                                <Button className="btn-clean" shape="circle" icon="close" />
                            </Popconfirm>
                        </div>
                        
                
                    </List.Item>
                )}>
            </List>
        );
    }
}

export default CartList;