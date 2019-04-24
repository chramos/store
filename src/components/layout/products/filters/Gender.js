import React, { Component } from 'react';
import { Select } from 'antd';


class Gender extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gender: this.props.match.params.gender
        }

        this.handleGender = this.handleGender.bind(this);
    }

    handleGender(value) {
        this.setState({ gender: value }, () => {
            this.props.onGenderChange(value);
            this.props.closeDrawer();
        });
    }

    render() {
        return (
            <div className="filters">
                <h4 style={{ fontWeight: 'bold', color: '#ccc'}}>GENERO</h4>
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Selecione um genero"
                    optionFilterProp="children"
                    onChange={this.handleGender}
                    value={this.state.gender}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Select.Option value="todos">Todos</ Select.Option>
                    <Select.Option value="masculino">Masculino</ Select.Option>
                    <Select.Option value="feminino">Feminino</ Select.Option>

                </Select>
            </div>
        );
    }
}

export default Gender;