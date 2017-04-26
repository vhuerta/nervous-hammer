const isDev = process.env.NODE_ENV !== 'production';
// const endpoint = isDev
//   ? 'http://localhost:3001'
//   : 'https://khe-be-api.herokuapp.com';

const endpoint = 'https://khe-be-api.herokuapp.com';

export default {
  api: {
    endpoint,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
  },
};
