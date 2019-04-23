import React, { Component } from 'react';

import { Row, Col, Breadcrumb, Icon, Divider } from 'antd';
import { Link } from 'react-router-dom';

class ProductHeader extends Component {

    renderBreadcrumb = () => {
        let items = [];
        let url = '/produtos';

        Object.entries(this.props.match.params).forEach(([key, value], index) => {
            if(key !== 'id' && key !== 'product') {
                url += '/' + value;

                items.push(<Breadcrumb.Item key={index} ><Link to={url}>{this.capitalize(value)}</Link></Breadcrumb.Item>);
            }            
        });

        return items;
    }
    
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <Row>
                <Col>
                    <Breadcrumb >
                        <Breadcrumb.Item><Link to="/"><Icon type="home" /></Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/produtos">Produtos</Link></Breadcrumb.Item>
                        { this.renderBreadcrumb() }
                    </Breadcrumb>
                </Col>
                <Divider />
                <Col className="mobile">
                    <div className="flex justify-center grow">
                        <h1>{this.props.product.name}</h1>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default ProductHeader;