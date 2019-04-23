import React, { Component } from 'react';
import { Breadcrumb, Icon, Dropdown, Button, Divider, Menu, Drawer } from 'antd';
import { Link } from 'react-router-dom';

import Filters from './filters/Filters';
import QueryResults from '../../QueryResults';

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

    getBreadcrumbItems() {
        const paths = this.props.location.pathname.slice(1).split('/');
        
        const count = paths.length;

        var url = '';

        return(
            paths.map((path, index) => {
                url += '/' + path;

                if(count -1 === index) {
                    return <Breadcrumb.Item key={index}>
                        {path.charAt(0).toUpperCase() + path.slice(1)}
                    </Breadcrumb.Item>
                } else {
                    return <Breadcrumb.Item key={index}>
                        <Link to={url} >{path.charAt(0).toUpperCase() + path.slice(1)}</Link>
                    </Breadcrumb.Item>
                }                
            })
        );
    }

    render() {
        return (
            <div className="listing-header">
                <Breadcrumb >
                    <Breadcrumb.Item><Link to="/"><Icon type="home" /></Link></Breadcrumb.Item>
                    {this.getBreadcrumbItems()}
                </Breadcrumb>

                <QueryResults data={this.props.data} />

                <Divider className="mobile" style={{ margin: '12px 0' }}/>

                <div className="listing-actions">
                    <Button icon="filter" className="mobile btn-clean" onClick={this.handleDrawer} shape="circle"></Button>
                    <Drawer title="Filtros"
                        placement="right"
                        visible={this.state.showDrawer}
                        onClose={this.closeDrawer}>
                        <Filters match={this.props.match} onPriceChange={this.props.onPriceChange} onCategoryChange={this.props.onCategoryChange} />
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