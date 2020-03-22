import base from './base'
import axios from '../util/axios'
export default {
    getListByUserId(params) {
        return new Promise((resolve, reject) => {
            axios.get(`${base.getResourceByUserId + "/" + params}`).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    },
    getList() {
        return new Promise((resolve, reject) => {
            axios.get(`${base.getResource}`).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    },
    getTag() {
        return new Promise((resolve, reject) => {
            axios.get(`${base.getResourceType}`).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    }
}