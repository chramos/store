import React, { Component } from 'react';
import { Button, Drawer, Popover, Badge, Icon } from 'antd';
import { Link } from 'react-router-dom';

import './Navbar.css';

import Menu from './Menu';
import Cart from './Cart';
import Toolbar from './Toolbar';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: false,
            count: 0
        }

        this.showDrawer = this.showDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
    }

    componentDidMount() {
    }

    closeDrawer() {
        this.setState({ collapse: false });
    }

    showDrawer() {
        this.setState({ collapse: true });
    }

    render() {
        return (
            <div>
                <Toolbar />
                <div className="navbar">
                    <Button icon="menu" shape="circle" className="btn-clean mobile" onClick={this.showDrawer} />
                    <div className="navbar-brand">
                        <Link to="/">
                            <span>Loja</span>
                            <span>Virtual</span>
                        </Link>
                    </div>
                    
                    <Popover placement="bottomRight" trigger="click" content={<Cart />} >
                        
                        <Button size="large" shape="circle" className="btn-clean">
                            <Badge count={this.state.count} showZero={false}>
                                <Icon style={{ fontSize: '22px' }} type="shopping-cart" />
                            </Badge>
                        </Button>
                        
                    </Popover>
                    

                    <section className="navbar-menu desktop">
                        <Menu mode="horizontal" />
                    </section>

                    <Drawer
                        title="Menu"
                        placement="left"
                        visible={this.state.collapse}
                        onClose={this.closeDrawer}>
                        <Menu mode="vertical" style={{width: 232}} />
                    </Drawer>
                </div>
            </div>
        );
    }
}

export default Navbar;