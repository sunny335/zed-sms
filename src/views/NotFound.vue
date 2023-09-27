<script setup>
import { RouterLink } from 'vue-router'


</script>

 
<template>
    <section class="bg-white dark:bg-[#070F24]  mt-[206px] mb-[220px] lg:mt-[103px] lg:mb-[118px] flex justify-center items-center">
        <div
            class="max-w-fit lg:max-w-[749px] max-h-fit lg:max-h-[460px] px-0 py-0 lg:px-[180px] lg:py-[140px] bg-white  dark:bg-slate-900 rounded-[30px] shadow-none lg:shadow-custom flex-col justify-start items-center inline-flex">
            <h4 class="text-neutral-800  dark:text-white text-[64px] lg:text-7xl font-medium font-['Poppins']  mb-0 lg:mb-[22px]">404</h4>
            <p class="text-center text-neutral-800  dark:text-white text-base lg:text-xl font-light font-['Poppins'] leading-loose mb-[24px]">Sorry, we were unable
                to find that page</p>
            <button
                class="max-w-[189px] max-h-[52px] w-full py-3.5 bg-blue-600 rounded-[10px] justify-center items-center gap-1.5 inline-flex">
                <div class="text-center text-white text-base font-normal font-['Poppins'] leading-normal">Reload Again</div>
                <div class="w-6 h-6 relative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.364 8.05026L17.6569 7.34315C14.5327 4.21896 9.46734 4.21896 6.34315 7.34315C3.21895 10.4673 3.21895 15.5327 6.34315 18.6569C9.46734 21.7811 14.5327 21.7811 17.6569 18.6569C19.4737 16.84 20.234 14.3668 19.9377 12.0005M18.364 8.05026H14.1213M18.364 8.05026V3.80762"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            </button>





        </div>
    </section>
</template>