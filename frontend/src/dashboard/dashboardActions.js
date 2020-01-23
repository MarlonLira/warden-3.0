import axios from 'axios';
import  Consts from '../consts';

const BASE_URL = Consts.API_URL;

export function getSummary() {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/billingCycle/0`)
      .then(request => {
        resolve({
          type: 'BILLING_SUMMARY_FETCHED',
          payload: request
        });
      });
  });
}