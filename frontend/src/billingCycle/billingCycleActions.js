import axios from 'axios';
const BASE_URL = 'http://localhost:4001';

export function getList(){
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/billingCycles`)
      .then(request => {
        resolve({
          type: 'BILLING_CYCLES_FETCHED',
          payload: request
        });
      });
  });
}