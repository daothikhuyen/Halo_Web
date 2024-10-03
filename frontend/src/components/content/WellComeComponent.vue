<template>

<div class="chatOnboard h-screen flex flex-1 w-0 overflow-hidden bg-[#fff]">
    <FriendListComponentVue @chooseFriend_chat="friendChat" />
    <ChatComponentVue :data="data" />
</div>
</template>


<script>
import {defineComponent,ref } from 'vue'

import FriendListComponentVue from '../navbar/Friend_ListComponent.vue'
import ChatComponentVue from './ChatComponent.vue'

export default defineComponent({
    name: 'WellComeComponent',
    components: {
        FriendListComponentVue,
        ChatComponentVue,
    },
    data() {
        const sdlieImage = ref([
            {
                title: "Quảng cáo",
                image: "../../assets/images/halo_01.png"
            },
            {
                title: "Quảng cáo",
                image: "../../assets/images/halo_01.png"
            },
            {
                title: "Quảng cáo",
                image: "../../assets/images/halo_01.png"
            },
        ]);
        const data = ref([])

        return {
            sdlieImage,
            data
        }
    },
    methods: {
        friendChat(items){
            this.data = items
        }
    }

})
</script>
