//const initialState = {
// players:[
//    {name:"jack",score:20},
//{name:"Steve",score:25},
//   {name:"Martha",score:22},
//  {name:"Bob",score:26},
//{name:"Gourav",score:30}
//  ]
//}
import { SEND_REQUEST_HISTORY, SAVE_REQUEST, SENT_HISTORY_ACTIVE, DELETE_SAVE_REQEST, DELETE_HISTORY } from "../actions/type"
const initialState = {
    historyArr: [
        { status: "GET", sendVal: "/weather/cityName/noida" },
        { status: "GET", sendVal: "www.google.com" },
        { status: "GET", sendVal: "https://quiet-springs-47127.herokuapp.com/productServer/myserver/customers" }],
    saveRequest: [],
    histVal: { active: -1 }
}
const reducer = (state = initialState, action) => {
    console.log(state)
    const historyArr = state.historyArr
    const saveRequest = state.saveRequest
    let histVal = state.histVal
    switch (action.type) {
        case SEND_REQUEST_HISTORY:
            historyArr.unshift(action.payload)
            const historyArr1 = [...historyArr]
            return { historyArr: historyArr1, saveRequest: saveRequest, histVal: histVal };
        case SAVE_REQUEST:
            const saveRequest1 = [...saveRequest, action.payload]
            return { saveRequest: saveRequest1, historyArr: historyArr, histVal: histVal };
        case DELETE_HISTORY:
            historyArr.splice(action.payload.index, 1)
            return { historyArr: [...historyArr], saveRequest: saveRequest, histVal: histVal };
        case DELETE_SAVE_REQEST:
            saveRequest.splice(action.payload.index, 1)
            return { saveRequest: saveRequest, historyArr: historyArr, histVal: histVal };
        case SENT_HISTORY_ACTIVE:
            let histVal1 = { active: action.payload.active, json: action.payload.json, index: action.payload.index }
            console.log(histVal1, "hy")
            const histVal2 = { ...histVal1 }
            return { saveRequest: saveRequest, historyArr: historyArr, histVal: histVal2 };
        default:
            const histArr1 = [...historyArr]
            return { saveRequest: saveRequest, historyArr: histArr1, histVal: histVal };
    }

    return state

}

export default reducer;