<template>
    <section class="bg-gray-50 min-h-screen flex items-center justify-center">
        <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
            <!-- form -->
            <div class="sm:w-1/2 px-9">
                <h1 class="font-bold text-2xl  text-[#4ce274]">Đăng Nhập Halo</h1>
                <p class="text-sm mt-4 text-[#002D74]">Nếu bạn đã có tài khoản, hãy đăng nhập ở đây.</p>

                <form action="" class="flex flex-col gap-4">
                    <div class="select-box">
                        <div class="selected-option">
                            <div @click="HandleToggle()" :class="{active: toggle}">
                                <span class="iconify" :data-icon="'flag:' + country.code.toLowerCase() + '-4x3'"></span>
                                <!-- <span class="icon-[flag--vn-4x3]"></span> -->
                                <strong>+{{country.phone}}</strong>
                            </div>
                            <input type="tel" name="tel" v-model="phone" placeholder="Số điện thoại">
                        </div>
                        <div class="options" :class="{active: toggle}">
                            <input type="text " class="search-box" v-model="search_box" @input="searchCountry()" placeholder="Tìm kiếm Quốc Gia">
                            <ol>
                                <li class="option" v-for="country in searchCountry()" :key="country.code" @click="selectOption(country)">
                                    <div>
                                        <span class="iconify" :data-icon="'flag:' + country.code.toLowerCase() + '-4x3'"></span>
                                        <span class="country-name">{{country.name}}</span>
                                    </div>
                                    <strong>+{{country.phone}}</strong>
                                </li>
                            </ol>
                        </div>
                        
                        <div class="relative" style="z-index: 1">
                            <input class="p-2 rounded-xl border w-50 mt-4" type="password" name="password" placeholder="Mật khẩu">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg> -->
                        </div>
                    </div>
                    <button class="bg-[#4ce274] rounded-xl text-white py-2 mt-4 ">Đăng Nhập</button>
                </form>

                <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
                    <hr class="border-gray-400">
                    <p class="text-center text-sm">Và</p>
                    <hr class="border-gray-400">
                </div>
                
                <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">Chúc bạn vui vẻ khi sử dụng Halo
                </button>
            
                <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74] flex justify-center items-center">
                    <a href="#">Quên mật khẩu?</a>
                </div> 
            
                <a href="/register" class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                    <p>Bạn chưa có tài khoản?</p>
                    <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Đăng ký</button>
                </a>
            </div> 

            <!-- image -->
            <div class="sm:w-1/2 px-9 md:block hidden">
                <img class="rounded-2xl"
                src="../../assets/images/logo.HALO.jpg" alt="">
            </div>

        </div>
    </section>
</template>
<script>
import { ref ,defineComponent } from 'vue'
import "../../assets/css/form.css"

import loginApi from "../../assets/js/Api/loginApi"

export default defineComponent({
    name: "LoginComponent",
    data(){
        const countries = ref([])
        const toggle = ref(false)
        const search_box = ref(null)
        const country = {
            name: ref(null),
            phone: ref("84"),
            code: ref("vn"),
        }

        return {
            countries,
            toggle,
            search_box,
            country
        }
    },
    methods:{

        HandleToggle(){
            this.toggle = !this.toggle
        },

        selectOption(country) {
            console.log(country);
            this.country.phone = country.phone;
            this.country.code = country.code;

            this.phone = "+"+ country.phone;

            this.toggle = false;
            this.search_box = "";
        },

        searchCountry(){
            if (!this.search_box) return this.countries;

            return this.countries.filter(country => 
                country.name.toLowerCase().includes(this.search_box.toLowerCase()))
        }

    },
    created(){
        this.countries = loginApi.countries();
    }
})
</script>


