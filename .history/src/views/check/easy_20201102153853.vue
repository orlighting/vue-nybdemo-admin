<template>

</template>

<script>
import { getEasyCheck } from "../../network/easyCheck"
export default {
  name: "easy",
  data(){
    return{
      easyForm: {}

    }
  },
  created(){
    getEasyCheck().then(res => {
      this.easyForm = res
    })

  },

}
</script>

<style scoped>

</style>
