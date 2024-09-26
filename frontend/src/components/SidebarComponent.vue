// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="sidebarNav h-screen flex border-r border-[#d6dbe1]" id="sidebarNav">
    <div class="nav_tabs h-full z-10 flex flex-col justify-between" id="main-tab">
        <div>
            <div class="nav_tabs_top">
                <div class="nav_tabs_halo_web " title="">
                    <div class="zavatar_container h-fit cursor-pointer" idelemment="avatar">
                        <div class="zavatar zavatar-1">
                            <img src="../assets/images/ca_map.jpg" class="a-child" alt="">
                        </div>
                    </div>
                </div>
                <router-link v-for="(menu,index) in menu_header" :key="index" :to="menu.url" class="leftbar-tab flex justify-center items-center cursor-pointer" :title="menu.title">
                    <div class="z-noti-badge-container">
                        <i :class="menu.icon" class="internal_icon flex justify-center items-center"></i>
                    </div>
                    <div class="lb-tab-title truncate" data-translate-inner="STR_LEFT_SIDEBAR_Message">{{menu.title}}</div>
                </router-link>
                
            </div>
        </div>
        <div class="nav_tabs_bottom">
            <router-link v-for="(menu,index) in menu_bottom" :key="index" :to="menu.url" class="leftbar-tab flex justify-center items-center cursor-pointer" :title="menu.title" @click="toggleMenu(menu.title)">
                <div class="z-noti-badge-container">
                    <i :class="menu.icon" class="internal_icon flex justify-center items-center"></i>
                </div>
                <div class="lb-tab-title truncate" data-translate-inner="STR_LEFT_SIDEBAR_Message">{{menu.title}}</div>
            </router-link>
        </div>
    </div>
    <!-- <FriendListComponent/> -->

    <div class="popover-v3 z-50 left-2 bottom-16" :class="popover === 'Cài đặt'?'opacity-100':'opacity-0'">
        <div></div>
        <div class="zmenu-body expand">
            <div class="hl-scroll-menu">
                <div class="expand">
                    <div class="zmenu-item text-[#d8dbdf] md">
                        <div class="menu-icon mr-3">
                            <i class="fa-regular fa-user"></i>
                        </div>
                        <div class="trucate font-medium leading-5">
                            Thông tin tài khoản
                        </div>
                    </div>
                    <div class="zmenu-item text-[#d8dbdf] md">
                        <div class="menu-icon mr-3">
                            <i class="fa-solid fa-gear"></i>
                        </div>
                        <div class="trucate font-medium leading-5">
                            Cài đặt
                        </div>
                    </div>
                    <div class="zmenu-item text-[#d8dbdf] md">
                        <div class="menu-icon mr-3">
                            <i class="bi bi-info-circle"></i>
                        </div>
                        <div class="trucate font-medium leading-5">
                           Giới thiệu
                        </div>
                    </div>
                    <hr>
                    <div class="zmenu-item md " style="padding-left: 23px;">
                        <div class="trucate font-medium leading-5 text-red-500">
                            Đăng xuất
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import {ref, defineComponent} from 'vue'
// import FriendListComponent from './navbar/Friend_ListComponent.vue';

export default defineComponent({
    name : "SidebarComponent",
    components : {
        // FriendListComponent
    },
    data() {

        const menu_header = ref([
            {
                icon: 'bi bi-chat-dots-fill',
                title: 'Tin nhắn',
                url:'/me'
            },
            {
                icon: 'fa-solid fa-address-book',
                title: 'Danh bạ',
                url:'/contacts'
            },{
                icon: 'fa-regular fa-newspaper',
                title: 'Tin tức',
                url:'/news'
            },
        ]);

        const menu_bottom = ref([
            {
                icon: 'bi bi-cloud',
                title: 'Halo Cloud',
                url:'/cloud'
            },
            {
                icon: 'fa-solid fa-toolbox',
                title: 'Công cụ',
                url:'/tools'
            },
            {
                icon: 'fa-solid fa-gear',
                title: 'Cài đặt',
                url:'/setting'
            },
        ])

        const popover = ref(null)
        return {
            menu_header,
            menu_bottom,
            popover
        }
    },
    methods : {
        toggleMenu(title){
            this.popover = title
        }
    }
}) 
</script>

<style scoped>
    @media only screen and (max-width: 800px) {
        #container #sidebarNav {
            width: 64px;
            box-sizing: border-box;
        }

        #container #sidebarNav .conv-list-semi-compact {
            opacity: 0;
        }
    }
</style>