import {request} from "./request.js"

export function getEasyFormdata(){
	return request({
		url: '/check/easylist'
	})
}
