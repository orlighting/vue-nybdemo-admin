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
                        title: '展会名称',
                        key: 'name',
                        resizable: true,
                        width: 180,
                        
                    },
                    {
                        title: '数据来源',
                        key: 'dataResouce'
                    },
                    {
                        title: '最新一届',
                        key: 'latestCount'
                    },
                    {
                        title: '举办时间',
                        key: 'hostTime'
                    },
                    {
                        title: '举办地点',
                        key: 'hostPlace'
                    },
                    {
                        title: '主办单位',
                        key: 'hostCompany'
                    },
                    {
                        title: '展位数量',
                        key: 'positionNum'
                    },
                    {
                        title: '参展商数量',
                        key: 'displayerNum'
                    },
                    {
                        title: '成交量',
                        key: 'turnover'
                    }
                ],
                data: [

                ]
            }
        },
        created(){
            getmMetInfo().then(res => {
                console.log(res)
                this.data = res.data
            })


  },
        
    }
</script>
