import {SENT_HISTORY_ACTIVE,SEND_REQUEST_HISTORY,SAVE_REQUEST} from "./type"
export const sellHistAction = (status, sendVal) => ({
    type: SEND_REQUEST_HISTORY,
    payload: { status: status, sendVal: sendVal }
})
export const sellSaveAction = (status, sendVal) => ({
    type: SAVE_REQUEST,
    payload: { status: status, sendVal: sendVal }
})
export const PushHistory = (index,val,ind) =>({
    type:SENT_HISTORY_ACTIVE,
    payload:{active:index,json:val,index:ind}
 })