import React, { Component } from 'react';
import { Breadcrumb, Icon, Dropdown, Button, Divider, Menu, Drawer } from 'antd';
import { Link } from 'react-router-dom';

import Filters from './filters/Filters';

const OrderMenu = (
    <Menu>
        <Menu.Item key="0">Menor preço</Menu.Item>
        <Menu.Item key="1">Maior preço</Menu.Item>
        <Menu.Item key="2">Em promoção</Menu.Item>
        <Menu.Item key="3">Padrão</Menu.Item>
    </Menu>
);


class ListingHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDrawer: false
        }

        this.handleDrawer = this.handleDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
    }

    handleDrawer() {
        this.setState({ showDrawer: true });
    }

    closeDrawer() {
        this.setState({ showDrawer: false });
    }

    render() {
        return (
            <div className="listing-header">
                <Breadcrumb >
                    <Breadcrumb.Item><Link to="/"><Icon type="home" /></Link></Breadcrumb.Item>
                    <Breadcrumb.Item>Produtos</Breadcrumb.Item>
                </Breadcrumb>
                <span className="quantity-results">(1 - 24 de 1889 resultados)</span>
                 <Divider className="mobile" style={{ margin: '12px 0' }}/>
                <div className="listing-actions">
                    <Button icon="filter" className="mobile btn-clean" onClick={this.handleDrawer} shape="circle"></Button>
                    <Drawer title="Filtros"
                        placement="right"
                        visible={this.state.showDrawer}
                        onClose={this.closeDrawer}>
                        <Filters />
                    </Drawer>
                    <Dropdown overlay={OrderMenu} trigger={["click"]}>
                        <Button icon="bars" shape="circle-outline" className="btn-clean"></Button>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

export default ListingHeader;