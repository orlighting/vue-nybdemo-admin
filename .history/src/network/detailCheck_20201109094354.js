import {request} from "./request";

export function getdetailFormdata(iid) {
  return request({
    url: 'check//detailList ',
    params: {
      iid
    }
  })
}







