require('./bootstrap');

import { createApp } from 'vue';
import VueEx from './components/ExampleComponent.vue';
const { render } = wp.element;
import ReactEx from './components/ExampleComponent.jsx';

const app = createApp({});
app.component('vue-app', VueEx).mount('#vue-app');

render(<ReactEx />, document.getElementById('react-app'));
