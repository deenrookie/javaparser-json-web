import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueCodemirror from "vue-codemirror/src/codemirror.vue";
import "codemirror/lib/codemirror.css";
import Highlight from './utils/highlight.js';
import axios from "axios";
// Highlight.js languages (Only required languages)
Vue.prototype.$axios = axios;

Vue.use(Highlight);
Vue.use(VueCodemirror);
Vue.use(ElementUI);
new Vue({
  el: '#app',
  render: h => h(App)
});