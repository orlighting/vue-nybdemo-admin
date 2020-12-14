import {request} from "./request";

export function getUserId(meetAddr) {
  return request({
    url: '/check/detailList  ',
    method: "post",
    // responseType: 'blob',
    data:{
        meetAddr:meetAddr

    }

  })
}