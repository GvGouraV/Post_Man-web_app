import {SENT_HISTORY_ACTIVE,DELETE_SAVE_REQEST,DELETE_HISTORY} from "./type"

export const RemHistory = (index) =>({
    type:DELETE_HISTORY,
    payload:{index:index}
 })
 export const RemSaveReq = (index) =>({
     type:DELETE_SAVE_REQEST,
     payload:{index:index}
  })
 // export const PushHistory = (index,val) =>({
   //  type:SENT_HISTORY_ACTIVE,
     //payload:{active:index,json:val,index:index}
  //})
