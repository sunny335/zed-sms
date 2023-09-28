
<script setup>
import { RouterLink } from 'vue-router'


</script>
<template>
    <section class="bg-white dark:bg-[#070F24]  pt-[95px] pb-[117px] lg:pt-10 lg:pb-[39px] flex justify-center items-center">
        <div
            class="max-w-[336px] lg:max-w-[696px] h-[400px] px-5 py-[100px] lg:px-[200px] lg:py-[100px] bg-white  dark:bg-[#09132C] rounded-3xl shadow-none lg:shadow-custom flex-col justify-start items-start gap-[30px] inline-flex">
            <div class="flex-col justify-start items-start gap-0.5 flex">
                <div class="flex-col justify-start items-start flex">
                    <div
                        class="text-black   dark:text-[#F5F5F5] text-opacity-90 text-xl font-medium font-['Poppins'] leading-loose tracking-tight">
                        Confirm your email address</div>
                </div>
                <div class="text-black   dark:text-[#F5F5F5] text-opacity-90 text-sm font-normal font-['Poppins'] leading-tight tracking-tight">
                    Please check your email for the next step.</div>
            </div>
            <RouterLink to="/logIn"
                class="max-w-[296px] w-full h-12 py-[3px] bg-gray-900 dark:bg-zinc-600 rounded-[10px] flex-col justify-center items-center inline-flex">
                <div class="px-[22px] py-2 flex-col justify-start items-start gap-2 flex">
                    <div class="justify-start items-center gap-2 inline-flex">
                        <div
                            class="text-white text-[15px] font-medium font-['Poppins'] uppercase leading-relaxed tracking-wide">
                            BACK to login</div>
                    </div>
                </div>
            </RouterLink>
            <RouterLink
            to="/reset-password-new"
                class="max-w-[296px] w-full h-12 py-[3px] bg-[#0057FF] rounded-[10px] flex-col justify-center items-center inline-flex">
                <div class="px-[22px] py-2 flex-col justify-start items-start gap-2 flex">
                    <div class="justify-start items-center gap-2 inline-flex">
                        <div
                            class="text-white text-[15px] font-medium font-['Poppins'] uppercase leading-relaxed tracking-wide">
                            contact Support</div>
                    </div>
                </div>
            </RouterLink>
        </div>
</section></template>