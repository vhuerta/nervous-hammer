import axios from 'axios';
import Storage from './../util/storage_service';
import config from './../config';

export const URL_AUTH_LOGIN = '/auth/login';
export const URL_AUTH_PASSWORD_RECOVERY = '/auth/password_recovery';
export const URL_AUTH_VERIFY_TOKEN = '/auth/verify_token';

const service = {
  init(endpoint, defaultHeaders) {
    this.endpoint = endpoint;
    this.defaultHeaders = defaultHeaders;

    console.log(this.endpoint);
    this.axios = axios.create({
      baseURL: this.endpoint,
      timeout: 3000,
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    return this;
  },

  getToken() {
    return Storage.get('auth.token');
  },

  getUser() {
    return Storage.get('auth.user');
  },

  login(email, password) {
    return this.axios
      .post(URL_AUTH_LOGIN, {
        email,
        password,
      })
      .then(result => result.data)
      .catch(err => {
        let data = err.response && err.response.data && err.response.data.code
          ? err.response.data
          : {
              code: 500,
              message: 'error.server_error',
            };
        return Promise.reject(data);
      });
  },

  passwordRecovery(email) {
    const url = `${this.endpoint}/auth/password_recovery`;

    const options = {
      method: 'POST',
      headers: Object.assign({}, this.defaultHeaders),
      body: JSON.stringify({email}),
    };

    return fetch(url, options).then(response => response.json()).then(json => {
      if (json.code === 201) {
        return Promise.resolve(json);
      } else {
        return Promise.reject(json);
      }
    });
  },

  verifyToken(token) {
    const url = `${this.endpoint}/auth/verify_token`;

    const options = {
      method: 'GET',
      headers: Object.assign({}, this.defaultHeaders, this.getAuthHeader()),
    };
    return fetch(url, options).then(response => response.json()).then(json => {
      if (json.code === 200) {
        if (json.user) {
          Storage.set('auth.user', json.user);
        }
        return Promise.resolve(json);
      }

      return Promise.reject(json);
    });
  },

  isAuthenticated() {
    const token = this.getToken();
    return this.verifyToken(token);
  },

  getAuthHeader() {
    const token = this.getToken();
    return {'X-Auth-Token': token};
  },
};

export default Object.create(service).init(
  config.api.endpoint,
  config.api.headers,
);
