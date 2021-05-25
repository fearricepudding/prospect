<template>
    <header>
		<nav>
			<div class="navbar-item" v-for="state in states">
				{{state}}
			</div>
		</nav>
		<div style="clear:both"></div>
		<toolbar></toolbar>
    </header>
</template>
<script>
import Vue from 'vue';
const toolbarcomp = Vue.component("toolbar", require('./toolbar.vue').default);

export default {
	components: {
		toolbarcomp
	},
	data: function(){
		return {
			states: [
				"FILE",
				"HOME",
				"ACCOUNT",
				"VIEW",
				"HELP"
			] 
		};
	}
}
</script>
<style>
	nav{
		display:flex;
		float:left;
	}
	nav .navbar-item{
		user-select: none;
		padding: 5px;
		padding-left: 10px;
		padding-right: 10px;
	}
</style>
