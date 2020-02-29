import axios from '../http/axios'
import base from './base'

const Article = {
  getArticle(params) {
    return new Promise((resolve, reject) => {
      axios.post(`${base.getArticle}`, params).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
}

export default Article