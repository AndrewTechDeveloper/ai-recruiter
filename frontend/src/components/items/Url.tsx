export const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : window.location.origin + '/api';
export const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : window.location.origin + '/api';
