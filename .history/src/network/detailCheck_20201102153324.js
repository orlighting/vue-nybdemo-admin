import {request} from "./request";

export function getDetailCheck(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}







