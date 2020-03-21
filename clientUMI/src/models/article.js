import articleAPI from '../api/userinfo'
import achievementAPI from '../api/userinfo'
import resourceAPI from '../api/userinfo'
const classify = [articleAPI,achievementAPI,resourceAPI]
export default {
    namespace:'article',
    state:[
        
    ],
    reducers:{
        save(state,{payload}){
            return {
                ...state,
                ...payload
            }
        }
    },
    effects:{
        *getUserInfo({payload:params},{call,put}){
            let list = yield call(classify[params.index].getUserInfo,params.id)
            list = list.map(item=>{
                
            })
            yield put({
                type:'save',
                payload:{
                    userInfo:{
                        id:userInfo.id,
                        name:userInfo.User.name,
                        avatar:userInfo.avatar,
                        phone:userInfo.phone,
                        email:userInfo.email,
                        description:userInfo.description,
                        school:userInfo.School.name,
                        major:userInfo.Major.name,
                        domain:{
                            name:userInfo.Domain.name,
                            id:userInfo.domain
                        },
                        createDate:userInfo.created_at
                    }
                }
            })
        }
    },
    subscriptions:{}
}