<template>
    <div style="margin-bottom: 100px;">
      <div style="margin: 20px 0; font-size: 20px; color: #1E90FF">射击历史</div>
      <div style="border: 1px solid #ccc; padding: 10px; border-radius: 10px; margin: 10px 0" v-for="item in shootHistory" :key="item.id">
        <div style="color: #333; margin: 10px 0; font-size: 20px">平均分：{{ item.averageScore }}</div>
        <div style="color: #666; margin: 10px 0;">
          <span>时间：{{ item.time }}</span>
          <el-button :style="{marginLeft: '500px'}" type="primary" @click="toShootDetail(item.id)">详情</el-button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Shoot",
    data() {
      return {
        shootHistory: [],
        total: 0,
        pageNum: 1,
        pageSize: 10,
        name: "",
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
      }
    },
    created() {
      this.load()
    },
    methods: {
        toShootDetail(id) {
            console.log(111);
        this.$router.push('/front/shootDetail?id=' + id)
      },
      load() {
        this.request.get("/exam/page/front", {
          params: {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            name: this.name,
          }
        }).then(res => {
        //   this.shootHistory = res.data.records
        //   this.total = res.data.total
            this.shootHistory = [
                {
                    id: 1,
                    time: '2022.07.04',
                    averageScore: 9.5,
                    totalScore: 950,
                },
                {
                    id: 2,
                    time: '2022.07.05',
                    averageScore: 9.5,
                    totalScore: 950,
                },
            ]
        })
        this.request.get("/course").then(res => {
          this.courses = res.data
        })
      },
      handleSizeChange(pageSize) {
        console.log(pageSize)
        this.pageSize = pageSize
        this.load()
      },
      handleCurrentChange(pageNum) {
        console.log(pageNum)
        this.pageNum = pageNum
        this.load()
      },
    }
  }
  </script>
  
  <style>
  
  </style>
  