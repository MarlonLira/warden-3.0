import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList, showUpdate, showDelete } from './billingCycleActions';

class BillingCycleList extends Component {

  componentWillMount() {
    this.props.getList();
    $("#showUpdate").on("click", function () {
      alert("Clique");
    });
  }
  componentDidMount() {
    
  }

  teste() {
    $('#myTable').DataTable({
      ajax: {
        url: 'http://localhost:4001/billingCycles',
        dataSrc: ''
      },
      columns: [
        { data: 'client.name' },
        { data: 'credit' },
        { data: 'debit' },
        { data: 'innerDate.Month' },
        { data: 'innerDate.Year' },
        {
          data: null, render: function () {
            return (`<button id='showUpdate' class='btn btn-warning' onClick>` +
              "<i class='fa fa-paint-brush'></i>" +
              "</button>" +
              `<button class='btn btn-danger' onClick={${() => this.props.showDelete(bc)}}>` +
              "<i class='fa fa-trash'></i>" +
              "</button>");
          }
        }
      ]
    });
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map(bc => (
      <tr key={bc.id}>
        <td>{bc.client.name}</td>
        <td>{bc.credit}</td>
        <td>{bc.debit}</td>
        <td>{bc.innerDate.Month}</td>
        <td>{bc.innerDate.Year}</td>
        <td className='table-actions'>
          <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
            <i className='fa fa-paint-brush'></i>
          </button>
          <button className='btn btn-danger' onClick={() => this.props.showDelete(bc)}>
            <i className='fa fa-trash'></i>
          </button>
        </td>
      </tr>
    ))
  }
  render() {
    return (
      <div>
        <table id='myTable' className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Credito</th>
              <th>Debito</th>
              <th>Mês</th>
              <th>Ano</th>
              <th>Ações</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);