<!--
 * @Author: tuzki zhang
 * @Date: 2022-02-11 17:16:27
 * @LastEditors: tuzki zhang
 * @LastEditTime: 2022-02-12 18:20:36
 * @Description: file content
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div style="display: flex; flex-direction: column">
    <span>Message: {{ msg }}</span>
    <span v-once>这个将不会改变: {{ msg }}</span>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <sapn>today is : {{ date }}</sapn>
    <div v-bind:id="dynamicId"></div>
    <button v-bind:disabled="isButtonDisabled">按钮</button>
    <p v-if="isShow">isShow</p>
    <a v-bind:[attributeName]="url"> link </a>
    <a v-on:[eventName]="doSomething">click </a>
    <a v-bind:title="getTitle()">title </a>
    <div id="computed-basics">
      <p>Has published books:</p>
      <span>{{ publishedBooksMessage }}</span>
    </div>
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </div>

    <div :class="classObject">gadfsdf</div>

    <div v-if="Math.random() > 0.5">Now you see me</div>
    <div v-else>Now you don't</div>

    <ul id="array-with-index">
      <li v-for="item in myObject" :key="item">
        {{ item }}
      </li>
    </ul>

    <input v-model="message" placeholder="edit me" />
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <br />
    <textarea v-model="message" placeholder="add multiple lines"></textarea>

    <div id="v-model-multiple-checkboxes1">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>

    <div id="v-model-radiobutton">
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <br />
      <span>Picked: {{ picked }}</span>
    </div>

    <div id="v-model-select-dynamic" class="demo">
      <select v-model="selected">
        <option v-for="option in options" :value="option.value" :key="option">
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
  </div>

  <HelloWorld msg="HelloWorld" msgbtn="this is btn" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  props: {
    // msg: String,
  },
  created() {
    // `this` 指向 vm 实例
    console.log("data().test property is: " + this.test); // => "count is: 1"

    setInterval(() => {
      this.date = new Date();
    }, 10000);
  },

  methods: {
    doSomething() {
      alert("doSomething");
    },
    getTitle() {
      return new Date().toString();
    },
    getAnswer() {
      this.answer = "Thinking...";
      axios
        .get("https://yesno.wtf/api")
        .then((response) => {
          this.answer = response.data.answer;
        })
        .catch((error) => {
          this.answer = "Error! Could not reach the API. " + error;
        });
    },
  },
  computed: {
    // 计算属性的 getter
    publishedBooksMessage() {
      // `this` 指向 vm 实例
      return this.author.books.length > 0 ? "Yes" : "No";
    },
    mypageMsg() {
      return new Date().toString();
    },
  },
  watch: {
    // 每当 question 发生变化时，该函数将会执行
    // eslint-disable-next-line no-unused-vars
    question1(newQuestion, oldQuestion) {
      console.log(newQuestion);
      if (newQuestion.indexOf("?") > -1) {
        this.getAnswer();
      }
    },
  },
  provide: {
    mypage: {
      msg: ""
    },
  },
  data() {
    return {
      test: "app.vue.test",
      msg: "i am Message",
      rawHtml: "<b>哈哈</b>",
      isButtonDisabled: true,
      date: new Date(),
      isShow: false,
      attributeName: "href",
      url: "http://www.baidu.com",
      eventName: "click",
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
      classObject: {
        active: true,
        "text-danger": true,
      },
      awesome: true,

      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2020-03-22",
      },

      message: "message",
      checkedNames: [],
      picked: "",

      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
span {
}
</style>
