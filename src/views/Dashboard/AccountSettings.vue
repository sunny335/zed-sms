<script setup>

import { RouterLink } from 'vue-router'

import balanceTransfer from "../../assets/img/balanceTransfer.png"





</script>

<template>
    <section class="max-w-[376px] lg:max-w-[584px] w-full h-[656px] px-[38px] lg:px-20 pt-0 lg:pt-10 pb-[50px] bg-white  dark:bg-[#09132C] rounded-3xl shadow-none mx-auto lg:shadow-custom ml-0 lg:ml-[147px] mb-[112px]">
        <h3 class="text-zinc-600  dark:text-[#F5F5F5]  text-xl font-medium font-['Poppins']">Account</h3>
        <form v-on:submit="onSubmit" class="mt-[26px] w-full">
            <div>

                <label class="text-zinc-600  dark:text-[#F5F5F5]  text-base font-normal font-['Poppins']">User Name</label>
                <input
                    class="max-w-[424px] h-[50px] w-full px-4 outline-none pt-[15px] pb-[11px] rounded-[10px] border border-zinc-600 mt-[10px] dark:bg-transparent"
                    type="text" placeholder="Ex: ahmad65" />


            </div>
            <div class="mt-[24px]">

                <label class="text-zinc-600  dark:text-[#F5F5F5]  text-base font-normal font-['Poppins']">Email</label>
                <input
                    class="max-w-[424px] h-[50px] w-full px-4 outline-none pt-[15px] pb-[11px] rounded-[10px] border border-zinc-600 mt-[10px] dark:bg-transparent"
                    type="email" placeholder="Ex: hello@zedsms.com" />


            </div>
            <div class="mt-[24px]">

                <label class="text-zinc-600  dark:text-[#F5F5F5]  text-base font-normal font-['Poppins']">Change Password/Old Password</label>
                <input
                    class="max-w-[424px] h-[50px] w-full px-4 outline-none pt-[15px] pb-[11px] rounded-[10px] border border-zinc-600 mt-[10px] dark:bg-transparent"
                    type="password" placeholder="***************" />


            </div>
            <div class="mt-[24px] flex gap-[24px] flex-col lg:flex-row">
                <div>

                    <label class="text-zinc-600  dark:text-[#F5F5F5]  text-base font-normal font-['Poppins'] block">New Password</label>
                    <input
                        class="max-w-[300px] lg:max-w-[200px] h-[50px] w-full px-4 outline-none pt-[15px] pb-[11px] rounded-[10px] border border-zinc-600 mt-[10px] dark:bg-transparent"
                        type="password" placeholder="***************" />


                </div>
                <div>

                    <label class="text-zinc-600  dark:text-[#F5F5F5]  text-base font-normal font-['Poppins'] block">Confirm Password</label>
                    <input
                        class="max-w-[300px] lg:max-w-[200px] h-[50px] w-full px-4 outline-none pt-[15px] pb-[11px] rounded-[10px] border border-zinc-600 mt-[10px] dark:bg-transparent"
                        type="password" placeholder="***************" />


                </div>

            </div>
            <div class="mt-[36px] flex  justify-end items-center">

                <button
                    class="max-w-[297px] h-[50px] w-full rounded-[14px] border border-blue-600 dark:bg-[#0057FF] justify-center items-center gap-2.5 inline-flex">
                    <div class="text-blue-600 dark:text-white text-xl font-normal font-['Poppins'] uppercase">Save</div>
                </button>
            </div>
        </form>
    </section>
</template>
<script >


export default {
    components: {

    },
    data() {

        return {




        }

    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
        }

    },
    computed: {

    },
};


</script>
