import axios from 'axios'
import { PostType } from '../constants/raw-type'
import { camelize } from '../utils/camel'

const api = axios.create({
  baseURL: 'https://public-api.wordpress.com/rest/v1.1/sites',
  transformResponse: [
    data => {
      const newData = JSON.parse(data)
      Object.keys(newData).map(key => {
        if (PostType[key] === 'array') {
          if (!Array.isArray(newData[key])) {
            if (typeof newData[key] === 'string') {
              newData[key] = [newData[key]]
            }
            if (typeof newData[key] === 'boolean') {
              newData[key] = []
            }
            if (typeof newData[key] === 'object') {
              newData[key] = Object.keys(newData[key]).map(i => newData[key][i])
            }
          }
        } else {
          if (!(typeof newData[key] === PostType[key])) {
            if (PostType[key] === 'string') {
              newData[key] = newData[key] + ''
            }
            if (PostType[key] === 'boolean') {
              newData[key] = false
            }
            if (PostType[key] === 'object') {
              newData[key] = { [key]: newData[key] }
            }
          }
        }
      })
      return camelize(newData)
    },
  ],
})

export const getPostById = (site, ID, slug) =>
  api.get(`/${site}/posts/${ID ? ID : 'slug:' + slug}`)
