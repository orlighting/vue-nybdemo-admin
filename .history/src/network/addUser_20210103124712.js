import {request} from "./request.js"
export function addUser(name, abbreviation) {
	return request({
	  url: '/manage/addUser',
	  method: "post",
	  data:{
		name : name,
		abbreviation:abbreviation,
  
	  }
  
	})
  }