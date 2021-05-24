import Vue from 'vue';
//import prospect from "./components/prospect.vue";

const prospect = Vue.component("prospectComp", require('./components/prospect.vue').default);

window.addEventListener("load", function(event){
	new Vue({
		el: '#app',
		//render: h => h(prospectApplication),
		components: {
			prospect
		}
	});
})
