
<script setup>
import { RouterLink } from 'vue-router'
import CommunityIcon from '../icons/IconCollections.vue'
const login = true;
const Theme = localStorage.getItem('Theme');
console.log(Theme)
</script>

<template>
    <header class="bg-white dark:bg-[#070F24] sticky top-0 z-20 "
    v-bind:class="{ 'shadow-custom':currentPath.includes('dashboard')}"
    >
        <div class="mx-auto max-w-[1192px] px-4 sm:px-6 lg:px-8 w-full">
            <div class="flex h-[116px] items-center justify-between gap-[24px]">
                <div class="flex-1 md:flex md:items-center md:gap-11">
                    <RouterLink class="block text-teal-600   dark:text-[#F5F5F5]" to="/">
                        <span class="sr-only">Home</span>
                        <CommunityIcon iconName="siteLogo" v-if="Theme === 'light'" />
                        <CommunityIcon iconName="siteLogoDark" v-if="Theme === 'dark'" />

                    </RouterLink>
                </div>

                <div v-if="!currentPath.includes('dashboard')" class="md:flex md:items-center md:gap-[42px]">
                    <nav aria-label="Global" class="hidden md:block">
                        <ul class="flex items-center gap-11 text-sm">
                            <li>
                                <RouterLink
                                    class="text-neutral-800   dark:text-[#F5F5F5] text-base font-normal font-['Poppins'] leading-normal transition hover:text-blue-600"
                                    to="/service">
                                    Our Service
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink
                                    class="text-neutral-800  dark:text-[#F5F5F5] text-base font-normal font-['Poppins'] leading-normal transition hover:text-blue-600"
                                    to="/about">
                                    About us
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink
                                    class="text-neutral-800  dark:text-[#F5F5F5] text-base font-normal font-['Poppins'] leading-normal transition hover:text-blue-600"
                                    to="/contact-us">
                                    Contact
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>

                    <div class="flex items-center gap-4" v-if="!login">
                        <div class="sm:flex sm:gap-5">
                            <div class="hidden sm:flex">
                                <RouterLink
                                    class="w-[101px] h-[37px] px-4 py-2.5 rounded-[10px] border border-blue-600 justify-center items-center inline-flex"
                                    to="/logIn">
                                    <span
                                        class="text-center text-neutral-800  dark:text-[#F5F5F5] text-sm font-normal font-['Poppins'] leading-[17px]">
                                        Sign In
                                    </span>
                                </RouterLink>
                            </div>
                            <RouterLink
                                class="w-24 h-[37px] px-4 py-2.5 bg-[#0057FF] rounded-[10px] justify-center items-end inline-flex"
                                to="/signUp">
                                <span class="text-center text-white text-sm font-medium font-['Poppins'] leading-[17px]">
                                    Sign Up
                                </span>
                            </RouterLink>


                            <div class="hidden md:block">
                                <HeaderDropdown :selectedLanguage="selectedLanguage"
                                    @update:selectedLanguage="updateSelectedLanguage" />
                            </div>
                        </div>

                        <div class="block md:hidden">
                            <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="md:flex md:items-center md:gap-[42px]" v-if="login">


                    <div class="flex items-center gap-4">
                        <div class="hidden sm:flex sm:gap-[24px]" >
                            <div
                                class="hidden sm:flex relative after:content-[''] after:w-[2px] after:absolute after:top-[6px] after:h-[10px] after:right-[-12px] after:bg-[#495057] dark:after:bg-[#ACB5BD]"  v-if="currentPath.includes('dashboard')" >
                                <svg v-if="Theme == 'light'"
                                    @click="[OpenNotificationModal = !OpenNotificationModal, this.OpenModal = false]"
                                    class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z"
                                        stroke="#1E2329" />
                                    <path d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                                        stroke="#1E2329" stroke-linecap="round" />
                                    <circle cx="17" cy="8" r="4.5" fill="#0057FF" stroke="white" />
                                </svg>

                                <svg v-if="Theme == 'dark'"
                                    @click="[OpenNotificationModal = !OpenNotificationModal, this.OpenModal = false]"
                                    class="cursor-pointer" width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.2491 9.70957V9.00497C19.2491 5.13623 16.2274 2 12.5 2C8.77256 2 5.75087 5.13623 5.75087 9.00497V9.70957C5.75087 10.5552 5.50972 11.3818 5.0578 12.0854L3.95036 13.8095C2.93882 15.3843 3.71105 17.5249 5.47036 18.0229C10.0727 19.3257 14.9273 19.3257 19.5296 18.0229C21.289 17.5249 22.0612 15.3843 21.0496 13.8095L19.9422 12.0854C19.4903 11.3818 19.2491 10.5552 19.2491 9.70957Z"
                                        stroke="#F5F5F5" />
                                    <path d="M8 19C8.65503 20.7478 10.4225 22 12.5 22C14.5775 22 16.345 20.7478 17 19"
                                        stroke="#F5F5F5" stroke-linecap="round" />
                                    <circle cx="17.5" cy="8" r="4.5" fill="#0057FF" stroke="#070F24" />
                                </svg>

                                <!-- Notification Dropdown -->
                                <div v-if="OpenNotificationModal"
                                    class="w-[369px] absolute z-10 right-0 top-[40px] h-[630px] px-[25px] py-5 bg-neutral-50 rounded-[30px] flex-col justify-start items-start gap-3.5 inline-flex">
                                    <div
                                        class="w-full pb-6 border-b border-gray-400 justify-center items-center gap-2.5 inline-flex">
                                        <div
                                            class="text-neutral-800   dark:text-[#F5F5F5] text-xl font-medium font-['Poppins']">
                                            Notification
                                        </div>
                                    </div>
                                    <div
                                        class="w-full max-h-[538px] scrollbar scroll-y-auto flex-col justify-start items-start flex pr-[10px]">
                                        <div
                                            class="self-stretch py-5 border-b border-zinc-200 justify-start items-start gap-5 inline-flex">
                                            <div
                                                class="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                                                <div
                                                    class="self-stretch justify-between items-center gap-[15px] inline-flex">
                                                    <div
                                                        class="text-neutral-900 text-sm font-normal font-['Poppins'] leading-[17px]">
                                                        Transaction successful</div>
                                                    <div
                                                        class="text-neutral-900 text-xs font-light font-['Poppins'] leading-[18.89px]">
                                                        02 days ago</div>
                                                </div>
                                                <div class="self-stretch"><span
                                                        class="text-zinc-600 text-xs font-light font-['Poppins'] leading-tight">Lorem
                                                        ipsum dolor sit amet consectetur adipiscing elit interdum Lorem
                                                        ipsum dolor sit amet consectetur adipiscing.<br />Elit interdum
                                                        ullamcorper amet consectetur sed pharetra ipsum sene adipiscing elit
                                                        interdum </span><span
                                                        class="text-zinc-600 text-xs font-medium font-['Poppins'] leading-tight">CODE:
                                                        65469</span><span
                                                        class="text-zinc-600 text-xs font-normal font-['Poppins'] leading-tight">.</span><span
                                                        class="text-zinc-600 text-xs font-light font-['Poppins'] leading-tight">.
                                                        ..</span><span
                                                        class="text-zinc-600 text-xs font-normal font-['Poppins'] leading-tight">
                                                    </span><span
                                                        class="text-blue-600 text-xs font-medium font-['Poppins'] leading-tight">Less
                                                        🡡</span></div>
                                            </div>
                                        </div>
                                        <div
                                            class="self-stretch py-5 border-b border-zinc-200 justify-start items-start gap-3.5 inline-flex">
                                            <div
                                                class="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                                                <div
                                                    class="self-stretch justify-between items-center gap-[15px] inline-flex">
                                                    <div
                                                        class="text-zinc-500 text-sm font-normal font-['Poppins'] leading-[17px]">
                                                        Exclusive offer inside</div>
                                                    <div
                                                        class="text-zinc-500 text-xs font-light font-['Poppins'] leading-[18.89px]">
                                                        02 days ago</div>
                                                </div>
                                                <div class="self-stretch"><span
                                                        class="text-zinc-500 text-xs font-light font-['Poppins'] leading-[18.89px]">Adipiscing
                                                        elit interdum</span><span
                                                        class="text-zinc-500 text-xs font-normal font-['Poppins'] leading-[18.89px]">
                                                    </span><span
                                                        class="text-zinc-500 text-xs font-medium font-['Poppins'] leading-[18.89px]">CODE:
                                                        65469</span></div>
                                            </div>
                                        </div>
                                        <div
                                            class="self-stretch py-5 border-b border-zinc-200 justify-start items-start gap-3.5 inline-flex">
                                            <div
                                                class="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                                                <div
                                                    class="self-stretch justify-between items-center gap-[15px] inline-flex">
                                                    <div
                                                        class="text-neutral-900 text-sm font-normal font-['Poppins'] leading-[17px]">
                                                        Message forward request</div>
                                                    <div
                                                        class="text-neutral-900 text-xs font-light font-['Poppins'] leading-[18.89px]">
                                                        02 days ago</div>
                                                </div>
                                                <div class="self-stretch"><span
                                                        class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[18.89px]">Lorem
                                                        ipsum dolor sit amet consectetur adipiscing elit
                                                        interdum</span><span
                                                        class="text-blue-600 text-xs font-normal font-['Poppins'] leading-[18.89px]">
                                                        . .. </span><span
                                                        class="text-blue-600 text-xs font-medium font-['Poppins'] leading-[18.89px]">More
                                                        🡣</span></div>
                                            </div>
                                        </div>
                                        <div
                                            class="self-stretch py-5 border-b border-zinc-200 justify-start items-start gap-3.5 inline-flex">
                                            <div
                                                class="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                                                <div
                                                    class="self-stretch justify-between items-center gap-[15px] inline-flex">
                                                    <div
                                                        class="text-zinc-500 text-sm font-normal font-['Poppins'] leading-[17px]">
                                                        New sim added</div>
                                                    <div
                                                        class="text-zinc-500 text-xs font-light font-['Poppins'] leading-[18.89px]">
                                                        02 days ago</div>
                                                </div>
                                                <div class="self-stretch"><span
                                                        class="text-zinc-500 text-xs font-light font-['Poppins'] leading-[18.89px]">Lorem
                                                        ipsum dolor sit amet consectetur adipiscing elit
                                                        interdum</span><span
                                                        class="text-zinc-500 text-xs font-normal font-['Poppins'] leading-[18.89px]">
                                                        . .. </span><span
                                                        class="text-zinc-500 text-xs font-medium font-['Poppins'] leading-[18.89px]">More
                                                        🡣</span></div>
                                            </div>
                                        </div>
                                        <div class="self-stretch py-5 justify-start items-start gap-3.5 inline-flex">
                                            <div
                                                class="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                                                <div
                                                    class="self-stretch justify-between items-center gap-[15px] inline-flex">
                                                    <div
                                                        class="text-zinc-600 text-sm font-normal font-['Poppins'] leading-[17px]">
                                                        Payment failed </div>
                                                    <div
                                                        class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[18.89px]">
                                                        02 days ago</div>
                                                </div>
                                                <div class="self-stretch"><span
                                                        class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[18.89px]">Bdipiscing
                                                        elit interdum</span><span
                                                        class="text-zinc-600 text-xs font-normal font-['Poppins'] leading-[18.89px]">
                                                    </span><span
                                                        class="text-blue-600 text-xs font-normal font-['Poppins'] leading-[18.89px]">.
                                                        .. </span><span
                                                        class="text-blue-600 text-xs font-medium font-['Poppins'] leading-[18.89px]">More
                                                        🡣</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div
                                class=" justify-center items-center inline-flex gap-[9px] relative after:content-[''] after:w-[2px] after:absolute after:top-[6px] after:h-[10px] after:right-[-12px] after:bg-[#495057] dark:after:bg-[#ACB5BD]"  v-if="currentPath.includes('dashboard')" >
                                <svg v-if="Theme == 'light'" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 8H10" stroke="#1E2329" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M20.8333 9H18.2308C16.4465 9 15 10.3431 15 12C15 13.6569 16.4465 15 18.2308 15H20.8333C20.9167 15 20.9583 15 20.9935 14.9979C21.5328 14.965 21.9623 14.5662 21.9977 14.0654C22 14.0327 22 13.994 22 13.9167V10.0833C22 10.006 22 9.96726 21.9977 9.9346C21.9623 9.43384 21.5328 9.03496 20.9935 9.00214C20.9583 9 20.9167 9 20.8333 9Z"
                                        stroke="#1E2329" />
                                    <path
                                        d="M20.965 9C20.8873 7.1277 20.6366 5.97975 19.8284 5.17157C18.6569 4 16.7712 4 13 4L10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13C16.7712 20 18.6569 20 19.8284 18.8284C20.6366 18.0203 20.8873 16.8723 20.965 15"
                                        stroke="#1E2329" />
                                    <path d="M17.9912 12H18.0002" stroke="#1E2329" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <svg v-if="Theme == 'dark'" width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 8H10.5" stroke="#F5F5F5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M21.3333 9H18.7308C16.9465 9 15.5 10.3431 15.5 12C15.5 13.6569 16.9465 15 18.7308 15H21.3333C21.4167 15 21.4583 15 21.4935 14.9979C22.0328 14.965 22.4623 14.5662 22.4977 14.0654C22.5 14.0327 22.5 13.994 22.5 13.9167V10.0833C22.5 10.006 22.5 9.96726 22.4977 9.9346C22.4623 9.43384 22.0328 9.03496 21.4935 9.00214C21.4583 9 21.4167 9 21.3333 9Z"
                                        stroke="#F5F5F5" />
                                    <path
                                        d="M21.465 9C21.3873 7.1277 21.1366 5.97975 20.3284 5.17157C19.1569 4 17.2712 4 13.5 4L10.5 4C6.72876 4 4.84315 4 3.67157 5.17157C2.5 6.34315 2.5 8.22876 2.5 12C2.5 15.7712 2.5 17.6569 3.67157 18.8284C4.84315 20 6.72876 20 10.5 20H13.5C17.2712 20 19.1569 20 20.3284 18.8284C21.1366 18.0203 21.3873 16.8723 21.465 15"
                                        stroke="#F5F5F5" />
                                    <path d="M18.4922 12H18.5012" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                                <div
                                    class="text-neutral-800 dark:text-[#F5F5F5] text-xl font-light font-['Poppins'] leading-[17px]">
                                    $00.00
                                </div>

                            </div>

                            <div class="flex gap-[9px] relative items-center">
                                <div class="flex gap-[9px] relative cursor-pointer after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:content-[''] after:z-10" @click="handleModalOpen(true)">
                                    <svg v-if="Theme === 'light'" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="9" r="3" stroke="#1E2329" />
                                        <circle cx="12" cy="12" r="10" stroke="#1E2329" />
                                        <path
                                            d="M17.9691 20C17.81 17.1085 16.9247 15 12 15C7.07521 15 6.18991 17.1085 6.03076 20"
                                            stroke="#1E2329" stroke-linecap="round" />
                                    </svg>
                                    <svg v-if="Theme === 'dark'" width="25" height="24" viewBox="0 0 25 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="9" r="3" stroke="#F5F5F5" />
                                        <circle cx="12.5" cy="12" r="10" stroke="#F5F5F5" />
                                        <path
                                            d="M18.4696 20C18.3105 17.1085 17.4252 15 12.5004 15C7.5757 15 6.6904 17.1085 6.53125 20"
                                            stroke="#F5F5F5" stroke-linecap="round" />
                                    </svg>

                                    <span>
                                        ahmad
                                    </span>
                                <div >
                                    <svg  class="downArrow block" width="20" height="20" viewBox="0 0 20 20" fill="none"  v-if="!OpenModal"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8333 7.5L9.99996 12.5L4.16663 7.5" stroke="#1E2329" stroke-width="1.1"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
 
                                    <svg class="downArrow" width="20" height="20" viewBox="0 0 24 24" fill="none" v-if="OpenModal"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 15L12 9L19 15" stroke="#495057" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>


                                </div>
                                <!-- profile link dropdown -->
                                <div v-if="OpenModal" @click="handleModalOpen(true)"
                                    class="absolute z-10 right-0 top-[40px] shadow w-[232px] h-[448px] bg-neutral-50 rounded-[14px] flex-col justify-start items-start inline-flex">
                                    <RouterLink to="/dashboard"
                                        class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                                        <div class="text-neutral-800 text-base font-light font-['Poppins']">My Dashboard
                                        </div>
                                    </RouterLink>
                                    <RouterLink to="/dashboard/my-number"
                                        class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                                        <div class="text-neutral-800 text-base font-light font-['Poppins']">My Number</div>
                                    </RouterLink>
                                    <RouterLink to="/dashboard/topup-balance"
                                        class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                                        <div class="text-neutral-800 text-base font-light font-['Poppins']">TOP-UP Balance
                                        </div>
                                    </RouterLink>
                                    <RouterLink to="/dashboard/balance-transfer"
                                        class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                                        <div class="text-neutral-800 text-base font-light font-['Poppins']">Transaction
                                            History</div>
                                    </RouterLink>
                                    <RouterLink to="/dashboard/appearance"
                                        class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                                        <div class="text-neutral-800 text-base font-light font-['Poppins']">API Connection
                                        </div>
                                    </RouterLink>
                                    <RouterLink to="/dashboard/account-settings"
                                        class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                                        <div class="text-neutral-800 text-base font-light font-['Poppins']">Account setting
                                        </div>
                                    </RouterLink>
                                    <div class="self-stretch px-10 py-5 justify-start items-center gap-2.5 inline-flex">
                                        <div class="text-neutral-800 text-base font-light font-['Poppins']">Logout</div>
                                        <div
                                            class="w-5 h-5 relative rounded-[5px] flex-col justify-start items-start inline-flex">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 16.6667C6.3181 16.6667 3.33333 13.6819 3.33333 9.99999C3.33333 6.3181 6.3181 3.33333 10 3.33333"
                                                    stroke="#1E2329" stroke-linecap="round" />
                                                <path d="M8.33317 10H16.6665M16.6665 10L14.1665 7.5M16.6665 10L14.1665 12.5"
                                                    stroke="#1E2329" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>



                            </div>


                        </div>

                        <div class="block md:hidden">
                            <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </header>
</template>

<script>



import HeaderDropdown from './DropDownLanguage.vue';

export default {
    components: {
        HeaderDropdown,
    },
    data() {
        return {
            selectedLanguage: 'English', // Initialize with an empty string or a default language
            OpenModal: false,
            OpenNotificationModal: false,
            currentPath: this.$route.path,
        };
    },
    created() {
        // Close the profile popup on outside click
        window.addEventListener("click", this.handleNotificationModalOpen);
    },
    beforeUnmount() {
        // Remove the event listener when the component is unmounted
        window.removeEventListener("click", this.handleNotificationModalOpen);
    },
    methods: {
        updateSelectedLanguage(language) {
            this.selectedLanguage = language; // Update the selected language when the event is emitted from HeaderDropdown
            // You can perform any additional actions based on the selected language here
        },
        handleModalOpen(open) {
            this.OpenModal = !this.OpenModal;
            this.OpenNotificationModal = false;

        },
        handleNotificationModalOpen(event) {
            if (!this.$el.contains(event.target)) {
                this.OpenNotificationModal = false;
                this.OpenModal = false;
            }


        },
    },
    watch: {
    $route(to, from) {
      // Update currentPath when the route changes
      this.currentPath = to.path;
    },
  },
};
</script>
<style>


header .router-link-exact-active {
    color: #0074d9 !important;
    text-decoration: underline;
    font-weight: 500;
}

body.dark .downArrow path{
    stroke:white;
}
</style>