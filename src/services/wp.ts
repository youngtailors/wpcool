import axios from 'axios'

const api = axios.create({
  baseURL: 'https://public-api.wordpress.com/rest/v1.1/sites',
  transformResponse: [data => data],
})

export const getPostById = (site, ID) => api.get(`/${site}/posts/${ID}`)
