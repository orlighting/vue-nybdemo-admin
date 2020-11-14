import {request} from "./request";

export function getdetailFormdata() {
  return request({
    url: '/check/detailList  ',
    method: "post",
    // responseType: 'blob',

  })
}
export function getdetailFile(fileId) {
  return request({
    url: '/check/detailFile',
    method: "get",
    esponseType:'blob',
    data : {'fileId' : fileId}


  })
}






