<script setup>

import { RouterLink } from 'vue-router'

import num1 from "../../assets/img/allNumber/1.png"
import num2 from "../../assets/img/allNumber/2.png"
import num3 from "../../assets/img/allNumber/3.png"
import num4 from "../../assets/img/allNumber/4.png"
import num5 from "../../assets/img/allNumber/5.png"
import num6 from "../../assets/img/allNumber/6.png"
import num7 from "../../assets/img/allNumber/7.png"
import Namepo from "../../assets/img/Message/Namepo.png"
import Viveon from "../../assets/img/Message/Viveon.png"
import Tiktok from "../../assets/img/Message/Tiktok.png"
import Burgking from "../../assets/img/Message/Burg king.png"
import Namepo2 from "../../assets/img/Message/Namepo.png"
import Viveon2 from "../../assets/img/Message/Viveon.png"




</script>

<template>
    <section class="pl-0 lg:pl-[54px] mb-[97px]">
        <div class="flex flex-col lg:flex-row gap-0 lg:gap-[82px]">
            <!-- All Number -->
            <div class="max-w-[339px] w-full mx-auto">
                <div class="max-w-[320px] h-[600px] mx-auto">
                    <div class="flex  items-center mb-[30px]">
                        <h3 class="text-neutral-800 text-xl font-normal font-['Poppins'] leading-[17px] pr-[16px]">All
                            Number</h3>
                        <ul
                            class="flex mb-0 list-none flex-row max-w-[168px]  rounded-xl border border-blue-600 overflow-hidden	 h-[37px]">
                            <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                                <a class="w-20 flex items-center justify-center text-center text-sm font-light font-['Poppins'] leading-[13px] 
                                 h-[37px] " v-on:click="toggleTabs(1)"
                                    v-bind:class="{ 'text-neutral-800 bg-white': openTab !== 1, 'text-white bg-blue-600': openTab === 1 }">
                                    Active
                                </a>
                            </li>
                            <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                                <a class="w-20 flex items-center justify-center text-center text-sm font-light font-['Poppins'] leading-[13px]  
                                 h-[37px] " v-on:click="toggleTabs(2)"
                                    v-bind:class="{ 'text-neutral-800 bg-white': openTab !== 2, 'text-white bg-blue-600': openTab === 2 }">
                                    Deactive
                                </a>
                            </li>

                        </ul>
                    </div>




                    <div
                        class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">
                        <div
                            class="w-full px-[2px] pt-[0px] pb-[30px] flex-col justify-start items-center gap-[30px] inline-flex overflow-y-auto scrollbar max-h-[448px]">
                            <div class="w-full">

                                <div class="tab-content tab-space w-full ">

                                    <!-- openTab  1-->
                                    <div class="w-full pr-[35px]"
                                        v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">


                                        <div class="flex justify-between items-center w-[270px] h-[58px]"
                                            v-for="numberData in numbersData" :key="numberData.id">
                                            <div class="flex items-center">
                                                <img class="pr-[10px]" :src="numberData.img" alt="" srcset="">
                                                <p
                                                    class="text-neutral-800 text-sm font-light font-['Poppins'] leading-[17px]">
                                                    +8454655444</p>
                                            </div>
                                            <button>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4"
                                                        stroke="#1E2329" stroke-linecap="round" />
                                                    <path d="M20.5001 6H3.5" stroke="#1E2329" stroke-linecap="round" />
                                                    <path
                                                        d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                                                        stroke="#1E2329" stroke-linecap="round" />
                                                    <path d="M9.5 11L10 16" stroke="#1E2329" stroke-linecap="round" />
                                                    <path d="M14.5 11L14 16" stroke="#1E2329" stroke-linecap="round" />
                                                </svg>
                                            </button>

                                        </div>

                                    </div>
                                    <!-- openTab  2-->
                                    <div class="w-full pr-[35px]"
                                        v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">


                                        <div class="flex justify-between items-center w-[270px] h-[58px]"
                                            v-for="number2Data in numbers2Data" :key="number2Data.id">
                                            <div class="flex items-center">
                                                <img class="pr-[10px]" :src="number2Data.img" alt="" srcset="">
                                                <p
                                                    class="text-neutral-800 text-sm font-light font-['Poppins'] leading-[17px]">
                                                    {{ number2Data.number }}</p>
                                            </div>
                                            <button>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4"
                                                        stroke="#1E2329" stroke-linecap="round" />
                                                    <path d="M20.5001 6H3.5" stroke="#1E2329" stroke-linecap="round" />
                                                    <path
                                                        d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                                                        stroke="#1E2329" stroke-linecap="round" />
                                                    <path d="M9.5 11L10 16" stroke="#1E2329" stroke-linecap="round" />
                                                    <path d="M14.5 11L14 16" stroke="#1E2329" stroke-linecap="round" />
                                                </svg>
                                            </button>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <!-- Number Details -->
            <div class="max-w-[337px] w-full mx-auto">
                <div
                    class="w-[337px] h-[589px] p-[30px] bg-white rounded-3xl shadow-custom flex-col justify-start items-start inline-flex">
                    <h3 class="text-neutral-800 text-xl font-normal font-['Poppins'] leading-[17px] mb-[20px]">Number
                        Details</h3>
                    <div class="flex justify-between items-center w-full">
                        <p class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[30px]">
                            Country</p>

                        <p class="text-zinc-600 text-sm font-light font-['Poppins'] leading-[30px]">: United States
                        </p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <p class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[30px]">
                            Number</p>

                        <p class="text-zinc-600 text-sm font-light font-['Poppins'] leading-[30px]">:+87987787465
                        </p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <p class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[30px]">
                            Type</p>

                        <p class="text-zinc-600 text-sm font-light font-['Poppins'] leading-[30px]">: Private
                        </p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <p class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[30px]">
                            Service</p>

                        <p class="text-zinc-600 text-sm font-light font-['Poppins'] leading-[30px]">:Any
                        </p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <p class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[30px]">
                            Rent</p>

                        <p class="text-zinc-600 text-sm font-light font-['Poppins'] leading-[30px]">: 1 Week
                        </p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <p class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[30px]">
                            Buy Date</p>

                        <p class="text-zinc-600 text-sm font-light font-['Poppins'] leading-[30px]">: 05 July 2023
                        </p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <p class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[30px]">
                            Remain</p>

                        <p class="text-zinc-600 text-sm font-light font-['Poppins'] leading-[30px]">: 12 days left
                        </p>
                    </div>
                    <div class="mt-[24px] w-full">
                        <h3 class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[17px]">Message Forward
                        </h3>

                        <div class="mt-[16px] flex justify-between items-center">
                            <input
                                class="max-w-[180px] w-full outline-none h-[37px] px-2 py-2.5 rounded-lg border border-zinc-600 justify-center items-center gap-2.5 inline-flex"
                                type="email" placeholder="Email Here" />

                            <button
                                class="w-[87px] h-[37px] px-5 py-2.5 rounded-lg border border-zinc-600 justify-center items-center gap-1.5 inline-flex">
                                <div class="text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px]">Save</div>
                                <div class="w-3 h-3 relative flex-col justify-start items-start inline-flex">

                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.25 11.5V10.5M7.25 11.5V10.5" stroke="#1E2329" stroke-width="0.5"
                                            stroke-linecap="round" />
                                        <path
                                            d="M5.5 10.5V10.75H5.75V10.5H5.5ZM7 10.25C6.86193 10.25 6.75 10.3619 6.75 10.5C6.75 10.6381 6.86193 10.75 7 10.75V10.25ZM8.75 3.25C8.61193 3.25 8.5 3.36193 8.5 3.5C8.5 3.63807 8.61193 3.75 8.75 3.75V3.25ZM3.5 3.25C3.36193 3.25 3.25 3.36193 3.25 3.5C3.25 3.63807 3.36193 3.75 3.5 3.75V3.25ZM4.5 10.25C4.36193 10.25 4.25 10.3619 4.25 10.5C4.25 10.6381 4.36193 10.75 4.5 10.75V10.25ZM7.5 10.75C7.63807 10.75 7.75 10.6381 7.75 10.5C7.75 10.3619 7.63807 10.25 7.5 10.25V10.75ZM5.25 6.125V10.5H5.75V6.125H5.25ZM5.5 10.25H2.11628V10.75H5.5V10.25ZM1.25 9.19767V6.125H0.75V9.19767H1.25ZM2.11628 10.25C1.67261 10.25 1.25 9.8164 1.25 9.19767H0.75C0.75 10.0175 1.32694 10.75 2.11628 10.75V10.25ZM3.25 3.75C4.3198 3.75 5.25 4.77578 5.25 6.125H5.75C5.75 4.57473 4.66548 3.25 3.25 3.25V3.75ZM3.25 3.25C1.83452 3.25 0.75 4.57473 0.75 6.125H1.25C1.25 4.77578 2.1802 3.75 3.25 3.75V3.25ZM10.75 6.125V9.21264H11.25V6.125H10.75ZM9.89655 10.25H7V10.75H9.89655V10.25ZM10.75 9.21264C10.75 9.8231 10.3331 10.25 9.89655 10.25V10.75C10.6788 10.75 11.25 10.0242 11.25 9.21264H10.75ZM11.25 6.125C11.25 4.57473 10.1655 3.25 8.75 3.25V3.75C9.8198 3.75 10.75 4.77578 10.75 6.125H11.25ZM3.5 3.75H9V3.25H3.5V3.75ZM4.5 10.75H7.5V10.25H4.5V10.75Z"
                                            fill="#1E2329" />
                                        <path d="M2.5 8.5H4" stroke="#1E2329" stroke-width="0.5" stroke-linecap="round" />
                                        <path
                                            d="M8 5.44216V3.2056M8 3.2056V1.81759C8 1.69952 8.08378 1.59806 8.19971 1.57572L8.44275 1.52889C8.7369 1.47221 9.04106 1.49928 9.32058 1.607L9.36017 1.62225C9.63729 1.72905 9.94035 1.749 10.2291 1.67946C10.3672 1.6462 10.5 1.75084 10.5 1.89287V3.00361C10.5 3.1221 10.4188 3.22516 10.3036 3.2529L10.2703 3.26092C9.95474 3.33694 9.62349 3.31513 9.32058 3.1984C9.04106 3.09067 8.7369 3.06361 8.44275 3.12029L8 3.2056Z"
                                            stroke="#1E2329" stroke-width="0.5" stroke-linecap="round" />
                                    </svg>

                                </div>
                            </button>


                        </div>
                    </div>
                    <div class="mt-[24px] w-full">
                        <h3 class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[17px]">Message Forward
                        </h3>

                        <div class="mt-[16px] flex justify-between items-center">
                            <input
                                class="max-w-[189px] w-full outline-none h-[37px] px-2 py-2.5 rounded-lg border border-zinc-600 justify-center items-center gap-2.5 inline-flex"
                                type="email" placeholder="Email Here" />

                            <button
                                class="max-w-[78px] h-[37px] w-full py-2.5 rounded-lg border border-zinc-600 justify-center items-center gap-1.5 inline-flex">
                                <div class="text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px]">Delete
                                </div>
                            </button>


                        </div>
                    </div>
                    <div class="mt-[24px] w-full">
                        <h3 class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[17px]">Extent Number
                        </h3>

                        <div class="mt-[16px] flex justify-between items-center">
                            <div
                                class="w-32 h-10 px-2 outline-none py-2.5 rounded-lg border border-zinc-600 justify-center items-center gap-1.5 inline-flex">
                                <select class="text-zinc-600 text-xs font-normal font-['Poppins'] leading-[17px] w-full" id="">
                                    <option class="text-zinc-600 text-xs font-normal font-['Poppins'] leading-[17px] w-full outline-none border-none" value="volvo">Volvo</option>
                                    <option class="text-zinc-600 text-xs font-normal font-['Poppins'] leading-[17px] w-full outline-none border-none" value="saab">Saab</option>
                                    <option class="text-zinc-600 text-xs font-normal font-['Poppins'] leading-[17px] w-full outline-none border-none" value="vw">VW</option>
                                    <option class="text-zinc-600 text-xs font-normal font-['Poppins'] leading-[17px] w-full outline-none border-none" value="audi" selected>Audi</option>
                                </select>
                            </div>

                            <div
                                class="max-w-[131px] h-[41px] w-full py-3 rounded-lg border border-zinc-600 justify-center items-center gap-1 inline-flex">
                                <div class="text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px]">Extent Now
                                </div>
                                <div class="w-3.5 h-3.5 relative"><svg width="14" height="15" viewBox="0 0 14 15"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.07396 8.81734C1.65485 6.86152 1.4453 5.88361 1.97062 5.2338C2.49594 4.58398 3.49605 4.58398 5.49626 4.58398H8.50402C10.5042 4.58398 11.5043 4.58398 12.0297 5.2338C12.555 5.88361 12.3454 6.86152 11.9263 8.81734L11.6763 9.984C11.3923 11.3097 11.2502 11.9725 10.7689 12.3616C10.2876 12.7507 9.60977 12.7507 8.25402 12.7507H5.74626C4.39052 12.7507 3.71264 12.7507 3.23135 12.3616C2.75006 11.9725 2.60802 11.3097 2.32396 9.984L2.07396 8.81734Z"
                                            stroke="#1E2329" stroke-width="0.5" />
                                        <path d="M4.6665 7.5H9.33317" stroke="#1E2329" stroke-width="0.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.8335 9.25H8.16683" stroke="#1E2329" stroke-width="0.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.5 5.75L8.75 2.25" stroke="#1E2329" stroke-width="0.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3.5 5.75L5.25 2.25" stroke="#1E2329" stroke-width="0.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>
</template>
<script >


export default {
    components: {

    },
    data() {

        return {
            openTab: 1,
            messageSeenStatus: false,
            toggleArrowIcon: false,
            numbersData: [
                {
                    id: 1,
                    number: "+8454655444",
                    status: true,
                    img: num1,
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 3,
                    number: "+8454655222",
                    status: false,
                    img: num2,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 4,
                    number: "+8454655222",
                    status: true,
                    img: num3,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 5,
                    number: "+8454655222",
                    status: false,
                    img: num4,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 6,
                    number: "+8454655222",
                    status: true,
                    img: num5,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 7,
                    number: "+8454655222",
                    status: false,
                    img: num6,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 8,
                    number: "+8454655222",
                    status: false,
                    img: num7,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 9,
                    number: "+8454655222",
                    status: false,
                    img: num1,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 10,
                    number: "+8454655222",
                    status: true,
                    img: num2,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 11,
                    number: "+8454655222",
                    status: false,
                    img: num3,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 12,
                    number: "+8454655222",
                    status: false,
                    img: num4,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 13,
                    number: "+8454655222",
                    status: true,
                    img: num5,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 14,
                    number: "+8454655222",
                    status: false,
                    img: num6,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 15,
                    number: "+8454655222",
                    status: false,
                    img: num7,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 16,
                    number: "+8454655222",
                    status: false,
                    img: num1,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
            ],
            numbers2Data: [
                {
                    id: 1,
                    number: "+845465445",
                    status: true,
                    img: num1,
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 3,
                    number: "+845464575",
                    status: false,
                    img: num2,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 4,
                    number: "+845465457",
                    status: true,
                    img: num3,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 5,
                    number: "+8454655445",
                    status: false,
                    img: num4,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 6,
                    number: "+8454655222",
                    status: true,
                    img: num5,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 7,
                    number: "+8454655222",
                    status: false,
                    img: num6,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 8,
                    number: "+8454655222",
                    status: false,
                    img: num7,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 9,
                    number: "+8454655222",
                    status: false,
                    img: num1,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 10,
                    number: "+8454655222",
                    status: true,
                    img: num2,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 11,
                    number: "+8454655222",
                    status: false,
                    img: num3,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 12,
                    number: "+8454655222",
                    status: false,
                    img: num4,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 13,
                    number: "+8454655222",
                    status: true,
                    img: num5,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 14,
                    number: "+8454655222",
                    status: false,
                    img: num6,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 15,
                    number: "+8454655222",
                    status: false,
                    img: num7,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 16,
                    number: "+8454655222",
                    status: false,
                    img: num1,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
            ],



        }

    },
    methods: {
        toggleMessageReadMore(messageData) {
            messageData.showFullMessage = !messageData.showFullMessage;
        },
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber
        },
        toggleArrow: function (v) {
            this.toggleArrowIcon = v
        },


    },
    computed: {
        formattedMessage() {
            return (messageData) => {
                const message = messageData.message;

                if (message.length <= 100 || messageData.showFullMessage) {

                    const parts = message.split(/(CODE:\s*\d+)/);
                    const formattedParts = parts.map((part, index) => {
                        if (index % 2 === 0) {
                            return part;
                        } else {

                            return `<span class="font-bold">${part}</span>`;
                        }
                    });

                    return formattedParts;
                }

                const parts = message.split(/(CODE:\s*\d+)/);
                const formattedParts = parts.map((part, index) => {
                    if (index % 2 === 0) {
                        return part;
                    } else {
                        return `<span class="font-bold	">${part}</span>`;
                    }
                });
                const formattedMessage = parts.length > 1 ? formattedParts[0] + formattedParts[1] : formattedParts.join("").slice(0, 100);

                return formattedMessage;
            };
        },
    },
};


</script>