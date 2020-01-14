import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSummary } from '../dashboard/dashboardActions';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

class Dashboard extends Component {
  componentWillMount(){
    console.log(this.props.getSummary());
  }
  render() {
    const{credit, debit} = this.props.summary;
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 1.0' />
        <Content>
          <Row>
            <ValueBox
              cols='12 4'
              color='green'
              icon='bank'
              value={`R$ ${credit}`}
              text='Total de Créditos'
            />
            <ValueBox
              cols='12 4'
              color='red'
              icon='credit-card'
              value={`R$ ${debit}`}
              text='Total de Débitos'
            />
            <ValueBox
              cols='12 4'
              color='blue'
              icon='money'
              value='R$ 30'
              text='Valor Consolidado'
            />
          </Row>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = state => ({summary: state.dashboard.summary});
//espalhar pros reducers
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);