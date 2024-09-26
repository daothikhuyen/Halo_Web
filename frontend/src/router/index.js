import { createRouter, createWebHistory} from "vue-router"

import LoginComponent from '../components/form/LoginComponent.vue';
import RegisterComponent from '../components/form/RegisterComponent.vue'

import HomeComponent from '../components/HomeComponent.vue'
import WellComeComponent from '../components/content/WellComeComponent.vue'
import ChatComponent from '../components/content/ChatComponent.vue'

import indexContact from '../components/contacts/index_Component.vue'

const routes = [
    {
        name: 'login',
        path: '/login',
        component: LoginComponent,
        meta: { public: true }
    },
    {
        name: 'register',
        path: '/register',
        component: RegisterComponent,
        meta: { public: true }
    },
    {
        name: 'home',
        path: '/',
        component: HomeComponent,
        children: [
            {
                name: 'me',
                path: 'me',
                component: WellComeComponent,
            },
            {
                name: 'chat',
                path: 'chat',
                component: ChatComponent
            },
            {
                name: 'contacts',
                path: 'contacts',
                component: indexContact,
            },
            {
                name: 'tools',
                path: 'tools',
                component: WellComeComponent,
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     const isAuthenticated = !!localStorage.getItem('token');

//     if (!to.meta.public && !isAuthenticated) {
//         next({ name: 'login' });
//     }
//     else {
//         // Otherwise, allow navigation
//         next();
//     }
// });

export default router