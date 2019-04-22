import React, { Component } from 'react';

import './Filters.css';

import Price from './Price';
import Category from './Category';
import Size from './Size';

class Filters extends Component {
    render() {
        return (
            <div>
                <Price />
                <Category />
                <Size />
            </div>
        );
    }
}

export default Filters;