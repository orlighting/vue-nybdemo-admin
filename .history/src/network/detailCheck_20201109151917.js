import {request} from "./request";

export function getdetailFormdata(params = {}) {
  return request({
    url: '/check/detailList  ',
    method: 'post',
    data: params,
    // responseType: 'blob'//请求头加上这句

  })
}







