import axios from 'axios';
import Consts from '../../../consts';

const BASE_URL = Consts.API_URL;

export function getList(list) {
  let result = {};

  result = {
    "value": 1,
    "name" : 'opt 1'
  }
  console.log(result)

  result = list == undefined || list == null ? '' : list;
  return new Promise((resolve, reject) => {
    resolve({
      type: 'SELECT_FETCHED',
      payload: result
    });
  })
}
