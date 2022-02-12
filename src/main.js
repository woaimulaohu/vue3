/*
 * @Author: tuzki zhang
 * @Date: 2022-02-11 17:16:27
 * @LastEditors: tuzki zhang
 * @LastEditTime: 2022-02-12 17:58:58
 * @Description: file content
 */
import { createApp } from 'vue'
import App from './App.vue'
import MyPage from "./components/MyPage.vue";


const app = createApp(App)
app.component("MyPage",MyPage)
const vm = app.mount('#app')
console.log(vm.$data);