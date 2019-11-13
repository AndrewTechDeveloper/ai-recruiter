export const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : window.location.origin + '/api'
export const api_url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : window.location.origin + '/api'
export const s3_url = 'https://s3-ap-northeast-1.amazonaws.com/konpeki.site'

