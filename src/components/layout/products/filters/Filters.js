import React, { Component } from 'react';

import './Filters.css';

import Price from './Price';
import Category from './Category';
import Size from './Size';
import Gender from './Gender';

class Filters extends Component {
    render() {
        return (
            <div>
                <Price onPriceChange={this.props.onPriceChange} />
                <Gender match={this.props.match} onGenderChange={this.props.onGenderChange}/>
                <Category match={this.props.match} onCategoryChange={this.props.onCategoryChange}/>
                <Size />
            </div>
        );
    }
}

export default Filters;