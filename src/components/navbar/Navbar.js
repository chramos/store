import React, { Component } from 'react';
import { Button, Drawer, Popover } from 'antd';
import { Link } from 'react-router-dom';

import './Navbar.css';

import Menu from './Menu';
import Cart from './Cart';


class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: false
        }

        this.showDrawer = this.showDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
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
                <div className="navbar">
                    <Button icon="menu" shape="circle" className="btn-clean mobile" onClick={this.showDrawer} />
                    <div className="navbar-brand">
                        <Link to="/">
                            <span>Loja</span>
                            <span>Virtual</span>
                        </Link>
                    </div>
                    <Popover placement="bottomRight" trigger="click" content={<Cart />} >
                        <Button icon="shopping-cart" shape="circle" className="btn-clean" style={{ margin: '0 20px' }} />
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