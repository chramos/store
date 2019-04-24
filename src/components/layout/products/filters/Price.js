import React, { Component } from 'react';
import { Slider } from 'antd';

class Filters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            min: 30,
            max: 200,
        }

        this.handleMin = this.handleMin.bind(this);
        this.afterChange = this.afterChange.bind(this);
    }

    handleMin(value) {
        this.setState({ min: value[0], max: value[1] })
    }

    afterChange(value) {
        this.setState({ min: value[0], max: value[1] })
        this.props.onPriceChange(value);
    }

    render() {
        return (
            <div className="filters">
                <h4 style={{ fontWeight: 'bold', color: '#ccc'}}>PREÇO</h4>
                <Slider range step={10} min={20} max={200} defaultValue={[30, 200]} onChange={this.handleMin} onAfterChange={this.afterChange} />
                <p style={{ textAlign: 'right', fontWeight: 'bold', color: '#ccc'}}>
                    <span className="filter-price">R${this.state.min}</span> - <span className="filter-price">R$ {this.state.max}</span>
                </p>
            </div>
        );
    }
}

export default Filters;