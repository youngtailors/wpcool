import axios from 'axios'
import dataPost from '../constants/post'

const api = axios.create({
  baseURL: 'https://public-api.wordpress.com/rest/v1.1/sites',
  transformResponse: [
    data => {
      const newData = JSON.parse(data)
      Object.keys(newData).map(item => {
        if (!(typeof newData[item] === dataPost[item])) {
          if (dataPost[item] === 'string') {
            newData[item] = newData[item] + ''
          }
          if (dataPost[item] === 'boolean') {
            newData[item] = false
          }
        }
      })
      return newData
    },
  ],
})

export const getPostById = (site, ID, slug) =>
  api.get(`/${site}/posts/${ID ? ID : 'slug:' + slug}`)
