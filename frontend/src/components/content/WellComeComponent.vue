<template>

<div class="chatOnboard h-screen flex flex-1 w-0 overflow-hidden bg-[#fff]">
    <FriendListComponentVue/>
    <div class="w-full">
        <ChatComponentVue/>
    </div>
    <div class="flex flex-col justify-center chat-onboard bg-[#fff] hidden">
        <div class="Title flex justify-center">
            <div class="Title-items text-center mb-12 text-[#081c36]" style="width: 415px;max-width: calc(100% - 24px);">
                <div class="text-2xl" style="margin-bottom: 16px;">
                    <span class="font-normal">
                        Chào mừng đến với</span>&nbsp;
                    <span class="font-medium">Halo PC</span>!
                </div>
                <div class="text-sm font-normal leading-6" data-translate-inner="STR_WELCOME_SCREEN_MAIN_SUBTITLE">
                    Khám phá những tiện ích hỗ trợ làm việc và trò chuyện cùng người thân, bạn bè được tối ưu hoá cho máy tính của bạn.
                </div>
            </div>
        </div>
        <div >
            <Carousel class="mySwiper swiper-wrapper"
                    :pagination="true"
                    :navigation="true"
                    :space-between="30"
                    :centered-slides="true"
                    :autoplay="{ delay: 10000, disableOnInteraction: false }"
                    :loop="true">
                <Slide v-for="slide in sdlieImage" :key="slide.id" class="swiper-slide">
                    <div class="slideshow_page">
                        <img src="../../assets/images/halo_01.png" class="slideshow_page_image" :alt="slide.title">
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>
    </div>
</div>
</template>


<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import {defineComponent,ref } from 'vue'

import FriendListComponentVue from '../navbar/Friend_ListComponent.vue'
import ChatComponentVue from './ChatComponent.vue'

export default defineComponent({
    name: 'WellComeComponent',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
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

        return {
            sdlieImage
        }
    },

})
</script>
