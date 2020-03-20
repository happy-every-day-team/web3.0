import base from './base'
import axios from '../conf/axios'

const UserInfo = {
    getUserInfo(params) {
        return new Promise((resolve, reject) => {
            axios.get(`${base.getUserInfo}`, params).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    },
    getOtherInfo(params) {
        return new Promise((resolve, reject) => {
            axios.get(`${base.getOtherInfo}`, params).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    }
}

export default UserInfo