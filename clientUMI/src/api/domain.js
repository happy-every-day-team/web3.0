import base from './base'
import axios from '../conf/axios'

const DoMain = {
    getDoMainInfo(){
        return new Promise((resolve,reject)=>{
            axios.get(`${base.getDomainInfo}`).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err.data)
            })
        })
    }
}
export default DoMain