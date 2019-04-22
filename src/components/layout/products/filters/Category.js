import React, { Component } from 'react';
import { Select } from 'antd';

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: null
        }
    }

    render() {
        return (
            <div>
                <h4 style={{ fontWeight: 'bold', color: '#ccc'}}>CATEGORIA</h4>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Selecione uma categoria"
                    optionFilterProp="children"
                    onChange={() => {}}
                    onFocus={() => {}}
                    onBlur={() => {}}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Select.Option value="0">Camisetas</ Select.Option>
                    <Select.Option value="1">Camisas</Select.Option>
                    <Select.Option value="2">Polo</Select.Option>
                </Select>
            </div>
        );
    }
}

export default Category;