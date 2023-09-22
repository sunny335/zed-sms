
<script setup>
import { RouterLink } from 'vue-router'
import google from '../assets/img/google.png';
import fb from '../assets/img/fb.jpg';
import apple from '../assets/img/apple.png';
import recaptcha from '../assets/img/google_recaptcha-official 2.png';

</script>
<template>
    <section class="bg-white pt-0 lg:pt-10 pb-[39px] flex justify-center items-center">
        <div
            class="min-w-[1112px] min-h-[687px] px-[120px] py-0 lg:py-10 bg-white rounded-none lg:rounded-[30px] shadow-none lg:shadow-custom flex-col justify-start items-center gap-[50px] inline-flex">
            <h2 class="text-left lg:text-center w-[40%] text-neutral-800 text-[32px] font-medium font-['Poppins']">Log in
            </h2>
            <div class="flex-col flex lg:flex-row justify-center items-center  w-full min-h-[381px]">
                <div>
                    <form>
                        <div class="max-w-[354px]">
                            <label class="text-zinc-600 text-base font-normal font-['Poppins']">Email or Username</label>
                            <input type="text" class="w-[354px] px-[16px] py-[8px] h-14 relative rounded-xl border border-gray-400 mt-2" />
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
                            <input type="password" class="w-[354px] px-[16px] py-[8px] h-14 relative rounded-xl border border-gray-400 mt-2" />
                        </div>
                        <div class="">
                            <label for="" class="flex gap-4  justify-between items-center my-5">
                                <div class="flex  justify-start items-center">
                                    <div class="inline-flex items-center">
                                        <label class="relative flex cursor-pointer items-center rounded-full p-3"
                                            for="checkbox-3" data-ripple-dark="true">
                                            <input type="checkbox"
                                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black checked:bg-black checked:before:bg-black hover:before:opacity-10"
                                                id="checkbox-3" defaultChecked />
                                            <div
                                                class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5"
                                                    viewBox="0 0 20 20" fill="currentColor" stroke="currentColor"
                                                    stroke-width="1">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </label>
                                    </div>

                                    <p class="text-zinc-600 text-base font-light font-['Poppins']">Remember me</p>
                                </div>
                                <RouterLink to="/reset-password"
                                    class="text-right text-zinc-600 text-base font-light font-['Poppins'] underline">Forget
                                    password!</RouterLink>
                            </label>
                        </div>
                        <button
                            class="max-w-[354px] max-h-[58px] w-full py-[11px] bg-blue-600 rounded-[14px] justify-center items-center gap-2.5 inline-flex">
                            <div class="text-center text-white text-2xl font-normal font-['Poppins']">Log in</div>
                        </button>
                    </form>
                    <div class="mt-[24px]"><span class="text-zinc-600 text-base font-normal font-['Poppins']">Don’t have an
                            ccount? </span><span class="text-zinc-600 text-base font-normal font-['Poppins'] underline">
                            <RouterLink to="/signUp"
                                class="text-right text-zinc-600 text-base font-light font-['Poppins'] underline">
                                Sign Up
                            </RouterLink>
                        </span></div>
                </div>

                <div class="hidden lg:block">
                    <div class="flex flex-col items-center justify-center px-[81px]">
                        <div class="h-[116.50px] w-[2px] bg-gray-400"></div>
                        <p class=" text-neutral-800 text-base font-normal font-['Poppins'] py-2">OR</p>
                        <div class="h-[116.50px] w-[2px] bg-gray-400"></div>
                    </div>
                </div>
                <div class="block lg:hidden mt-10 mx-12">
                    <div class="flex  items-center justify-center ">
                        <div class="w-[124px] h-[1px] bg-gray-400"></div>
                        <p class=" text-neutral-800 text-base font-normal font-['Poppins'] px-6">OR</p>
                        <div class="w-[124px] h-[1px] bg-gray-400"></div>
                    </div>

                </div>

                <div class="max-w-[354px] max-h-full mt-[50px]">
                    <button
                        class="max-w-[354px] max-h-[60px] w-full  pt-[17.50px] pb-[18.50px] bg-white rounded-[14px] border border-neutral-800 justify-center items-center inline-flex mb-[30px]">
                        <div class="self-stretch justify-center items-center gap-5 inline-flex">
                            <div class="w-6 h-6 relative">
                                <img :src="google" alt="" srcset="">
                            </div>
                            <div class="text-neutral-800 text-base font-light font-['Poppins']">Continue with Google</div>
                        </div>
                    </button>
                    <button
                        class="max-w-[354px] max-h-[60px]  w-full  pt-[17.50px] pb-[18.50px] bg-white rounded-[14px] border border-neutral-800 justify-center items-center inline-flex mb-[30px]">
                        <div class="self-stretch justify-center items-center gap-5 inline-flex">
                            <div class="w-6 h-6 relative">
                                <img :src="fb" alt="" srcset="">
                            </div>
                            <div class="text-neutral-800 text-base font-light font-['Poppins']">Continue with Facebook</div>
                        </div>
                    </button>
                    <button
                        class="max-w-[354px] max-h-[60px] w-full  pt-[17.50px] pb-[18.50px] bg-white rounded-[14px] border border-neutral-800 justify-center items-center inline-flex mb-[30px]">
                        <div class="self-stretch justify-center items-center gap-5 inline-flex">
                            <div class="w-6 h-6 relative">
                                <img :src="apple" alt="" srcset="">
                            </div>
                            <div class="text-neutral-800 text-base font-light font-['Poppins']">Continue with Apple ID</div>
                        </div>
                    </button>
                    <button
                        class="max-w-[354px] max-h-[60px]  w-full  pt-[18.50px] pb-[17.50px] bg-white rounded-[14px] border border-neutral-800 justify-center items-center inline-flex mb-[30px]">
                        <div class="self-stretch justify-center items-center gap-4 inline-flex">
                            <div class="text-neutral-800 text-base font-light font-['Poppins']">Continue with Others</div>
                        </div>
                    </button>
                </div>
            </div>
            <!-- <div
                class="max-w-[363px] max-h-[68px] w-full px-2 pt-[11px] pb-[10.71px] rounded-[14px] border border-zinc-600 justify-center items-center gap-[124px] inline-flex">
                <div class="self-stretch justify-center items-center gap-2 inline-flex">
                    <div class="inline-flex items-center">
                        <label class="relative flex cursor-pointer items-center rounded-full p-3" for="checkbox-3"
                            data-ripple-dark="true">
                            <input type="checkbox"
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                                id="checkbox-3" defaultChecked />
                            <div
                                class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                    fill="currentColor" stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </label>
                    </div>
                    <div class="text-center text-zinc-600 text-base font-light font-['Poppins']">I’m not a robot</div>
                </div>
                <div class="w-12 h-[46.29px] relative flex-col justify-start items-start flex">
                    <img :src="recaptcha" alt="" srcset="">
                </div>
            </div> -->

        </div>
    </section>
</template>