<!--
 * @Author: tuzki zhang
 * @Date: 2022-02-12 16:50:09
 * @LastEditors: tuzki zhang
 * @LastEditTime: 2022-02-12 17:52:36
 * @Description: file content
-->
<template>
  <p>{{ this.mypage.msg }}</p>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  inject: ["mypage"],
  created() {
    // this.msg = this.mypage.msg;
  },
  props: {
    msg: {
      type: String,
      required: true,
      default: "default msg",
      validator(value) {
        // 这个值必须与下列字符串中的其中一个相匹配
        return ["default msg"].includes(value);
      },
    },
  },
};
</script>
