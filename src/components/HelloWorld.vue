<template>
  <div class="home">
    <div class="left">
      <el-input v-model="inputNumber" placeholder="需要的数量:3000"></el-input>
      <h3>日期区间</h3>
      <el-date-picker
        v-model="dataValue"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
      <h3>时间占比</h3>
      <label>
        <el-input v-model="scale1" placeholder="0时~6时的占比（单位%）"></el-input>
      </label>
      <label>
        <el-input v-model="scale2" placeholder="6时~12时的占比（单位%）"></el-input>
      </label>
      <label>
        <el-input v-model="scale3" placeholder="12时~18时的占比（单位%）"></el-input>
      </label>
      <label>
        <el-input v-model="scale4" placeholder="18时~24时的占比（单位%）"></el-input>
      </label>
      <el-button type="success" @click="getTimeList">生成随机时间段</el-button>
    </div>
    <div class="right">
      <ul v-for="(item,index) in list" :key="index">
        <li v-for="time in item" :key="time">{{time}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      thatTime: 0,
      inputNumber: "",
      dataValue: "",
      scale1: "10",
      scale2: "20",
      scale3: "30",
      scale4: "40",
      list: []
    };
  },
  methods: {
    getTimeList() {
      this.list = [];
      // 获取几天
      let date = Date.parse(this.dataValue[1]) - Date.parse(this.dataValue[0]);
      let day = date / 1000 / 60 / 60 / 24 + 1;

      // 划分每天的数量
      let dayNum = this.inputNumber / day;

      this.thatTime = Date.parse(this.dataValue[0]);

      for (let index = 0; index < day; index++) {
        this.getDateFun(dayNum, index);
      }
    },
    // 获取日期
    getDateFun(dayNum, index) {
      let arr = [];
      for (let i = 0; i < dayNum; i++) {
        let endMe = 0;
        let me = 1000 * 60 * 60;
        if (i <= (Number(this.scale1) / 100) * dayNum) {
          // 0~6
          me *= 6;
        } else if (
          i > (Number(this.scale1) / 100) * dayNum &&
          i <= ((Number(this.scale2) + Number(this.scale1)) / 100) * dayNum
        ) {
          // 6~12
          endMe = 1000 * 60 * 60 * 6;
          me *= 12;
        } else if (
          i > ((Number(this.scale2) + Number(this.scale1)) / 100) * dayNum &&
          i <=
            ((Number(this.scale2) + Number(this.scale1) + Number(this.scale3)) /
              100) *
              dayNum
        ) {
          // 12~18
          endMe = 1000 * 60 * 60 * 12;
          me *= 18;
        } else if (
          i >
            ((Number(this.scale2) + Number(this.scale1) + Number(this.scale3)) /
              100) *
              dayNum &&
          i <= dayNum
        ) {
          // 18~24
          endMe = 1000 * 60 * 60 * 18;
          me *= 24;
        }

        // 插入
        var date = new Date(this.randomNum(endMe, me) + this.thatTime);
        var Y = date.getFullYear() + "-";
        var M =
          (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
        var D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        var h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var m =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var s =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        arr.push(Y + M + D + " " + h + ":" + m + ":" + s);
      }
      console.log(arr);

      this.list.push(arr.sort());
      console.log(this.list);

      this.thatTime += 86400000;
    },
    // 生成随机数
    randomNum(lowerValue, upperValue) {
      return Math.floor(
        Math.random() * (upperValue - lowerValue + 1) + lowerValue
      );
      // switch (arguments.length) {
      //   case 1:
      //     return parseInt(Math.random() * minNum + 1, 10);
      //     break;
      //   case 2:
      //     return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      //     break;
      //   default:
      //     return 0;
      //     break;
      // }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.left {
  flex-shrink: 0;
  width: 350px;
  padding: 30px;
}
.right {
  width: 100%;
  margin-left: 20px;
  height: 100vh;
  overflow: auto;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  background: #08f5e470;
  font-size: 12px;
  line-height: 30px;
}
.el-input {
  margin-bottom: 10px;
}
button {
  width: 100%;
  margin-top: 50px;
}
ul {
  background: #f5f5f5;
}
</style>
