import base from './base'
import axios from '../axios'

const Member = {
    getMemberInfo() {
        return new Promise((resolve, reject) => {
            axios.get(`${base.getMemberInfo}`).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    }
}

export default Member