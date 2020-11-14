import {request} from "./request";

export function getdetailFormdata() {
  return request({
    url: '/check/detailList  ',
    method: "post",
    // responseType: 'blob',

  })
}
export function getdetailFile() {
  return request({
    url: '/check/detailFile  ',
    method: "post",
    // responseType: 'blob',

  })
}






