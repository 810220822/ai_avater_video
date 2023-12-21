import axios from 'axios';


export const backendURL = 'http://localhost:5000/';

export function fetchData() {
  return axios.get(backendURL)
    .then(res => res.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export function delayedString(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
}