import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList } from './productActions';

class ProductList extends Component {

  componentWillMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map(pd => (
      <tr key={pd.id}>
        <td>{pd.name}</td>
        <td>{pd.amount}</td>
        <td>{pd.date}</td>
        <td>{pd.validity}</td>
        <td>{pd.obs}</td>
      </tr>
    ))
  }
  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Data</th>
              <th>Validade</th>
              <th>Obs.</th>
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

const mapStateToProps = state => ({ list: state.product.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);