<template>
    <div class="box-chat" id="chatViewContainer">
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
                            <div-18 class="header_title">Thuỳ Linh</div-18>
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
                    <div class="z--btn-v2 icon-only btn-tertiary-neutral medium flex justify-center items-center px-2 focused" title="Thêm bạn vào trò chuyện">
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
                <div class="rel mr-1">
                    <div class="z--btn-v2 icon-only btn-tertiary-neutral medium flex justify-center items-center px-2" title="Thêm bạn vào trò chuyện">
                        <i class="bi bi-file-break"></i>
                    </div>
                </div>
            </div> 
        </header>
        <article id="chatView" class="rel">
            <div class="message-view">

            </div>
        </article>
        <div class="chat-box-input-container-id relative">
            <div class="chat-box-bar">
                <div class="left-chat-box-bar">
                    <ul class="chat-box-toolbar">
                        <li class="chat-box-toolbar-item">
                            <div class="z--btn-v2 icon-only btn-tertiary-neutral medium flex justify-center items-center px-2" title="Gửi Sticker">
                                <i class="fa fa-Sticker_24_Line pre"></i>
                            </div> 
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    </div>
</template>
<style scoped>
    :root{
        --text-primary: #081c36;
        --layer-background : #fff;
        --V_Gradient_B55B30: linear-gradient(0deg, #06f, #529aff);
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

    #chatView .message-view{
        flex: 1 0 auto;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .chat-box-bar{
        position: relative;
        display: flex;
        height: 40px;
        padding: 0 8px;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #d6dbe1;
        background-color: var(--layer-background);
    }
</style>