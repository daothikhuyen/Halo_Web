<template>
    <div class="conv-list-semi-compact flex flex-col border-r border-[#d6dbe1] bg-[#fff]">
        <div id="contact-search" class="gridv2 grid grid-cols-8 grap-8 flex items-center" style="grid-template-columns: auto 32px 32px;">
            <div class="group-search grid-item">
                <div class="text-center">
                    <i class="bi bi-search group-search-icon"></i>
                </div>
                <input type="text" id="contact-search-input" placeholder="Tìm kiếm..">
            </div>
            <div class="z--btn-v2 icon-only btn-tertiary-neutral medium flex justify-center items-center" title="Thêm bạn">
                <i class="fa-solid fa-user-plus pre"></i>
            </div>
            <div class="z--btn-v2 icon-only btn-tertiary-neutral medium flex justify-center items-center px-2" title="Tạo nhóm">
                <i class="fa-solid fa-people-group pre"></i>
            </div>
        </div>
        <div class="flex w-full opacity-100">
            <div class="msg-filters-bar ver3 w-full">
                <div class="undefined w-full h-full">
                    <div class="tab-main w-full relative flex flex-row justify-between items-center pl-4 pb-1 border-soild border-b border-[#d6dbe1]">
                        <div class="flex items-center">
                            <div class="tab-item selected" title="Tất cả">
                                <div class="z-noti-badge-container">
                                    <div class="all text-sm font-medium leading-6 block hover:text-[#076739]">Tất cả</div>
                                </div>
                            </div>
                            <div class="tab-item ms-3" title="Chưa đọc">
                                <div class="z-noti-badge-container">
                                    <div class="all text-sm font-medium leading-6 block hover:text-[#076739]">Chưa đọc</div>
                                </div>
                            </div>
                            <div class="tab-indicator"></div>
                        </div>
                        <div class="flex items-center">
                            <div class="flex-1"></div>
                            <div class="w-fit w-full px-2 ">
                                <div class="w-fit w-full">
                                    <div class="menu-small filter-preview-v2 label-filter-preview flex items-center px-3 hover:rounded-full hover:bg-[#eaedf0]" :class="{selected: popover === 'Phân loại'}" @click="toggleMenu('Phân loại')">
                                        <div class="flex me-2">
                                            <div class="text-xs leading-6 block">Phân loại</div>
                                        </div>
                                        <i class="fa-solid fa-chevron-down fa-xs"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="menu-small z--btn-v2 icon-only btn-tertiary-neutral medium flex justify-center items-center p-2 hover:rounded-full hover:bg-[#eaedf0]" :class="{selected: popover === 'Thêm bạn'}" title="Thêm bạn" @click="toggleMenu('Thêm bạn')">
                                <i class="fa-solid fa-ellipsis pre"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="conversationListId" class="">
            <div class="virtualized-scroll">
                <div class="scroll-style absolute inset-0" style="margin-right: 0px; margin-bottom: -6px;">
                    <div id="conversationList"  class="box-border" style="width: 344px;">
                        <div v-for="item in message" :key="item.id" class="msg-item">
                            
                            <div  class="gridv2 conv-item conv-rel gap-0" style="grid-template-columns: 60px auto 36px 23px;" @click="chooseFriend(item)">
                                <div class="flex row-end-3 row-start-1 conv-item__avatar">
                                    <div class="rel zavatar_container conversationList__avatar relative h-fit">
                                        <div class="zavatar zavatar-1 zavatar-single flex flex-center rel disableDrag clickable zavatar-4">
                                            <img draggable="false" :src="item.user.avatar" class="a-child">
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="conv-status grid-item"></div> -->
                                <div-b16 class="conv-item-title__name truncate grid-item" classname="grid-item">
                                    <i class="fa fa-Community_16_Filled community__conv-indicator"></i>
                                    <div class="truncate">
                                        {{item.user.username}}
                                    </div>
                                </div-b16>

                                <div class="conv-item-title__more rel grid-item" style="line-height: 21px; transition: none; overflow: visible;">
                                    <div class="flex items-center" style="width: fit-content; opacity: 1;">
                                        <i class="fa-solid fa-bell-slash conv__mute"></i>
                                        <div class="flex items-center">
                                            <span> 
                                                <span data-translate-inner="STR_FEW_SECONDS">Vài giây</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div id="conv-title-action" class="flex absolute" style="width: fit-content; top: 0px; right: 0px; opacity: 0; transition-delay: 0ms;">
                                        <div icon="More_24_Line" class="z--btn--v2 btn-tertiary-neutral small  conv-action__menu-v2 --rounded icon-only  conv-action__menu-v2" data-disabled="" data-translate-title="Thêm" title="Thêm">
                                            <i class="fa fa-More_24_Line pre"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="conv-item-body flex truncate grid-item">
                                    <div class="conv-item-body__main truncate flex w100">
                                        <div class="conv-message truncate">
                                            <div-14 class="truncate flex" style="align-items: center;">
                                                <div v-if="item.sender_id === item.user.id" class="conv-dbname  truncate" style="margin-right: 4px;"  >{{item.user.username}}:</div>
                                                <div v-else class="conv-dbname  truncate" style="margin-right: 4px;">Bạn:</div>
                                                <span class="false message__icon">
                                                    <i class="fa fa-icon-outline-picture"></i>
                                                </span>
                                                <div class="truncate">
                                                    <span>{{item.content}}</span>
                                                </div>
                                            </div-14>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="msg-item">
                            <div class="gridv2 conv-item conv-rel gap-0" style="grid-template-columns: 60px auto 36px 23px;">
                                <div class="flex row-end-3 row-start-1 conv-item__avatar">
                                    <div class="rel zavatar_container conversationList__avatar relative h-fit">
                                        <div class="zavatar zavatar-1 zavatar-single flex flex-center rel disableDrag clickable zavatar-4">
                                            <img draggable="false" src="https://s120-ava-talk.zadn.vn/f/1/f/0/123/120/c453d34d84c5edc08b8dcbf52fcebb5a.jpg" class="a-child">
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="conv-status grid-item"></div> -->
                                <div-b16 class="conv-item-title__name truncate grid-item unread" classname="grid-item">
                                    <i class="fa fa-Community_16_Filled community__conv-indicator"></i>
                                    <div class="truncate">
                                        Huynh Minh
                                    </div>
                                </div-b16>

                                <div class="conv-item-title__more rel grid-item" style="line-height: 21px; transition: none; overflow: visible;">
                                    <div class="flex items-center" style="width: fit-content; opacity: 1;">
                                        <!-- <i class="fa-solid fa-bell-slash conv__mute"></i> -->
                                        <div class="flex items-center">
                                            <span> 
                                                <span data-translate-inner="STR_FEW_SECONDS">Vài giây</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div id="conv-title-action" class="flex absolute" style="width: fit-content; top: 0px; right: 0px; opacity: 0; transition-delay: 0ms;">
                                        <div icon="More_24_Line" class="z--btn--v2 btn-tertiary-neutral small  conv-action__menu-v2 --rounded icon-only  conv-action__menu-v2" data-disabled="" data-translate-title="Thêm" title="Thêm">
                                            <i class="fa fa-More_24_Line pre"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="conv-item-body flex truncate grid-item">
                                    <div class="conv-item-body__main truncate flex w100">
                                        <div class="conv-message truncate unread">
                                            <div-14 class="truncate flex" style="align-items: center;">
                                                <div class="conv-dbname  truncate" style="margin-right: 4px;">Anh Thu:</div>
                                                <span class="false message__icon">
                                                    <i class="fa fa-icon-outline-picture"></i>
                                                </span>
                                                <div class="truncate">
                                                    <span>Chaof banj</span>
                                                </div>
                                            </div-14>
                                        </div>
                                    </div>
                                </div>
                                <div class="conv-item-body__action hasOption grid-item">
                                    <div class="conv-action__unread-v2 flx flx-al-c">
                                        <div class="z-noti-badge --big --dot --noti-enable"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="msg-item">
                            <div class="gridv2 conv-item conv-rel gap-0" style="grid-template-columns: 60px auto 36px 23px;">
                                <div class="flex row-end-3 row-start-1 conv-item__avatar">
                                    <div class="rel zavatar_container conversationList__avatar relative h-fit">
                                        <div class="zavatar zavatar-1 zavatar-single flex flex-center rel disableDrag clickable zavatar-4">
                                            <img draggable="false" src="https://s120-ava-talk.zadn.vn/f/1/f/0/123/120/c453d34d84c5edc08b8dcbf52fcebb5a.jpg" class="a-child">
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="conv-status grid-item"></div> -->
                                <div-b16 class="conv-item-title__name truncate grid-item unread" classname="grid-item">
                                    <i class="fa fa-Community_16_Filled community__conv-indicator"></i>
                                    <div class="truncate">
                                        Vân
                                    </div>
                                </div-b16>

                                <div class="conv-item-title__more rel grid-item" style="line-height: 21px; transition: none; overflow: visible;">
                                    <div class="flex items-center" style="width: fit-content; opacity: 1;">
                                        <!-- <i class="fa-solid fa-bell-slash conv__mute"></i> -->
                                        <div class="flex items-center">
                                            <span> 
                                                <span data-translate-inner="STR_FEW_SECONDS">Vài giây</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div id="conv-title-action" class="flex absolute" style="width: fit-content; top: 0px; right: 0px; opacity: 0; transition-delay: 0ms;">
                                        <div icon="More_24_Line" class="z--btn--v2 btn-tertiary-neutral small  conv-action__menu-v2 --rounded icon-only  conv-action__menu-v2" data-disabled="" data-translate-title="Thêm" title="Thêm">
                                            <i class="fa fa-More_24_Line pre"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="conv-item-body flex truncate grid-item">
                                    <div class="conv-item-body__main truncate flex w100">
                                        <div class="conv-message truncate unread">
                                            <div-14 class="truncate flex" style="align-items: center;">
                                                <div class="conv-dbname  truncate" style="margin-right: 4px;">Anh Thu:</div>
                                                <span class="false message__icon">
                                                    <i class="fa fa-icon-outline-picture"></i>
                                                </span>
                                                <div class="truncate">
                                                    <span>Chaof banj</span>
                                                </div>
                                            </div-14>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div  class="popover-v3 z-50 left-56 " :class="popover === 'Phân loại'?'opacity-100':'opacity-0'"  style="top : 105px">
        <div></div>
        <div class="zmenu-body expand">
            <div class="hl-scroll-menu">
                <div class="expand">
                    <div class=" font-medium" style="padding: 0 4px; font-size: 13px;">
                        <span>Theo thẻ phân loại</span>
                    </div>
                    <div class="zmenu-item md">
                        <div class="z-ckeckbox menu-icon mr-3">
                            <i class="fa-regular fa-square"></i>
                        </div>
                        <i class="fa-solid fa-person-circle-question menu-icon left mn-html"></i>
                        <div class="trucate font-medium leading-5">
                            Tin nhắn từ người lại
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="popover-v3 z-50 left-80 " :class="popover === 'Thêm bạn'?'opacity-100':'opacity-0'"  style="top : 105px">
        <div></div>
        <div class="zmenu-body expand">
            <div class="hl-scroll-menu">
                <div class="expand">
                    <div class="zmenu-item md">
                        <div class="trucate font-medium leading-5">
                            Đánh dấu đã đọc
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'

import messageApi from '@/assets/js/Api/messageApi'

export default {
    name : "FriendComponent",
    data() {
        const popover = ref(null)
        const message = ref([])
        return {
            popover,
            message
        }
    },
    methods: {
        toggleMenu(title){
            if(title === this.popover){
                this.popover = null
            }else{
                this.popover = title;
            }
            
        },

        chooseFriend(item){
            this.$emit('chooseFriend_chat', item)
        }
    },
    created(){
        this.message = messageApi.message()
    }
}
</script>

<style scoped>
.chatOnboard .list_friend {
    min-width: 340px;
}

.conv-list-semi-compact{
    min-width: 340px;
}

.conv-list-semi-compact #contact-search:focus {
  outline: none;
}

.conv-list-semi-compact #contact-search {
  height: 64px;
  min-height: 64px;
  position: relative;
  background-color: var(WA100);
  overflow: visible;
  padding: 0 16px;
}
.conv-list-semi-compact #contact-search .group-search {
  position: relative;
  display: flex;
  height: 32px;
}
.conv-list-semi-compact #contact-search .group-search .group-search-icon {
  position: absolute;
  top: 0;
  bottom: 5px;
  margin: auto 12px;
  font-size: 0.875rem;
  width: 0.875rem;
  height: 0.875rem;
  color: var(--icon-primary);
}
.conv-list-semi-compact #contact-search .group-search #contact-search-input {
  height: 32px;
  background-color: var(--input-field-bg-filled);
  border: 1px solid var(--input-field-bg-filled);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 32px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;
}
.conv-list-semi-compact #contact-search .z--btn-v2 {
  padding: 2px;
  font-weight: 500;
  line-height: 1.5;
  box-sizing: border-box;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  width: -moz-fit-content;
  width: fit-content;
}
.conv-list-semi-compact #contact-search .z--btn-v2:hover {
  background-color: #eaedf0;
}
.conv-list-semi-compact #contact-search .z--btn-v2.btn-tertiary-neutral {
  background-color: transparent;
  color: #081c36;
}
.conv-list-semi-compact #contact-search .z--btn-v2.icon-only.medium {
  max-width: 32px;
  min-width: 32px;
  height: 32px;
}
.conv-list-semi-compact #contact-search .z--btn-v2 .pre {
  font-size: 1rem;
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.conv-list-semi-compact .msg-filters-bar .tab-main .tab-item {
  border-bottom: 2px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: -1px;
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.conv-list-semi-compact .msg-filters-bar .tab-main .tab-item.selected {
  color: #1c7b46;
}
.conv-list-semi-compact .msg-filters-bar .tab-main .label-filter-preview {
  max-width: 140px;
}
.conv-list-semi-compact .msg-filters-bar .tab-main .tab-indicator {
  width: 39.1px;
  height: 2px;
  background-color: #1c7b46;
  position: absolute;
  bottom: 0;
  transition: all 0.3s;
}
.conv-list-semi-compact .msg-filters-bar .tab-main .filter-preview-v2 {
  width: -moz-fit-content;
  width: fit-content;
  padding: 0 4px 0 8px;
  color: var(--text-primary);
  box-sizing: border-box;
  height: 24px;
  border-radius: 24px;
  cursor: pointer;
}
.conv-list-semi-compact .msg-filters-bar .tab-main .filter-preview-v2.selected {
  color: #1c7b46;
  font-weight: 500;
  background-color: rgba(71, 151, 105, 0.25);
}
.conv-list-semi-compact .msg-filters-bar .tab-main .z--btn-v2 {
  position: relative;
}
.conv-list-semi-compact .msg-filters-bar .tab-main .z--btn-v2.selected {
  color: #1c7b46;
  font-weight: 500;
  background-color: rgba(71, 151, 105, 0.25);
  border-radius: 24px;
}
.conv-list-semi-compact #conversationListId {
  position: relative;
  display: block;
  flex: 2 1 0%;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll {
  /* position: relative; */
  overflow: hidden;
  width: 342.2px;
  height: auto;
  outline: none;
  overflow-y: auto;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll .scroll-style {
  overflow-y: scroll;
  overflow-x: hidden;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList{
  height: auto;
  overflow: scroll;
}

.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item {
  height: 70px;
  width: 100%;

}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2 {
  display: grid;
  padding: 0 14px 0px 16px;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2.conv-item {
  height: 100%;
  contain: size style;
  background-color: var(--WA100);
  cursor: pointer;
  overflow: hidden;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2.conv-item:hover{
    background-color: #f3f5f6;
    gap: 0px;
    grid-template-columns: 60px auto 23px 23px;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2.conv-item .conv-item__avatar {
  position: relative;
  align-items: center;
  justify-content: start;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2 .conv-item-title__name {
  max-width: calc(100% - 8px);
  text-overflow: ellipsis;
  display: block;
  flex: 1;
  color: var(--text-primary);
  display: flex;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2 .conv-item-title__name.unread {
  font-weight: 500;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2 .conv-item-title__more {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-secondary);
  position: relative;
  display: flex;
  justify-content: center;
  grid-column-start: 3;
  grid-column-end: 5;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2 .conv-item-title__name,
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2 .conv-item-title__more {
  overflow: hidden;
  white-space: nowrap;
  align-self: center;
  align-items: center;
  height: 24px;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2 .conv-message {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  line-height: 18px;
  position: relative;
  color: var(--text-secondary);
  left: 0;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2 .conv-message.unread {
  color: var(--text-primary);
  right: 30px;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2 .conv-message .conv-dbname {
  min-width: 0;
  max-width: -moz-fit-content;
  max-width: fit-content;
  flex: 0 0 100%;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2 .conv-item-body__action {
  height: 18px;
  margin: 4px 4px 0 0;
  display: none;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2 .conv-item-body__action.hasOption {
  display: flex;
  justify-content: flex-end;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2 .conv-item-body__action .z-noti-badge {
  height: 12px;
  border-radius: 100%;
  background-color: #c31818;
  color: #fff;
}
.conv-list-semi-compact #conversationListId .virtualized-scroll #conversationList .msg-item .gridv2 .conv-item-body__action .z-noti-badge.--dot.--big {
  height: 10px;
  width: 10px;
}

@media only screen and (max-width: 800px){
    .conv-list-semi-compact {
        display: none;
    }
}
    
</style>