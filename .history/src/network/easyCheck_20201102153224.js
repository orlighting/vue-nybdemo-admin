import {request} from "./request.js"

export function geteasyFonrdata(){
	return request({
		url: '/easy'
	})
}
