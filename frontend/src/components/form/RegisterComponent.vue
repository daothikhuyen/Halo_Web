<template >
    <section class="bg-gray-50 min-h-screen flex items-center justify-center">
        <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
            <!-- image -->
            <div class=" sm:w-1/2 px-9 md:block hidden ">
                <img class="rounded-2xl"
                src="../../assets/images/logo.HALO.jpg" alt="">
            </div>

            <div class=" w-1/2 ">
                <h1 class="font-bold text-2xl  text-[#4ce274]">Đăng Ký Halo</h1>
                <form action="" class="flex flex-col gap-4">
                    <div class="select-box">
                        <div class="mb-4">
                            <input type="text" placeholder="Nhập tên người dùng" class="w-full p-2 border border-gray-300 rounded">
                        </div>
                        <div class="mb-4">
                            <input type="text" placeholder="Nhập số điện thoại" class="w-full p-2 border border-gray-300 rounded">
                        </div>

                        <div class="relative mt-4">
                            <p class="text-gray-600">Giới tính</p>
                            <div class="flex items-center my-2">
                                <input type="radio" id="male" name="gender" value="male" class="mr-2">
                                <label for="male" class="mr-4">Nam</label>
                                <input type="radio" id="female" name="gender" value="female" class="mr-2 ">
                                <label for="female">Nữ</label>
                                <input type="radio" id="female" name="gender" value="female" class="ml-4">
                                <label for="female">Khác</label>
                            </div>
                        </div>
                        
                        <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                            <div class="flex space-x-2">
                                <select id="day" class="w-1/3 p-2 border border-gray-300 rounded" v-model="date.day" ref="daySelect">
                                    <option value="">Ngày</option>
                                </select>
                                <select id="month" class="w-1/3 p-2 border border-gray-300 rounded" v-model="date.month" ref="monthSelect">
                                    <option value="">Tháng</option>
                                </select>
                                <select id="year" class="w-1/3 p-2 border border-gray-300 rounded" v-model="date.year" ref="yearSelect">
                                    <option value="">Năm</option>
                                </select>
                            </div>
                        </div>
                    
                        <div class="mb-4 mt-4">
                            <input type="password" placeholder="Mật khẩu" class="w-full p-2 border border-gray-300 rounded">
                        </div>
                        <div class="mb-4">
                            <input type="password" placeholder="Nhập lại mật khẩu" class="w-full p-2 border border-gray-300 rounded">
                        </div>
                        <div class="text-center">
                            <button class="bg-[#4ce274] text-white py-2 px-4 rounded hover:bg-green-500">Đăng Ký</button>
                        </div>
                    </div> 
                </form>
            </div>       
        </div>
    </section>
</template>
<script>
import { ref,defineComponent } from 'vue'
import "../../assets/css/form.css"

export default defineComponent({
    name: "RegisterComponent",
    data(){
        const date = {
            day: ref(null),
            month: ref(null),
            year: ref(null)
        }

        return {
            date
        }
    },
    mounted() {
        this.populateDateFields();
    },
    methods: {
        populateDateFields() {

            const daySelect = this.$refs.daySelect;
            const monthSelect = this.$refs.monthSelect;
            const yearSelect = this.$refs.yearSelect;

            for (let i = 1; i <= 31; i++) {
                const option = document.createElement("option");
                option.value = i;
                option.text = i;
                daySelect.appendChild(option);
            }

            for (let i = 1; i <= 12; i++) {
                const option = document.createElement("option");
                option.value = i;
                option.text = i;
                monthSelect.appendChild(option);
            }

            const currentYear = new Date().getFullYear();
            for (let i = currentYear; i >= 1900; i--) {
                const option = document.createElement("option");
                option.value = i;
                option.text = i;
                yearSelect.appendChild(option);
            }
        }
    }
})
</script>

