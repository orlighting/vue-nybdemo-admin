import {request} from "./request.js"

export function getEasyFonrdata(){
	return request({
		url: '/easy'
	})
}
