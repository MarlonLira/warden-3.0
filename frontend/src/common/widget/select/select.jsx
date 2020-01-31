import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Grid from '../../layout/grid';
import { getList } from './selectActions';

class Select extends Component {

  componentWillMount() {
    this.props.getList();
  }

  renderOptions() {
    const list = this.props.list || [];
    console.log(list);

    var _result = '';
    list.forEach(element => {
      _result += <option value={element.value}>element.name</option>
    });

    return _result;
  }

  render() {
    const { name, cols } = this.props;
    return (
      <Grid cols={cols}>
        <select className="custom-select">
          <option selected>{name}</option>
          {this.renderOptions()}
        </select>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ list: state.select.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Select);