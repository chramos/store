import React, { Component } from 'react';

const style = {
    radioPad: {
        backgroundColor: 'white',
        border: '2px solid #eee',
        marginRight: 8,
        padding: '12px',
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: 22
    },
    active: {
        border: '2px solid #29A634',
    }
}
class ProductSizes extends Component {
    constructor(props) {
      super(props)

      this.state = {
        selected: ''
      }
    }
    render() {
        const options = this.props.value.map((loan, key) => {
        const isCurrent = this.state.selected === loan

        return (
          
          <div  key={key} >
            <label style={ isCurrent ? {  ...style.radioPad, ...style.active } : style.radioPad } >
            <input type="radio" name="sizes" style={{ display: 'none' }} id={loan} value={loan} onChange={this.handleRadio.bind(this)} />
            {loan}
            </label>
          </div>
        )
      })

      return (
          <div style={{display: 'flex'}}>{options}</div>
      )
    }

    onSelected(e) {
        this.props.onSelected(e.target.value)
    }

   

    handleRadio(e) {
      this.setState({ selected: e.target.value })
      this.props.onSelected(e.target.value)
    }
  }

export default ProductSizes;