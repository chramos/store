import React, { Component } from 'react';
import { Select } from 'antd';
import axios from 'axios';

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            value: undefined
        }

        this.renderOptions = this.renderOptions.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
    }

    componentDidMount() {

        axios.get('/categories', {
            params: {
                gender: this.props.match.params.gender,
            }
        }).then((result) => {
           
            this.setState({ categories: result.data });
        });
    }

    renderOptions() {
        if(Object.keys(this.state.categories).length > 0) {
            return(
                this.state.categories.map((category, index) => (
                    <Select.Option value={index} key={index}>{category.name}</ Select.Option>
                ))
            );
        } else {
            return("");
        }
    }

    handleCategory(value) {
        this.setState({ value: value }, () => {
            this.props.onCategoryChange( 
            this.state.categories[value].gender + "/" + 
            this.state.categories[value].name.toLowerCase(), value);
        });
                
    }

    render() {
        return (
            <div className="filters">
                <h4 style={{ fontWeight: 'bold', color: '#ccc'}}>CATEGORIA</h4>
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Selecione uma categoria"
                    optionFilterProp="children"
                    onChange={this.handleCategory}
                    value={this.state.value}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    {this.renderOptions()}

                </Select>
            </div>
        );
    }
}

export default Category;