import resourceAPI from '../api/resource'
import {filterTagNum} from '../util/filter'

export default {
    namespace: 'resource',
    state: {
        list: [],
        oldList: [],
        tags: [],
        hasMore: false,
        loading: false,
    },
    reducers: {
        save(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        },
        filterResourceByTag(state, { payload: { tag } }) {
            if (-1 === tag) {
                return {
                    ...state,
                    list: state.oldList
                }
            }
            let list = []
            state.oldList.map(item => {
                if (item['tag']['id'] === tag) {
                    list.push(item)
                }
            })
            return {
                ...state,
                list
            }
        }
    },
    effects: {
        *getResourceAndTag({ payload: params }, { call, put }) {
            let list = []
            let tags = []
            console.log(params)
            if (!params) {
                list = yield call(resourceAPI.getList)
            } else {
                list = yield call(resourceAPI.getListByUserId, params)
            }
            tags = yield call(resourceAPI.getTag)
            if(list.length === 0||tags.length === 0){
                return;
            }
            tags = filterTagNum(tags,list)
            list = list.map(item => {
                return {
                    ...item,
                    tag: item.ResourceType,
                    link: item.link,
                    avatar:item.UserInfo.avatar,
                    username:item.User.name
                }
            })
            yield put({
                type: 'save',
                payload: {
                    list,
                    tags,
                    oldList: list
                }
            })
        }
    },
    subscriptions: {}
}