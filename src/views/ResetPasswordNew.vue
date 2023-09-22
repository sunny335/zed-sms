
<script setup>
import { RouterLink } from 'vue-router'


</script>
<template>
    <section class="bg-white pt-[97px] lg:pt-10 pb-[105px] lg:pb-[39px] flex justify-center items-center">
        <div
            class="max-w-[342.50px] lg:max-w-[786px] max-h-[486px] px-3.5 py-[60px]  lg:px-[220px] lg:py-[90px] bg-white rounded-3xl shadow-none lg:shadow-custom flex-col justify-start items-start gap-[34px] inline-flex">
           <div>
            <h4 class="text-neutral-800 text-xl font-medium font-['Poppins'] leading-loose tracking-tight">Reset your
                password?</h4>
            <p class="text-neutral-800 text-sm font-light font-['Poppins'] leading-tight tracking-tight">Type in your
                registered email address or username.</p>
           </div>

            <form>
                <input
                    class="max-w-[345px] w-full h-[56px] px-[16px] py-[8px] rounded-lg border border-neutral-800 flex-col justify-start items-start inline-flex"
                    placeholder="New Password" type="text" />
                <input
                    class="max-w-[345px] w-full h-[56px] px-[16px] py-[8px] rounded-lg border border-neutral-800 flex-col justify-start items-start inline-flex mt-[30px]"
                    placeholder="Confirm New Password" type="password" />


            <div class="flex justify-between items-center mt-[30px] gap-4">
                <RouterLink to="/logIn"
                    class="max-w-[200px] max-h-[46px] w-full py-0.5 bg-neutral-800 rounded-[10px] flex-col justify-center items-center inline-flex">
                    <div class="px-[22px] py-2 flex-col justify-start items-start gap-2 flex">
                        <div class="justify-start items-center gap-2 inline-flex">
                            <div
                                class="text-white text-[15px] font-normal font-['Poppins'] uppercase leading-relaxed tracking-wide">
                                BACK to login</div>
                        </div>
                    </div>
                </RouterLink>
                <RouterLink
                to="/confirm-email"
                    class="max-w-[114px] max-h-[46px] w-full px-2.5 py-0.5 bg-blue-600 rounded-[10px] flex-col justify-center items-center inline-flex">
                    <div class="px-[22px] py-2 flex-col justify-start items-start gap-2 flex">
                        <div class="justify-start items-center gap-2 inline-flex">
                            <div
                                class="text-white text-[15px] font-normal font-['Poppins'] uppercase leading-relaxed tracking-wide">
                                Reset</div>
                            <div class="h-[22px] flex-col justify-center items-center inline-flex">
                                <div class="w-6 h-6 relative flex-col justify-start items-start flex">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                            fill="white" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
            </form>




        </div>
</section></template>