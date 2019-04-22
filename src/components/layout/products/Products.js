import React, { Component } from 'react';

import './Products.css';

import ListingHeader from './ListingHeader';

class Products extends Component {
    render() {
        return (
            <div className="page">
                <div className="container">
                    <div className="products">
                        <ListingHeader />
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;