import {request} from "./request.js"
export function addUser(name, abbreviation, kind) {
	return request({
	  url: '/manage/addUser',
	  method: "post",
	  data:{
		name : name,
		meetAddr:abbreviation,
    kind:kind,

	  }

	})
  }
