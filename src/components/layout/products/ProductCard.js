import React from 'react';
import { Col, Card  } from 'antd';

import ProductPrice from './ProductPrice';

function ProductCard(props) {
    
    return(
        <Col className="gutter-row product" lg={6} md={8} sm={24} xs={24}>               
            <Card
                onClick={() => {console.log(props.product._id)}}
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src={props.product.images[0]} />}
            >
                <h3 className="product-name">{props.product.name}</h3>
                <ProductPrice product={props.product} />
            </Card>
        </Col>
    );
}

export default ProductCard