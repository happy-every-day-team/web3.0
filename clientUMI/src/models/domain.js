
// export default {
//     namespace: 'domain',
//     state: [],
//     reducers: {
//         save(state, { payload }) {
//             return {
//                 ...state,
//                 ...payload
//             }
//         }
//     },
//     effects: {
//         *getDomain({ payload }, { put, call }) {
            
//             yield put({
//                 type: 'save',
//                 payload:{
//                     state:response.data
//                 }
//             })
//         }
//     },
//     subscriptions: {}

// }