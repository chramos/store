import React, { Component } from 'react';
import { Row, Col, Pagination } from 'antd';

class ProductPagination extends Component {
    constructor(props) {
        super(props);

        this.handlePagination = this.handlePagination.bind(this);

    }
    
    handlePagination(page) {
        this.props.handlePagination(page);
    }
    
    render() {
        if(this.props.isLoading) {
            return("");
        }

        if (Array.isArray(this.props.data.docs) && this.props.data.docs.length <= 0) {
            return("");
        }
        return (
            <Row gutter={12}>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <div style={{ display: 'flex', justifyContent:"center" }}>
                        <Pagination
                            current={this.props.current}
                            defaultCurrent={1} 
                            total={this.props.data.total} 
                            pageSize={this.props.data.limit}
                            onChange={this.handlePagination}
                        ></Pagination>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default ProductPagination;