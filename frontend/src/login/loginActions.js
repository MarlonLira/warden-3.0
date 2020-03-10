import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';
import { ReturnIfValid, GetDateNow } from '../common/functions/properties';
import Consts from '../consts';

const BASE_URL = Consts.API_URL;
const CURRENT_DATE = GetDateNow().FullDate;
const INITIAL_VALUES = {};

export function AccountValidation(values) {
  console.log('tentando logar...')
  console.log(values)
  return submit(values, 'get');
}

function submit2(values, method) {
  //temporario/teste
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}

function submit(values, method) {
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  return new Promise((resolve, reject) => {
    const id = (method == 'delete' || method == 'get') ? ReturnIfValid(values.id, 0) : '';
    axios[method](`${BASE_URL}/user/${id}`, values)
      .then(request => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.');
        console.log(request);
        resolve({
          type: 'LOGIN_FETCHED',
          payload: request
        });
      })
      .catch(error => {
        toastr.warning(error.message);
        resolve({
          type: 'ERROR'
        })
      })
  })
}

export function init() {
  return new Promise((resolve, reject) => {
    resolve([
      initialize('productForm', INITIAL_VALUES)
    ]);
  })
}