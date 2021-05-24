import Vue from 'vue';
//import prospect from "./components/prospect.vue";

const header = Vue.component("headercomp", require('./components/header.vue').default);
const sidebar = Vue.component("sidebarcomp", require('./components/sidebar.vue').default);
const frame = Vue.component("framecomp", require('./components/frame.vue').default);

window.addEventListener("load", function(event){
	new Vue({
		el: '#app',
		components: {
			header,
			frame,
			sidebar
		}
	});
})
