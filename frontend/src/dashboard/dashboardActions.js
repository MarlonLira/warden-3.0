import axios from 'axios';
const BASE_URL = 'http://localhost:4001';

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