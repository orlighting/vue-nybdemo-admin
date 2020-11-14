import {request} from "./request";

export function getdetailFormdata() {
  return request({
    url: '/check/detailList  ',
    method: "post",
    // responseType: 'blob',

  })
}
export function getdetailFile(params) {
  return request({
    url: '/check/detailFile  ',
    method: "get",
    params: params,
    responseType: 'blob',

  })
}






