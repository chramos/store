import React, { Component } from 'react';
import { Select } from 'antd';

class Size extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: null
        }
    }

    render() {
        return (
            <div className="filters">
                <h4 style={{ fontWeight: 'bold', color: '#ccc'}}>TAMANHO</h4>
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Selecione um tamanho"
                    optionFilterProp="children"
                    onChange={() => {}}
                    onFocus={() => {}}
                    onBlur={() => {}}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Select.Option value="0">P</ Select.Option>
                    <Select.Option value="1">M</Select.Option>
                    <Select.Option value="2">G</Select.Option>
                    <Select.Option value="3">GG</Select.Option>
                </Select>
            </div>
        );
    }
}

export default Size;