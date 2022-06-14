import { createApp } from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/default.css';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';





createApp(App).use(VueHighlightJS,{
	// Register only languages that you want
	languages: {
		css,
		javascript,
	}
}).mount('#app')
