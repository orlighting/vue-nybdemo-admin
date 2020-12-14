import {request} from "./request";

export function getUserId(meetAddr) {
  return request({
    url: '/message/getUserId',
    method: "post",
    data:{
        meetAddr:meetAddr
    }

  })
}
export function send(adminId,userId,title,content) {
    return request({
      url: '/message/send',
      method: "post",
      data:{
        adminId:adminId,
        userId:userId,
        title:title,
        content:content
      }
  
    })
  }