import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";

const vueApp = createApp(App)

vueApp.use(router)
vueApp.mount('#app')

router.beforeEach((to, from, next) => {
    // Check if the user is authenticated (e.g., check if a token is stored)
    const isAuthenticated = !!localStorage.getItem('token');

    if (!to.meta.public && !isAuthenticated) {
    // If the route is not public and the user is not authenticated, redirect to login
        next({ name: 'login' });
    }
    else {
        // Otherwise, allow navigation
        next();
    }
});

export default vueApp
