import axios from 'axios';

const API_URL = 'http://localhost:8081/api/auth/';
// const API_URL = 'https://shop-le2d.onrender.com/api/user/';

class AuthService {
 login(user) {
  console.log(user);
  return axios
    .post(API_URL + 'login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      if (response.data.token) {
        // تخزين التوكن والمستخدم
        localStorage.setItem('user', JSON.stringify({
          token: response.data.token,
          user: response.data.user
        }));
      }

      console.log("Login response:", response.data);
      return response.data;
    });
}


  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    console.log(user.name)
    return axios.post(API_URL + 'register', {
      name: user.name ,
      email: user.email,
      password: user.password , 
      phone  :  user.phone
    });
  }
}

export default new AuthService();