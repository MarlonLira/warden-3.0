import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import consts from '../consts';

function submit(values, url) {
  console.log(values);
  return new Promise((resolve, reject) => {
    axios.post(url, values)
      .then(resp => {
        console.log(resp);
        toastr.message(resp)
        resolve([
          { type: 'USER_FETCHED', payload: resp }
        ])
      })
      .catch(e => {
        console.log(e);
        toastr.error('error', e);
      })
  })
}

export const signin = values => submit(values, `${consts.OAPI_URL}/signin`);
export const signup = values => submit(values, `${consts.OAPI_URL}/signup`);
export const logout = () => ({ type: 'TOKEN_VALIDATED', payload: false });

export const validateToken = token => dispatch => {
  if (token) {
    axios.post(`${consts.OAPI_URL}/validateToken`, { token })
      .then(resp => {
        dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid });
      })
      .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload }));
  } else {
    dispatch({ type: 'TOKEN_VALIDATED', payload });
  };
};