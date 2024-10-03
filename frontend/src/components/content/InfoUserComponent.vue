<template>
    <aside>
        <div class="chatInfo flex-1">
            <div class="chat-info__header">
                <div class="chat-info__header__title">
                    <span>Thông tin hội thoại</span>
                </div>
            </div>
            <div id="sideBodyScrollBox" class="flex-1">
                <div id="chatInfoGeneral" class="chat-info-general h-full">
                    <div class="relative overflow-hidden w-full h-full" >
                        <div class="overflow-scroll" style="margin-right:-6px; margin-bottm:-6px">
                            <div class="chat-info-general_section relative">
                                <div class="header-info">
                                    <div class="header-info-ava">
                                        <div class="zavatar_container h-fit cursor-pointer" idelemment="avatar">
                                            <div class="zavatar zavatar-1">
                                                <img src="../../assets/images/ca_map.jpg" class="a-child" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="header-info__name">
                                    <div class="truncate" title="Diệu Linh">
                                        Diệu Linh
                                    </div>
                                </div>
                                <div class="header-info__tool">
                                    <div class="header-info__tool__button">
                                        <div style="justify-content: center; display: flex; padding: 4px;">
                                            <div icon="mute-outline" class="z--btn-v2 btn-neutral medium  --full-rounded icon-only flex justify-center items-center" data-disabled="" title="">
                                                <i class="fa-regular fa-bell-slash pre"></i>
                                            </div>
                                        </div>
                                        <div class="text" style="text-align: center; padding: 4px 8px; color: var(--text-secondary);">
                                            <span data-translate-inner="STR_MUTE_CONVERSATION_SHORT">Tắt thông báo</span>
                                        </div>
                                    </div>
                                     <div class="header-info__tool__button">
                                        <div style="justify-content: center; display: flex; padding: 4px;">
                                            <div icon="mute-outline" class="z--btn-v2 btn-neutral medium  --full-rounded icon-only flex justify-center items-center" data-disabled="" title="">
                                                <i class="fa-solid fa-people-group pre"></i>
                                            </div>
                                        </div>
                                        <div class="text" style="text-align: center; padding: 4px 8px; color: var(--text-secondary);">
                                            <span data-translate-inner="STR_MUTE_CONVERSATION_SHORT">Tạo nhóm trò chuyện</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-info-general__section--border"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
       
    },
    data(){

    }
})
</script>

<style scoped>
    aside{
        overflow: hidden;
        border-left: 1px solid var(--border);
        width: 344px;
        max-width: calc(100vw - 80px);
        background: transparent;
        color: var(--text-primary);
        box-sizing: border-box;
    }

    .chat-info__header {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        background: #fff;
        height: 70px;
        font-size: .875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 0 15px;
        color: var(--text-primary);
        border-bottom: 1px solid #d6dbe1;
        position: relative;
    }

    .chat-info__header:before {
        position: absolute;
        bottom: -1px;
        left: 0;
        border-top: 1px solid #d6dbe1;
        content: "";
        width: 100%;
        z-index: 3;
    }

    .chat-info__header__title {
        color: var(--text-primary);
        margin-top: -3px;
        text-align: center;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.5;
        font-family: SegoeuiPc, Segoe UI, San Francisco, Helvetica Neue, Helvetica, Lucida Grande, Roboto, Ubuntu, Tahoma, Microsoft Sans Serif, Arial, sans-serif;
    }

    /* .chat-info-general_section:last-child{
        border: none;
    } */

    .header-info{
        padding: 12px 16px;
    }

    .header-info-ava{
        margin: 12px 0;
        justify-content: center;
        display: flex;
        cursor: pointer;
    }

    .header-info__name {
        height: 26px;
        justify-content: center;
        display: flex;
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 1.5;
        font-family: SegoeuiPc, Segoe UI, San Francisco, Helvetica Neue, Helvetica, Lucida Grande, Roboto, Ubuntu, Tahoma, Microsoft Sans Serif, Arial, sans-serif;
    }

    .header-info__tool {
        padding-top: 12px;
        padding-bottom: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .header-info__tool__button {
        height: 78px;
        width: 84px;
    }

    .header-info__tool__button .text{
        font-size: .8rem;
        font-weight: 500;
        line-height: 1.5;
    }

    .z--btn-v2.--full-rounded {
        border-radius: 20px;
    }

    .z--btn-v2.btn-neutral {
        background-color: #eaedf0;
        color: #081c36;
    }

    .z--btn-v2.medium {
        height: 32px;
    }
</style>