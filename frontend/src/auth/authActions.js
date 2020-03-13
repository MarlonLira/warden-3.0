import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import consts from '../consts';

function submit(values, url) {
  console.log(values);
  return new Promise((resolve, reject) => {
    axios.post(url, values)
      .then(resp => {
        console.log(resp);
        toastr.message(resp.data.message);
        resolve([
          {
            type: 'USER_FETCHED',
            payload: resp.data.result
          }
        ])
      })
      .catch(e => {
        toastr.error('error', e);
      })
  })
}

export const signin = values => submit(values, `${consts.OAPI_URL}/signin`);
export const signup = values => submit(values, `${consts.OAPI_URL}/signup`);
export const logout = () => ({ type: 'TOKEN_VALIDATED', payload: false });

export const validateToken = token => {
  return new Promise((resolve, reject) => {
    if (token) {
      axios.post(`${consts.OAPI_URL}/tokenValidate`, { token })
        .then(resp => {
          resolve([
            {
              type: 'TOKEN_VALIDATED',
              payload: resp.data.valid
            }
          ]);
        })
        .catch(e => {
          resolve([
            {
              type: 'TOKEN_VALIDATED',
              payload
            }
          ])
        })
    } else {
      resolve([
        {
          type: 'TOKEN_VALIDATED',
          payload
        }
      ]);
    }
  })
};