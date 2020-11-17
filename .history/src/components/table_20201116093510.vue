<template>
<div>
    <Table :columns="columns1" :data="data1"  :nextPath="nextPath" @on-row-click="check"></Table>
    </div>
</template>
<script>
    export default {
        name: 'beaTable',
        props:{
            data:{
                type:Array,
                default(){
                    return []
                }
            },
            nextPath:{
                type:String,
                default(){
                    return '/'
                }
            },

        },
        data () {
            return {
                columns1: [
                    {
                        title: '展会ID',
                        key: 'id'
                    },
                    {
                        title: '展会名称',
                        key: 'name'
                    },
                    {
                        title: '展会举办方',
                        key: 'hostComp'
                    },
                    {
                        title: '审核状态',
                        key: 'checkState',
                        className: 'demo-table-info-column'
                    }
                ],
                data1: [
                    {id:'1111',
                    name:'weqe',
                    checkState: '审核中'
                    }
                ]
            }
        },
        methods:{
        check(data){
            // console.log(this.nextPath)
         this.$router.push({
           path: this.nextPath,
           query:{
             item: data
         }})
            }
        }
        
    }
</script>

<style>
.ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
</style>