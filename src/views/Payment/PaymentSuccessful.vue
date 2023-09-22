<script setup>
import paymentSuccessful from "../../assets/img/payment/paymentSuccessful.png"

</script>

<template>
    <section
        class="bg-white py-6 lg:py-10 px-0 pt-21 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1192px] md:px-24 lg:px-8 pb-0 lg:pb-[145px] lg:pt-[128px]">
        <div class="flex flex-col-reverse lg:flex-row items-center justify-center gap-[109px]">
            <img class="max-w-[300px] lg:max-w-[400px]" :src=paymentSuccessful alt="" srcset="">
            <div
                class="max-w-[511px] h-[358px] px-[20px] py-10 lg:px-10 lg:py-10 bg-neutral-50 lg:bg-white rounded-none lg:rounded-3xl shadow-none lg:shadow-custom flex-col justify-start items-center  inline-flex">

                <svg class="mb-[20px]" width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M100.5 50C100.5 77.6142 78.1142 100 50.5 100C22.8858 100 0.5 77.6142 0.5 50C0.5 22.3858 22.8858 0 50.5 0C78.1142 0 100.5 22.3858 100.5 50ZM70.6516 34.8484C72.1161 36.3128 72.1161 38.6872 70.6516 40.1516L45.6517 65.1517C44.1872 66.6161 41.8128 66.6161 40.3484 65.1517L30.3483 55.1517C28.8839 53.6872 28.8839 51.3128 30.3483 49.8483C31.8128 48.3839 34.1872 48.3839 35.6516 49.8483L43 57.1967L54.1742 46.0225L65.3483 34.8484C66.8128 33.3839 69.1872 33.3839 70.6516 34.8484Z"
                        fill="#0057FF" />
                </svg>
                <h2 class="text-neutral-800 text-xl lg:text-[28px] font-medium font-['Poppins'] leading-[34.58px] tracking-tight mb-[10px]">
                    Payment Successful</h2>
                <p class="text-center text-zinc-600 text-sms lg:text-base font-normal font-['Poppins'] leading-tight tracking-tight mb-[40px]">Your payment of
                    $23.25 was successfully completed</p>
                <div
                    class="max-w-[189px] h-[53px] px-20 py-3.5 bg-blue-600 rounded-xl justify-center items-center gap-2.5 inline-flex cursor-pointer">
                    <p class="text-white text-xl font-medium font-['Poppins'] leading-normal tracking-tight">OK</p>
                </div>
            </div>
    </div>
</section></template>