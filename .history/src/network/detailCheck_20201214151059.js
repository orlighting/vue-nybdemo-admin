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
    method: "post",
    responseType:'blob',
    data:{
      fileId : fileId,

    }

  })
}

export function checkPass(id,adminId,checkState) {
  return request({
    url: '/check/detailList  ',
    method: "post",
    data:{
      id : id,
      adminId:adminId,
      checkState:checkState


    }


  })
}




