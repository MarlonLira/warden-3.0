import React, { Component } from 'react';
import Grid from '../layout/grid';
import If from '../operator/if';

class InputAndLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ val: event.target.val });
  }

  render() {
    const { hide, cols, name, label, placeholder, readOnly, type, maxLength, required, pattern } = props;
    console.log(props);
    return (
      <If test={!hide}>
        <Grid cols={cols}>
          <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input {...input}
              className='form-control'
              placeholder={placeholder}
              readOnly={readOnly}
              type={type}
              maxLength={maxLength}
              required={required}
              pattern={pattern}
              value={this.state.val}
              onChange={this.handleChange}
            />
          </div>
        </Grid>
      </If>
    );
  }
}

export default InputAndLabel;