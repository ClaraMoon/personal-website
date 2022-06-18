import { createApp } from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/vs2015.css'


createApp(App).use(VueHighlightJS).mount('#app')
