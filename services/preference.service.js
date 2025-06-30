// PreferenceService.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://prostoreserver.onrender.com/api/preferences'
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
