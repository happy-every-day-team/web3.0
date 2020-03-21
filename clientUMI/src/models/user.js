import userAPI from '../api/userinfo'
export default {
    namespace:'user',
    state:{
        userInfo:{
            domain:{}
            
        },
        other:{}
    },
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
            const userInfo = yield call(userAPI.getUserInfo,params.id)
            const other = yield call(userAPI.getOtherInfo,params.id)
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
                    },
                    other
                }
            })
        }
    },
    subscriptions:{}
}