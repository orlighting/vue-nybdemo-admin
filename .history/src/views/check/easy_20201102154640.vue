<template>
<div class="easyCkeck">
  <table border="1px">
    <colgroup span="6" width="120"></colgroup>
    <colgroup span="1" width="200"></colgroup>
    <tr height="50px" align="center">
				<th colspan="7">个人简历</th>
		</tr>
  </table>
</div>

</template>

<script>
import { getEasyFormdata } from "../../network/easyCheck"
export default {
  name: "easy",
  data(){
    return{
      easyForm: {}

    }
  },
  created(){
    getEasyFormdata().then(res => {
      this.easyForm = res
    })

  },

}
</script>

<style scoped>

</style>
