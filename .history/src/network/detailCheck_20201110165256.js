import {request} from "./request";

export function getdetailFormdata() {
  return request({
    url: '/check/detailList  ',
    method: "post",
    // responseType: 'blob',

  })
}
export function getdetailFile(id) {
  return request({
    url: '/check/detailFile',
    method: "get",
    esponseType:'blob',
    fileId : this.detailForm.preExpoFileId


  })
}






