import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';
const BASE_URL = 'http://localhost:4001';

export function getList() {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/products`)
      .then(request => {
        resolve({
          type: 'PRODUCT_FETCHED',
          payload: request
        });
      });
  });
}

export function create(values) {
  return new Promise((resolve, reject) => {
    axios.post(`${BASE_URL}/product`, values)
      .then(request => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.');
        resolve([
          resetForm('productForm'),
          getList(),
          selectTab('tabList')
        ])
      })
      .catch(error => {
        toastr.warning(error.message);
        resolve({
          type:'ERROR'
        })
      })
  })
}