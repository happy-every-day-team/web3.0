import base from './base'
import axios from '../util/axios'
export default {
    getListByUserId(params) {
        return new Promise((resolve, reject) => {
            axios.get(`${base.getArticleByUserId + "/" + params}`).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    },
    getTag() {
        return new Promise((resolve, reject) => {
            axios.get(`${base.getTechnology}`).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    }
}