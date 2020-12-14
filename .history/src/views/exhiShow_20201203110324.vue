<template>
    <Table :columns="columns" :data="data"></Table>
</template>
<script>
import {getmMetInfo} from "../network/exhiShow"
    export default {
        data () {
            return {
                columns: [
                    {
                        title: 'Name',
                        key: 'name',
                        resizable: true,
                        width: 180,
                        
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data: [

                ]
            }
        },
        created(){
            getmMetInfo().then(res => {
                console.log(res)
                this.data = res
            })


  },
        
    }
</script>
