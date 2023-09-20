
<script setup>
// import { RouterLink } from 'vue-router'
import google from '../assets/img/google.png';
import fb from '../assets/img/fb.jpg';
import apple from '../assets/img/apple.png';

</script>
<template>
    <!--
      Heads up! 👋
    
      Plugins:
        - @tailwindcss/forms
    -->

    <section class="bg-white py-10 flex justify-center items-center">
        <div
            class="w-[1112px] h-[687px] px-[120px] py-10 bg-white rounded-[30px] shadow flex-col justify-start items-center gap-[50px] inline-flex">
            <h2 class="text-center text-neutral-800 text-[32px] font-medium font-['Poppins']">Log in</h2>
            <div class="flex">
                <div>
                    <form>
                        <div class="max-w-[354px]">
                            <label class="text-zinc-600 text-base font-normal font-['Poppins']">Email or Username</label>
                            <input type="text" class="w-[354px] h-14 relative rounded-xl border border-gray-400 mt-2" />
                        </div>
                        <div class="max-w-[354px] mt-4">
                            <div class="flex justify-between items-center">
                                <label class="text-zinc-600 text-base font-normal font-['Poppins'] block ">Password</label>
                                <div class="flex items-center gap-2">
                                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group 1">
                                            <path id="Vector"
                                                d="M17.0194 0.881092L16.2835 0.145149C16.0755 -0.0628416 15.6915 -0.0308325 15.4515 0.257113L12.8913 2.80108C11.7392 2.30514 10.4754 2.06514 9.14731 2.06514C5.19519 2.08107 1.77141 4.38504 0.12329 7.69725C0.0272626 7.90524 0.0272626 8.16117 0.12329 8.33716C0.891223 9.90518 2.04329 11.2012 3.4833 12.1772L1.3873 14.3051C1.1473 14.5451 1.11529 14.9291 1.27534 15.1371L2.01128 15.8731C2.21928 16.081 2.60326 16.049 2.84326 15.7611L16.8912 1.71321C17.1952 1.47334 17.2272 1.08938 17.0192 0.881366L17.0194 0.881092ZM9.9953 5.71298C9.72329 5.64896 9.43534 5.56901 9.16332 5.56901C7.80327 5.56901 6.71538 6.65703 6.71538 8.01694C6.71538 8.28895 6.7794 8.57689 6.85935 8.84892L5.78724 9.90495C5.46728 9.34499 5.2913 8.72089 5.2913 8.01697C5.2913 5.88899 7.00332 4.17697 9.1313 4.17697C9.83536 4.17697 10.4593 4.35295 11.0193 4.67291L9.9953 5.71298Z"
                                                fill="#495057" />
                                            <path id="Vector_2"
                                                d="M18.1714 7.69743C17.6114 6.57738 16.8753 5.56945 15.9634 4.75342L12.9874 7.69743V8.01738C12.9874 10.1454 11.2754 11.8574 9.14739 11.8574H8.82744L6.93945 13.7454C7.64351 13.8893 8.37946 13.9854 9.09946 13.9854C13.0516 13.9854 16.4754 11.6814 18.1235 8.35325C18.2675 8.12918 18.2675 7.90527 18.1714 7.69726L18.1714 7.69743Z"
                                                fill="#495057" />
                                        </g>
                                    </svg>
                                    <span>
                                        Hide
                                    </span>

                                </div>
                            </div>
                            <input type="password" class="w-[354px] h-14 relative rounded-xl border border-gray-400 mt-2" />
                        </div>
                        <div class="">
                            <label for="" class="flex gap-4  justify-between items-start my-5">
                                <div class="flex gap-4 items-start">
                                    <input type="checkbox" class="border-gray-300 rounded h-5 w-5 mt-1" />

                                    <p class="text-zinc-600 text-base font-light font-['Poppins']">Remember me</p>
                                </div>
                                <div class="text-right text-zinc-600 text-base font-light font-['Poppins'] underline">Forget
                                    password!</div>
                            </label>
                        </div>
                        <div
                            class="max-w-[354px] max-h-[58px] px-[142px] py-[11px] bg-blue-600 rounded-[14px] justify-center items-center gap-2.5 inline-flex">
                            <div class="text-center text-white text-2xl font-normal font-['Poppins']">Log in</div>
                        </div>
                    </form>
                    <div class="mt-[24px]"><span class="text-zinc-600 text-base font-normal font-['Poppins']">Don’t have an
                            ccount? </span><span class="text-zinc-600 text-base font-normal font-['Poppins'] underline">Sign
                            up </span></div>
                </div>
                <div class="max-w-[301px] h-6  -rotate-90 justify-start items-center gap-[23px] inline-flex">
                    <div class="grow shrink basis-0 h-px bg-gray-400"></div>
                    <div class="origin-top-left rotate-90 text-neutral-800 text-base font-normal font-['Avenir']">OR</div>
                    <div class="grow shrink basis-0 h-px bg-gray-400"></div>
                </div>
                <div>
                    <div
                        class="max-w-[354px] max-h-[60px] pl-[67.50px] pr-[68.50px] pt-[17.50px] pb-[18.50px] bg-white rounded-[14px] border border-neutral-800 justify-center items-center inline-flex mb-[30px]">
                        <div class="self-stretch justify-center items-center gap-5 inline-flex">
                            <div class="w-6 h-6 relative">
                                <img :src="google" alt="" srcset="">
                            </div>
                            <div class="text-neutral-800 text-base font-light font-['Poppins']">Continue with Google</div>
                        </div>
                    </div>
                    <div
                        class="max-w-[354px] max-h-[60px] pl-[57.50px] pr-[57.50px] pt-[17.50px] pb-[18.50px] bg-white rounded-[14px] border border-neutral-800 justify-center items-center inline-flex mb-[30px]">
                        <div class="self-stretch justify-center items-center gap-5 inline-flex">
                            <div class="w-6 h-6 relative">
                                <img :src="fb" alt="" srcset="">
                            </div>
                            <div class="text-neutral-800 text-base font-light font-['Poppins']">Continue with Facebook</div>
                        </div>
                    </div>
                    <div
                        class="max-w-[354px] max-h-[60px] pl-[62.5px] pr-[62.50px] pt-[17.50px] pb-[18.50px] bg-white rounded-[14px] border border-neutral-800 justify-center items-center inline-flex mb-[30px]">
                        <div class="self-stretch justify-center items-center gap-5 inline-flex">
                            <div class="w-6 h-6 relative">
                                <img :src="apple" alt="" srcset="">
                            </div>
                            <div class="text-neutral-800 text-base font-light font-['Poppins']">Continue with Apple ID</div>
                        </div>
                    </div>
                    <div
                        class="max-w-[354px] max-h-[60px] px-[92px] pt-[18.50px] pb-[17.50px] bg-white rounded-[14px] border border-neutral-800 justify-center items-center inline-flex mb-[30px]">
                        <div class="self-stretch justify-center items-center gap-4 inline-flex">
                            <div class="text-neutral-800 text-base font-light font-['Poppins']">Continue with Others</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>