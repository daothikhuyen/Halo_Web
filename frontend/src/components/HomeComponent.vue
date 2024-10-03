<template>
    <div id="container" class="flex items-center relative">
        <div class="">
            <SidebarComponentVue/>
        </div>
        <router-view v-slot="{ Component }">
            <component :is="Component" />
        </router-view>
    </div>
</template>

<script>
import {defineComponent } from 'vue'
import '../assets/css/home.css';

import SidebarComponentVue from './SidebarComponent.vue'

export default defineComponent({
    name: 'HomeComponent',
    components: {
        SidebarComponentVue,

    },
    data() {
        return {
        }
    },

})
</script>