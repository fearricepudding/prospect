import Vue from 'vue';

const testComponent = Vue.component("example", require('./components/example.vue').default);

new Vue({
    el: '#app',
	render: h => h(testComponent),
    components: {
        testComponent
    }
});
