<script setup>
import paymentFailed from "../../assets/img/payment/paymentFailed.png"

</script>

<template>
    <section
        class="bg-white  dark:bg-[#070F24]  mt-10 mb-[102px]  lg:py-10 px-0 pt-21 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1192px] md:px-24 lg:px-8 pb-0 lg:mb-[145px] lg:mt-[128px]">
        <div class="flex flex-col-reverse lg:flex-row items-center justify-center gap-[80px] lg:gap-[43px]">
            <img class="max-w-[300px] lg:max-w-[500px] mx-auto" :src=paymentFailed alt="" srcset="">
            <div
                class="max-w-[482px] w-full max-h-[363px] px-[20px] py-10 lg:px-10 lg:py-10 bg-neutral-50 lg:bg-white   dark:bg-[#09132C] rounded-none lg:rounded-3xl shadow-none lg:shadow-custom flex-col justify-start items-center  inline-flex">

                <svg class="mb-[20px]" width="106" height="105" viewBox="0 0 106 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M96.75 52.5c0 24.162-19.588 43.75-43.75 43.75-24.163 0-43.75-19.588-43.75-43.75C9.25 28.337 28.837 8.75 53 8.75c24.162 0 43.75 19.587 43.75 43.75ZM39.742 39.242a3.281 3.281 0 0 1 4.64 0L53 47.86l8.617-8.618a3.281 3.281 0 0 1 4.64 4.64L57.64 52.5l8.617 8.617a3.281 3.281 0 0 1-4.64 4.64L53 57.14l-8.617 8.618a3.281 3.281 0 0 1-4.64-4.64l8.616-8.618-8.617-8.617a3.281 3.281 0 0 1 0-4.64Z"
                        fill="#DD2C00" />
                </svg>


                <h2 class="text-neutral-800 dark:text-white text-[28px] font-medium font-['Poppins'] leading-[34.58px] tracking-tight mb-[10px]">
                    Payment Failed</h2>
                <p class="text-center text-zinc-600 dark:text-white w-full px-2 text-base font-normal font-['Poppins'] leading-tight tracking-tight mb-[40px]">Your payment of
                    $23.25 was unfortunately failed.</p>
                <div
                    class="max-w-[258px] h-[53px] px-20 py-3.5 rounded-xl justify-center items-center gap-2.5 inline-flex cursor-pointer border border-[#0057FF]  bg-[#0057FF]  text-white dark:text-[#F5F5F5] hover:border-[#0057FF] hover:bg-[#F5F5F5] hover:text-[#0057FF] dark:hover:bg-white dark:hover:text-[#0057FF]">
                    <p class=" text-xl font-medium font-['Poppins'] leading-normal tracking-tight">Try Again</p>
                </div>
            </div>
    </div>
</section></template>