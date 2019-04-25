import React from 'react';
import { Col, Card  } from 'antd';
import { Link } from 'react-router-dom';
import ProductPrice from './ProductPrice';

function ProductCard(props) {
    let url = "/produtos/" + 
    props.product.gender.toLowerCase() + '/' +
    props.product.category.name.toLowerCase() + '/' +
    props.product.name.split(' ').join('-').toLowerCase() + '/' +
    props.product._id;

    return(
        <Link to={url}>
            <Col className="gutter-row product" xl={6} lg={6} md={6} sm={12} xs={24}>               
                <Card
                    // onClick={() => {console.log(props.product)}}
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img alt="example" src={props.product.images[0]} />}
                >
                    <h3 className="product-name">{props.product.name}</h3>
                    <span className="blue"><ProductPrice style={{ fontSize: 32, }} product={props.product} /></span>
                </Card>
            </Col>
        </Link>
    );
}

export default ProductCard;