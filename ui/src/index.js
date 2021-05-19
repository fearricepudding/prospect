import _ from 'lodash';
import Vue from 'vue';

function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello,', 'Webpack'], ' ');
    return element;
}
document.body.appendChild(component());

const testComponent = Vue.component("example", require('./components/example.vue').default());

new Vue({
    el: '#app',
    components: {
        testComponent
    }
});
