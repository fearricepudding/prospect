import Vue from 'vue';
//import prospect from "./components/prospect.vue";

const toolbar = Vue.component("headercomp", require('./components/header.vue').default);
const sidebar = Vue.component("sidebarcomp", require('./components/sidebar.vue').default);
const frame = Vue.component("framecomp", require('./components/frame.vue').default);

window.addEventListener("load", function(event){
	new Vue({
		el: '#app',
		components: {
			toolbar,
			frame,
			sidebar
		}
	});
})
