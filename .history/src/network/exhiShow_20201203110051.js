import {request} from "./request.js"

export function getmMetInfo(){
	return request({
		url: '/message/meetInfo'
	})
}
