import React, { Component } from 'react';

import './Filters.css';

import Price from './Price';
import Category from './Category';

class Filters extends Component {
    render() {
        return (
            <div>
                <Price />
                <Category />
            </div>
        );
    }
}

export default Filters;