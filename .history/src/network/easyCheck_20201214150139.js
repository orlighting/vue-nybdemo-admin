import {request} from "./request.js"

export function getEasyFormdata(){
	return request({
		url: '/check/easylist',
		methods:"post"
	})
}
export function getEasyFile(fileId) {
	return request({
	  url: '/check/detailFile',
	  method: "post",
	  responseType:'blob',
	  data:{
		fileId : fileId,
  
	  }
	  
  
	})
  }