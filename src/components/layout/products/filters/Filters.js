import React, { Component } from 'react';

import './Filters.css';

import Price from './Price';
import Category from './Category';
// import Size from './Size';
import Gender from './Gender';

class Filters extends Component {
    render() {
        return (
            <div>
                <Price onPriceChange={this.props.onPriceChange} closeDrawer={this.props.closeDrawer} />
                <Gender match={this.props.match} onGenderChange={this.props.onGenderChange} closeDrawer={this.props.closeDrawer}/>
                <Category match={this.props.match} onCategoryChange={this.props.onCategoryChange} closeDrawer={this.props.closeDrawer}/>
                {/* <Size /> */}
            </div>
        );
    }
}

export default Filters;