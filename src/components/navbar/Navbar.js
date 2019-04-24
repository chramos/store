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
            count: null
        }

        this.showDrawer = this.showDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
    }

    componentDidMount() {

        var cart = (JSON.parse(localStorage.getItem('cart')));

        if(cart != null) {
            const { store } = this.props;
            const len = Object.keys(cart).length;

            store.dispatch({
                type: 'CHANGE_CART',
                payload: len
            });

            this.setState({ count: len })
        }
    }

    componentDidUpdate() {
        console.log('will update');
    }

    closeDrawer() {
        this.setState({ collapse: false });
    }

    showDrawer() {
        this.setState({ collapse: true });
    }

    render() {
        this.props.store.subscribe(() => {
			this.setState({
				count: this.props.store.getState().cartCount
			})
		});
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
                    
                    <Popover placement="bottomRight" trigger="click" content={<Cart count={this.state.count} />} >
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