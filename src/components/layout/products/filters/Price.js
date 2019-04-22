import React, { Component } from 'react';
import { Slider } from 'antd';

class Filters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            min: 30,
            max: 80,
        }

        this.handleMin = this.handleMin.bind(this);
        this.handleMax = this.handleMax.bind(this);
    }

    handleMin(value) {
        this.setState({ min: value[0], max: value[1] })
    }

    handleMax(value) {
        this.setState({ max: value[1] })
    }

    render() {
        return (
            <div class="filters">
                <h4 style={{ fontWeight: 'bold', color: '#ccc'}}>PREÇO</h4>
                <Slider range step={10} min={20} max={200} defaultValue={[30, 80]} onChange={this.handleMin} onAfterChange={this.handleMax} />
                <p style={{ textAlign: 'right', fontWeight: 'bold', color: '#ccc'}}>
                    <span className="price">R${this.state.min}</span> - <span className="price">R$ {this.state.max}</span>
                </p>
            </div>
        );
    }
}

export default Filters;