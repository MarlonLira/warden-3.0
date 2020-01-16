import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSummary } from '../dashboard/dashboardActions';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';
import {ReturnIfValid} from '../common/functions/properties';

class Dashboard extends Component {
  componentWillMount(){
    this.props.getSummary();
  }
  render() {
    const{credit, debit} = this.props.summary;
    const consolidated = (ReturnIfValid(credit, 0) - ReturnIfValid(debit, 0));
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 1.0' />
        <Content>
          <Row>
            <ValueBox
              cols='6 4'
              color='green'
              icon='bank'
              value={`R$ ${credit}`}
              text='Total de Créditos'
            />
            <ValueBox
              cols='6 4'
              color='red'
              icon='credit-card'
              value={`R$ ${debit}`}
              text='Total de Débitos'
            />
            <ValueBox
              cols='6 4'
              color='blue'
              icon='money'
              value= {`R$ ${consolidated}`}
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