import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8999',
  timeout: 10000
})

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((respnse) => {
      resolve(respnse.data)
    }, err => {
      reject(err)
    })
  })
}

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, params, {
      baseURL: 'http://localhost:8999'
    }).then((respnse) => {
      resolve(respnse.data)
    }, err => {
      reject(err)
    })
  })
}
