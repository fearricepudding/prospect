<template>
	<div class="sidebar" v-if="state !== null">
		<div v-if="state === 'EMAIL'">
			<mailSidebarComp></mailSidebarComp>
		</div>
	</div>
</template>
<script>
import Vue from 'vue';

const mailSidebar = Vue.component('mailSidebarComp', require('./mailSidebar.vue').default);

export default {
	components: {
		mailSidebar
	},
	data: function(){
		return {
			"state": "EMAIL",
			"emails": this.$parent["emails"]
		};
	}
}
</script>
