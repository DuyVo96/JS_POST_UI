import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    // Attach token to request if exits
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      config.headers.Authorization = `Bear ${accessToken}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log('axiosClient - response error', error.response);

    if (!error.response) throw new Error('Network error. Please try again later.');

    // redirect to login if not login
    // if (error.response.status === 401) {
    //   window.location.assign('/login.html');
    // return;
    // }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // Resolve all common requests

    return Promise.reject(error);
    // throw new Error(error);
  }
);

export default axiosClient;

axios;
