import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList } from './billingCycleActions';

class BillingCycleList extends Component {

  componentWillMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map(bc => (
      <tr key={bc.id}>
        <td>{bc.credit}</td>
        <td>{bc.debit}</td>
        <td>{bc.innerDate.Month}</td>
        <td>{bc.innerDate.Year}</td>
      </tr>
    ))
  }
  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Credito</th>
              <th>Debito</th>
              <th>Mês</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);