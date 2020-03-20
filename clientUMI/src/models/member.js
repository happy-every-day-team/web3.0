import memberAPI from '../api/member'
import domainAPI from '../api/domain'
import {filterDomainNum,filterGrade,filterUserByGrade} from '../conf/filter'
export default {
    namespace: 'member',
    state: {
        grade: [],
        domain: [],
        member: {},
        oldmember:{}
    },
   
    reducers: {
        updata(state, { payload: member }) {
            return state.map(item => {
                if (state.id === member.id) {
                    return { ...item, ...member }
                } else {
                    return item
                }
            })
        },
        save(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        },
        filterUser(state,{domainId}) {
            let user = []
            if (domainId === 0) {
                user = state.oldmember
            } else {
                state.oldmember.map(item => {
                    if (item.domain === domainId || item.domain === 4) {
                        user.push(item)
                    }
                })
            }
    
            return{
                ...state,
                member:filterUserByGrade(user),
                grade:filterGrade(user)
            }
    
        }
    },
    effects: {
        *getMembers({ payload }, { call, put }) {
            let member = yield call(memberAPI.getMemberInfo)
            let domain = yield call(domainAPI.getDoMainInfo)
            domain = filterDomainNum(domain.data, member.data)
            const grade = filterGrade(member.data)
            const oldmember = member.data
            member = filterUserByGrade(member.data)
            yield put({
                type: 'save',
                payload: {
                        grade,
                        domain,
                        member,
                        oldmember,
                }
            })
        }
    },
    subscriptions: {

    }
}
