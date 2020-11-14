<template>
  <akTable :data="tableData">
    <akColumn label="日期" prop="date"></akColumn>
    <akColumn label="姓名" prop="name"></akColumn>
    <akColumn label="省份" prop="province"></akColumn>
    <akColumn label="城市" prop="city"></akColumn>
    <akColumn label="地址" prop="address"></akColumn>
    <akColumn label="邮编" prop="zip"></akColumn>
    <akColumn label="操作">
      <template slot-scope="scope">
        <a href="javascript:;">删除</a>
      </template>
    </akColumn>
  </akTable>
</template>
<script>
  export default {
    name: "Table",
    data() {
      return {
        tableData: [
          {
            date: "2016-05-03",
            name: "1张三",
            province: "广东",
            city: "天河区",
            address: "广东市天河区无名路888号",
            zip: 200330,
            trClass: "trClass" // 特殊参数为当前tr添加指定样式
          },
          {
            date: "2016-05-02",
            name: "2张三",
            province: "广东",
            city: "天河区",
            address: "广东市天河区无名路888号",
            zip: 200331
          },
          {
            date: "2016-05-04",
            name: "3张三",
            province: "广东",
            city: "天河区",
            address: "广东市天河区无名路888号",
            zip: 200332
          },
          {
            date: "2016-05-01",
            name: "4张三",
            province: "广东",
            city: "天河区",
            address: "广东市天河区无名路888号",
            zip: 200333
          },
          {
            date: "2016-05-03",
            name: "5张三",
            province: "广东",
            city: "天河区",
            address: "广东市天河区无名路888号",
            zip: 200334
          },
          {
            date: "2016-05-02",
            name: "6张三",
            province: "广东",
            city: "天河区",
            address: "广东市天河区无名路888号",
            zip: 200335
          },
          {
            date: "2016-05-04",
            name: "7张三",
            province: "广东",
            city: "天河区",
            address: "广东市天河区无名路888号",
            zip: 200336
          },
          {
            date: "2016-05-01",
            name: "8张三",
            province: "广东",
            city: "天河区",
            address: "广东市天河区无名路888号",
            zip: 200337
          }
        ]
      };
    },
    components: {}
  };
</script>