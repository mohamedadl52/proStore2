// PreferenceService.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8081/api/preferences'
});

export default {
  submit(data) {
    const stored = JSON.parse(localStorage.getItem('user'));
    const token = stored?.token;

    return API.post('/submit', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};
