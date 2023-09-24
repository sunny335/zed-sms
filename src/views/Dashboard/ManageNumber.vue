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
    <section class="ml-[25px] mb-[97px]">
        <div class="flex flex-wrap gap-[25px] justify-between">
            <!-- All Number -->
            <div class="max-w-[50%] w-full">
                <div class="w-[320px] h-[716px]">
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
                            class="w-full px-[2px] pt-[0px] pb-[30px] flex-col justify-start items-center gap-[30px] inline-flex overflow-y-auto scrollbar max-h-[570px]">
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


                                        <div class="flex justify-between items-center w-[300px] h-[58px]"
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

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <!-- All Number -->
            <div class="max-w-[45%] w-full">
                <div
                    class="w-[337px] h-[589px] p-[30px] bg-white rounded-3xl shadow-custom flex-col justify-start items-start inline-flex">
                    <h3 class="text-neutral-800 text-xl font-normal font-['Poppins'] leading-[17px] mb-[20px]">Number Details</h3>
                    <div class="flex justify-between items-center w-full">
                        <p class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[30px]">
                            Country</p>

                        <p class="text-zinc-600 text-sm font-light font-['Poppins'] leading-[30px]">: United States
                        </p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <p class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[30px]">
                            Country</p>

                        <p class="text-zinc-600 text-sm font-light font-['Poppins'] leading-[30px]">: United States
                        </p>
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