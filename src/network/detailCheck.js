import {request} from "./request";

export function getdetailFormdata(iid) {
  return request({
    url: '/detailList ',
    params: {
      iid
    }
  })
}







