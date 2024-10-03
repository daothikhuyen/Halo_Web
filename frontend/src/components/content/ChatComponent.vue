<template>
    <div class="w-full flex flex-col justify-center chat-onboard bg-[#fff]" :class="{hidden : loadData()}">
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
    <main v-if="data.user" class="w-full flex flex-1" :class="{hidden : !loadData()}">
        <div class="box-chat w-full" id="chatViewContainer">
            <header id="header" class="flex border-b border-[#d6dbe1] bg-[#fff]" style="background-color: #fff">
                <div class="threadChat flex flex-1 items-center">
                    <div id="ava_chat_box_view" class="threadChat_avatar clickable relative cusion-pointer">
                        <div class="zavatar_container h-fit cursor-pointer" idelemment="avatar">
                            <div class="zavatar zavatar-1">
                                <img src="../../assets/images/ca_map.jpg" class="a-child" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="threadChat_title w-0 flex flex-wrap">
                        <div class="main_title_container w-100">
                            <div class="overflow-hidden flex">
                                <div-18 class="header_title">{{data.user.username}}</div-18>
                            </div>
                        </div>
                        <div class="flex w-100">
                            <div class="newspaper"></div>
                            <div class="flx flx-al-c flx-1" style="min-width: 36px;">
                                <i class="bi bi-bookmark label-ico-header" data-translate-title="STR_LABEL_CLASS" title="Phân loại"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="headerBtns" class="flex items-center">
                    <div class="rel mr-1">
                        <div class="z--btn-v2 icon-only btn-tertiary-neutral medium flex justify-center items-center px-2" title="Thêm bạn vào trò chuyện">
                            <i class="fa-solid fa-people-group pre"></i>
                        </div>
                    </div>
                    <div class="rel mr-1">
                        <div class="z--btn-v2 icon-only btn-tertiary-neutral medium flex justify-center items-center px-2" title="Thêm bạn vào trò chuyện">
                            <i class="bi bi-camera-video"></i>
                        </div>
                    </div>
                    <div class="rel mr-1">
                        <div class="z--btn-v2 icon-only btn-tertiary-neutral medium flex justify-center items-center px-2" title="Thêm bạn vào trò chuyện">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                    <div class="rel mr-1" @click="showProfile()">
                        <div class="z--btn-v2 icon-only btn-tertiary-neutral medium flex justify-center items-center px-2" :class="{focused: show}" title="Thêm bạn vào trò chuyện" >
                            <i class="bi bi-file-break"></i>
                        </div>
                    </div>
                </div> 
            </header>
            <article id="chatView" class="rel">
                <div class="message-view__blur__overlay_noavatar"></div>
                <div class="message-view">
                    <div id="draOverlayMessageView"></div>
                    <div id="MessageViewContainer" class="message-view__scroll" style="position: relative;overflow: hidden;width: 100%;height: 100%;}">
                    <div class="absolute overflow-scroll w-full h-full" style="margin-right:-6px; margin-bottom: -6px; will-change: transform">
                            <div class="message-view__scroll__inner fadeInAndOut">
                                <div class="box-connect-friend">
                                    <div class="connect_friend">
                                        <div class="friendShip">
                                            <div class="rel zavatar_container avatar--overlay h-fit cursor-pointer" idelemment="avatar">
                                                <div class="zavatar zavatar-m">
                                                    <img :src="data.user.avatar" class="a-child" alt="">
                                                </div>
                                            </div>
                                            <div class="mx-3">
                                                <i class="fa-solid fa-hand-holding-hand fa-lg " style="color: #27ae61"></i>
                                            </div>
                                            <div class="rel zavatar_container avatar--overlay h-fit cursor-pointer" idelemment="avatar">
                                                <div class="zavatar zavatar-m">
                                                    <img src="../../assets/images/ca_map.jpg" class="a-child" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="content text-center">
                                            <span-16 class="">Chúc Các Bạn Có Cuộc Trò Chuyện <br> Vui Vẻ</span-16>
                                        </div>

                                    </div>
                                </div>
                                <div class="block-date">
                                    <div class="chat-date --time island">
                                        <div class="start"></div>
                                        <span class="content">
                                            <span>Hôm nay</span>
                                        </span>
                                        <div class="flx">
                                            <div class="end"></div>
                                        </div>
                                    </div> 
                                    <div class="chat-item flex">
                                        <div class="rel zavatar_container avatar--overlay h-fit cursor-pointer" idelemment="avatar">
                                            <div class="zavatar zavatar-m">
                                                <img src="../../assets/images/ca_map.jpg" class="a-child" alt="">
                                            </div>
                                        </div>
                                        <div class="chat-content">
                                            <div class="chat-message">
                                                <div class="flex w-full">
                                                    <div class="card card--text">
                                                        <div class="overflow-hidden">
                                                            <span-15>
                                                                <div class="text">
                                                                    {{data.content}}
                                                                </div>
                                                            </span-15>
                                                        </div>
                                                        <div style="margin: 3px -5px 0px"></div>
                                                    </div>
                                                    <div class="chat-message__actionholder last-msg" style="min-width: 116px;"></div>
                                                </div>
                                            </div>
                                            <div class="message-reaction" style="height: 0px"></div>
                                            <div class="chat-message">
                                                <div class="flex w-full">
                                                    <div class="card card--text">
                                                        <div class="overflow-hidden">
                                                            <span-15>
                                                                <div class="text">
                                                                    Chào bạn
                                                                </div>
                                                            </span-15>
                                                        </div>
                                                        <div style="margin: 3px -5px 0px"></div>
                                                    </div>
                                                    <div class="chat-message__actionholder last-msg" style="min-width: 116px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chat-date --time island">
                                        <div class="start"></div>
                                        <span class="content">
                                            <span>8:10 Hôm nay</span>
                                        </span>
                                        <div class="flx">
                                            <div class="end"></div>
                                        </div>
                                    </div> 
                                    <div class="chat-item flex me" v-if="data.sender_id === data.user.id">
                                        <div class="chat-content">
                                            <div class="chat-message">
                                                <div class="flex w-full">
                                                    <div class="chat-message__actionholder  me  last-msg" style="min-width: 116px;"></div>
                                                    <div class="card card--text">
                                                        <div class="overflow-hidden">
                                                            <span-15>
                                                                <div class="text">
                                                                    {{data.content}}
                                                                </div>
                                                            </span-15>
                                                        </div>
                                                        <div style="margin: 3px -5px 0px"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="message-reaction" style="height: 0px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div class="chat-box-input-container relative">
                        <div class="chat-box-bar">
                            <div class="left-chat-box-bar">
                                <ul class="chat-box-toolbar">
                                    <li class="chat-box-toolbar-item block">
                                        <div class="z--btn-v2 icon-only btn-tertiary-neutral medium chat-box-toolbar-button flex justify-center items-center px-2" title="Gửi Sticker">
                                        <i class="bi bi-emoji-smile pre"></i>
                                        </div> 
                                    </li>
                                    <li class="chat-box-toolbar-item block">
                                        <div class="z--btn-v2 icon-only btn-tertiary-neutral medium chat-box-toolbar-button flex justify-center items-center px-2" title="Gửi Ảnh">
                                        <i class="bi bi-image pre"></i>
                                        </div> 
                                    </li>
                                    <li class="chat-box-toolbar-item block">
                                        <div class="z--btn-v2 icon-only btn-tertiary-neutral medium chat-box-toolbar-button flex justify-center items-center px-2" title="Tệp đính kèm">
                                        <i class="fa-solid fa-paperclip pre"></i>
                                        </div> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="chatInput" class="chat-box-input--audit">
                            <div class="chat-input-container--audit">
                                <div class="chat-input-container--audit__left-layout" style="min-width: cacl(100% -74px)">
                                    <input type="text" class="input_chat" placeholder="Nhập tin nhắn">
                                </div>
                                <div class="chat-input-container--audit__right-layout">
                                    <div class="normal-buttons-group">
                                        <li class="chat-box-toolbar-item block">
                                            <div class="z--btn-v2 icon-only btn-tertiary-neutral medium chat-box-toolbar-button flex justify-center items-center px-2" title="Biểu cảm">
                                                <i class="bi bi-emoji-smile pre"></i>
                                            </div> 
                                        </li>
                                        <li class="chat-box-toolbar-item block">
                                            <div class="z--btn-v2 icon-only btn-tertiary-neutral medium chat-box-toolbar-button flex justify-center items-center px-2" title="Gửi nhanh biểu tượng cảm xúc">
                                                <div class="imgHolder pre">
                                                    <div class="svg-icon svg-icon--size-medium">
                                                        <img src="../../assets/images/Like_24.svg" alt="">
                                                    </div>
                                                </div>
                                            </div> 
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </article>
        </div>
        <div class="bg-[#fff]" style="border-left: 1px solid var(--border);" :class="{hidden: !show}">
            <InfoUserComponentVue />
        </div>
    </main>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { defineComponent,ref } from 'vue'

import InfoUserComponentVue from './InfoUserComponent.vue'
import messageApi from '../../assets/js/Api/messageApi'

export default defineComponent({
    name: "InfoUserComponet",
    props: {
        data: Object
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        InfoUserComponentVue
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

        const show = ref(false);
        const dataUser = ref([]);
        const message = ref([])

        return {
            sdlieImage,
            show,
            dataUser,
            message
        }
    },
    methods:{
        showProfile(){
            this.show = !this.show
        },

        loadData(){
            return Object.keys(this.data).length >0
        }
    },
    created(){
        this.message = messageApi.message()
    }
})
</script>

<style scoped>
    :root{
        --border:#d6dbe1;
        --text-primary: #081c36;
        --layer-background : #fff;
        --V_Gradient_B55B30: linear-gradient(0deg, #06f, #529aff);
        --surface-background-subtle: #eef0f1;
    }

    header{
        height: 70px;
        padding: 0 16px;
        background-position: 100%;
        background-repeat: no-repeat;
        background-color: var(--layer-background);
    }

    header .threadChat_title{
        position: relative;
        margin-left: 12px;
        margin-right: 18px;
    }

    header .threadChat_title .header_title{
        color: var(--text-primary);
        padding-left: 0;
        overflow: hidden;
        white-space: nowrap;
        min-width: 0;
        cursor: default;
        height: 28px;
        overflow: visible;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.5;
        font-family: SegoeuiPc, Segoe UI, San Francisco, Helvetica Neue, Helvetica, Lucida Grande, Roboto, Ubuntu, Tahoma, Microsoft Sans Serif, Arial, sans-serif;
    }

    article {
        width: 100%;
        height: calc(100vh - 70px);
        display: flex;
        -webkit-box-sizing: border-box;
    }

    #chatView .message-view{
        flex: 1 0 auto;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .rel{
        position: relative;
    }

    .message-view__blur__overlay_noavatar {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: var(--surface-background-subtle);
        z-index: -1;
    }

    .message-view:after {
        position: absolute;
        top: 0;
        border-top: 1px solid #d6dbe1;
        content: "";
        width: 100%;
        z-index: 4;
    }

    .message-view .message-view__scroll{
        position: relative;
        flex: 1 1 auto;
        contain: layout style size;
        bottom: 0;
    }

    #MessageViewContainer{
        flex: 1 1 auto;
        transition: .2s ease-out;
    }

    .message-view__scroll__inner{
        min-height: 100%;
        display: flex;
        padding-bottom: 28px;
        flex-direction: column;
        justify-content: flex-end;
        contain: layout style;
    }

    .box-connect-friend{
        margin: 20px 0px 50px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .box-connect-friend .connect_friend{
        width: calc(100% - 50%);
        height: 200px;
        background-color: #fff;
        border: 1px solid var(--border);
        border-radius: 8px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }

    .connect_friend .friendShip{
       display: flex;
       align-items: center;
       justify-content: center;
       margin: 30px 0px;
    }

    .connect_friend .content span-16{
        font-size: 1.3rem;
        font-family: "Pacifico", cursive;
        font-weight: 400;
        font-style: normal;
        color: #1a4f9f;
    }

    .friendShip .zavatar_container .zavatar.zavatar-m {
        width: 50px;
        height: 50px;
        min-width: 50px;
        min-height: 50px;
    }

    .chat-message__actionholder {
        contain: strict;
        display: flex;
        min-height: 28px;
        box-sizing: border-box;
        margin-left: 10px;
    }

    .chat-message__actionholder.me {
        margin-left: 0;
        margin-right: 16px;
    }

    .fadeInAndOut{
        animation: fadeInAndOut .4s ease;
    }

    @keyframes fadeInAndOut {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

    .block-date:first-child {
        margin-top: 10px;
    }

    .block-date>.chat-date.island {
        z-index: 5;
    }

    .block-date>.chat-date.--time {
        width: 116px;
        border-radius: 10px;
        margin: 0 auto 10px;
    }

    .block-date>.chat-date {
        transition: .3s ease-out;
        position: relative;
        border-radius: 10px;
    }
    .chat-date {
        color: var(--WA100);
        contain: content;
        margin: 0 60px 10px;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        font-size: .8125rem;
        font-weight: 400;
        line-height: 1.5;
        justify-content: center;
        position: relative;
    }

    .block-date>.chat-date>.content {
        width: 108px;
        text-align: center;
    }

    .chat-date>span {
        background: rgba(0, 0, 0, 0.2);;
        border-radius: 10px;
        padding: 2px 10px 3px;
        z-index: 2;
    }

    .chat-item {
        margin: 0 16px 7px;
        word-wrap: break-word;
        contain: style;
        word-break: break-all;
        word-break: break-word;
    }
/* css khung chat */
    .chat-box-bar{
        position: relative;
        display: flex;
        height: 40px;
        padding: 0 8px;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #d6dbe1;
        background-color: #fff;
    }

    .chat-box-toolbar{
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        row-gap: 12px;
        column-gap: 12px;
        align-items: center;
        justify-self: center;
    }

    .chat-box-toolbar-item{
        display: block;
    }

    .z--btn-v2{
        box-sizing: border-box;
        border-radius: 3px;
        cursor: pointer;
        padding: 0 16px;
        font-size: 1rem;
        width: fit-content;
        min-width: max-content;
    }

    .z--btn-v2.icon-only{
        max-width: 32px;
        min-width: 32px;
        padding: 0;
    }

    .chat-box-input-button.z--btn--v2.icon-only.medium {
        max-width: 30px;
        min-width: 30px;
        height: 30px;
    }

    .chat-box-toolbar-button.z--btn-v2.icon-only.medium>.pre {
        font-size: 1.2rem;
        width: 1.5rem;
        height: 1.5rem;
        line-height: 0;
    }

    /* css nhập tin nhắn */
    .chat-box-input--audit{
        flex: 1;
        position: relative;
        background: #fff;
        border-top: 1px solid var(--border);
    }

    .chat-input-container--audit{
        box-sizing: border-box;
        width: 100%;
        padding: 10px 12px;
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4px;
    }

    .chat-input-container--audit__left-layout{
        display: flex;
        align-items: center;
        flex-grow: 1;
        max-width: 100%;
        cursor: text;
    }

    .chat-input-container--audit__left-layout .input_chat{
        width: 100%;
        height: 30px;
        outline: none;
        font-size: 15px;
        color: rgba(0, 0, 0, 0.7);
        font-weight: 530;
    }

    .normal-buttons-group {
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: default;
    }
</style>