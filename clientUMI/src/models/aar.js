import articleAPI from '../api/article'
import achievementAPI from '../api/achievement'
import resourceAPI from '../api/resource'
import topicAPI from '../api/topic'  //课题占位
import loveAPI from '../api/love'  //收藏占位
import {filterTagNum} from '../util/filter'
export default {
    namespace: 'aar',
    state: {
        list: [],
        oldList: [],
        tags: [],
        loading: true
    },
    reducers: {
        save(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        },
        filterByTag(state, { payload: { tag } }) {
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
        *getArticleAndTag({ payload: params }, { call, put }) {
            const classify = [topicAPI, articleAPI, achievementAPI, resourceAPI, loveAPI]
            const tag = ['Technology', 'Technology', 'AchievementType', 'ResourceType']
            const link = ['id', 'id', 'achievementlink', 'link']
            let list
            if (params.id === '' || params.id === undefined) {
                list = yield call(classify[params.index].getList)
            } else {
                list = yield call(classify[params.index].getListByUserId, params.id)
            }
            let tags = yield call(classify[params.index].getTag)
            tags = filterTagNum(tags,list)
            list = list.map(item => {
                return {
                    ...item,
                    tag: item[tag[params.index]],
                    link: ((params.index === 1) ? '/article/' : '') + item[link[params.index]]
                }
            })
            yield put({
                type: 'save',
                payload: {
                    list,
                    tags,
                    oldList: list,
                    loading: false
                }
            })
        }
    },
    subscriptions: {}
}