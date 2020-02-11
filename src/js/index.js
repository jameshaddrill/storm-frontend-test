import Vue from 'vue';
import App from '../views/App.vue';
import '../css/index.scss';

const app = new Vue({
	render: h => h(App)
}).$mount('#app');