import React, { Component } from 'react';

class QueryResults extends Component {

    from() {

        if(this.props.data.page === this.props.data.pages) {
            return this.props.data.total;
        } else {
            return this.props.data.limit * this.props.data.page;
        }
    }
    to() {
        if(this.props.data.page === 1) {
            return 1;
        } else {

            
            return ((this.props.data.limit * this.props.data.page) - this.props.data.limit) + 1;
            
        }
    }
    render() {
        if(Object.keys(this.props.data).length === 0) {
            return (<span className="quantity-results"></span>);
        }
        return (
            <span className="quantity-results">({this.to()} - {this.from()} de {this.props.data.total} resultados)</span>
        );
    }
}

export default QueryResults;