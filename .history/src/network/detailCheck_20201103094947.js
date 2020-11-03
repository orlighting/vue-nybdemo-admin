import {request} from "./request";

export function getDetailCheck(iid) {
  return request({
    url: '/detailList ',
    params: {
      iid
    }
  })
}







